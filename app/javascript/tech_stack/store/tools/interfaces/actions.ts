import { Action } from 'redux';
import { ToolsStore } from './store';

/** 
 * Sets the currently active tool.
 */
export interface SetCurrentTool extends Action<
  'TOOLS__SET_CURRENT_TOOL'
> {
  current_tool: ToolsStore['current_tool']
}

/** 
 * Sets the list of tools.
 */
export interface SetTools extends Action<
  'TOOLS__SET_TOOLS'
> {
  tools: ToolsStore['tools']
}