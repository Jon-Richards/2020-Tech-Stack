import { Reducer } from 'redux';
import { ToolsStore } from './interfaces/store';
import { SetCurrentTool, SetTools } from './interfaces/actions';

/**
 * The Redux reducer for the Tools store.  Contains information related to
 * various tools as well as the currently active tool.
 * @param state An object representing the current state of the Tools store.
 * @param action An action creator for updating the supplied state.
 */
export const TOOLS_REDUCER: Reducer<
  ToolsStore,
  | SetCurrentTool
  | SetTools
> = (
  state = {
    current_tool: null,
    tools: []
  },
  action
) => {
  switch(action.type) {
    case 'TOOLS__SET_CURRENT_TOOL':
      return {
        ...state,
        current_tool: action.current_tool
      };
    case 'TOOLS__SET_TOOLS':
      return {
        ...state,
        tools: action.tools
      }
    default:
      return state;
  }
};