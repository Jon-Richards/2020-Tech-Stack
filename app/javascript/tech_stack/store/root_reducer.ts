import { combineReducers } from 'redux';
import { APPLICATION_REDUCER as application } from './application';
import { BROWSER_REDUCER as browser } from './browser';
import { TOOLS_REDUCER as tools } from './tools';

/**
 * Reducer comprised of all other top level reducers.  This should never be
 * updated directly.
 */
export const ROOT_REDUCER = combineReducers({
  application,
  browser,
  tools
});
