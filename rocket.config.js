import { rocketLaunch } from '@rocket/launch';
import { rocketBlog } from '@rocket/blog';
import { rocketSearch } from '@rocket/search';
import { absoluteBaseUrlNetlify } from '@rocket/core/helpers';
import { adjustPluginOptions } from 'plugins-manager';
import { codeTabs } from 'rocket-preset-code-tabs';

/** @type {import('./packages/cli/types/main').RocketCliOptions} */
export default {
  absoluteBaseUrl: absoluteBaseUrlNetlify('http://localhost:8080'),

  presets: [
    rocketLaunch(),
    rocketBlog(),
    rocketSearch(),
    codeTabs({
      collections: {
        packageManagers: {
          npm: { label: 'NPM', iconHref: '/_merged_assets/_static/logos/npm.svg' },
          yarn: { label: 'Yarn', iconHref: '/_merged_assets/_static/logos/yarn.svg' },
          pnpm: { label: 'PNPM', iconHref: '/_merged_assets/_static/logos/pnpm.svg' },
        },
      },
    }),
  ],

  setupUnifiedPlugins: [
    adjustPluginOptions('mdjsSetupCode', {
      simulationSettings: {
        simulatorUrl: '/simulator/',
        themes: [
          { key: 'light', name: 'Light' },
          { key: 'dark', name: 'Dark' },
        ],
        platforms: [
          { key: 'web', name: 'Web' },
          { key: 'android', name: 'Android' },
          { key: 'ios', name: 'iOS' },
        ],
      },
    }),
  ],

  // serviceWorkerName: 'sw.js',
  // pathPrefix: '/_site/',

  // emptyOutputDir: false,
};
