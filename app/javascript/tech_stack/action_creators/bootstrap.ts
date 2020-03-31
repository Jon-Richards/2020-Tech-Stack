/**
 * @fileoverview
 * Contains an action creator that sets up the application.
 */

import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Store } from '../store';
import { MediaQueryTracker } from '../lib/media_query_tracker';
import { UpdateStatus } from '../store/application';
import { UpdateMatchingMediaQueries } from '../store/browser';
import { MediaQuery } from '../config/media_queries';
import { setRoute } from './set_route';
import { SetTools } from '../store/tools';

function updateStatus(): UpdateStatus {
  return {
    type: 'APPLICATION__UPDATE_STATUS',
    status: 'ready'
  };
}

function updateMatchingMediaQueries(
  matches: UpdateMatchingMediaQueries['matches']
): UpdateMatchingMediaQueries {
  return {
    type: 'BROWSER__UPDATE_MATCHING_MEDIA_QUERIES',
    matches
  };
}

/**
 * Initializes the Media Query Tracker with the standard media queries and
 * a callback to update the store so that the application will have up to
 * date query matches at sensible times, e.g. orientation state change.
 * @param dispatch Reference to the dispatch method for updating the Store.
 * @param queries The set of queries to use when configuring the Media Query
 * Tracker.
 */
function trackMediaQueries (
  dispatch: ThunkDispatch<
    Store,
    undefined,
    | UpdateMatchingMediaQueries
  >,
  queries: MediaQuery[]
): MediaQueryTracker<MediaQuery> {
  return new MediaQueryTracker(
    queries,
    [
      {event: 'load', throttle: 0},
      {event: 'resize', throttle: 500},
      {event: 'orientationchange', throttle: 500}
    ],
    (e) => dispatch(updateMatchingMediaQueries(e.matches))
  );
}

/** Coordinates bootstrapping the application. */
export function bootstrap(): ThunkAction<
  Promise<UpdateStatus | void> | void,
  Store,
  undefined,
  | UpdateStatus
  | SetTools
> {
  return (dispatch, getState) => {

    trackMediaQueries(dispatch, getState().browser.possible_media_queries);
    dispatch(setRoute(window.location.pathname));

    fetch('/tools')
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        /**
         * **NOTE**  
         * TypeScript has no idea what type "data" is at this stage, so it has
         * to be cast manually.  Normally I would instantiate classes from
         * "data" for the purpose of validating it.
         */
        const cast = data as unknown as Store['tools']['tools'];
        const tools: Store['tools']['tools'] = cast;
        dispatch({
          type: 'TOOLS__SET_TOOLS',
          tools
        });
      });

    return new Promise((resolve, reject) => {
      resolve();
    }).then(() => {
      return dispatch(updateStatus());
    }).catch(error => {
      console.error(error);
    });
  };
}