import type { Options } from '@wdio/types';
const headless: boolean = process.env.HEADLESS as unknown as boolean;
const browserOptions = {
  args: headless
    ? ['--disable-web-security', '--headless', '--disable-dev-shm-usage', '--no-sandbox', '--window-size=1920,1080']
    : ['--disable-web-security', '--disable-dev-shm-usage', '--no-sandbox', '--window-size=1920,1080']
};

export const dynamicConfig: Options.Testrunner = {
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': browserOptions
    },
    {
      maxInstances: 1,
      browserName: 'firefox',
      'moz:firefoxOptions': browserOptions
    },
    {
      maxInstances: 1,
      browserName: 'MicrosoftEdge'
    }
  ],
  services: ['chromedriver', 'geckodriver', 'edgedriver', 'shared-store']
};