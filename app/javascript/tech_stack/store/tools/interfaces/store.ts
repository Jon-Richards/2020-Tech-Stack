import { Tool } from './tool';

/** Shape of the Tools store. */
export type ToolsStore = {
  current_tool: Tool | null;
  tools: Tool[];
}