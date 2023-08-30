import { config } from "./wdio.shared.conf";

const headless: boolean = process.env.HEADLESS as unknown as boolean;
const browserOptions = {
  args: headless
    ? ['--disable-web-security', '--headless', '--disable-dev-shm-usage', '--no-sandbox', '--window-size=1920,1080']
    : ['--disable-web-security', '--disable-dev-shm-usage', '--no-sandbox', '--window-size=1920,1080']
};

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': browserOptions,
    acceptInsecureCerts: true
  }
];
config.services = (config.services ? config.services : []).concat(['chromedriver', 'shared-store']);
exports.config = config;