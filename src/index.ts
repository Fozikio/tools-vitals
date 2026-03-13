/**
 * @fozikio/tools-vitals — vitals tracking plugin for cortex-engine.
 *
 * Provides 2 tools: vitals_get, vitals_set.
 * Tracks five dimensions: curiosity, connection, confidence, creative_energy, frustration.
 * Includes behavioral trigger evaluation on read.
 */

import type { ToolPlugin } from 'cortex-engine';
import { vitalsGetTool } from './tools/vitals-get.js';
import { vitalsSetTool } from './tools/vitals-set.js';

const plugin: ToolPlugin = {
  name: '@fozikio/tools-vitals',
  tools: [
    vitalsGetTool,
    vitalsSetTool,
  ],
};

export default plugin;

// Named re-exports for direct use
export { vitalsGetTool } from './tools/vitals-get.js';
export { vitalsSetTool } from './tools/vitals-set.js';
