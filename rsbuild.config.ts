import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  performance: {
    chunkSplit: {
      strategy: 'split-by-experience'
    }
  },
  html: {
    template: './index.html'
  }
});
