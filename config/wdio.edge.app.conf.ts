import { config } from "./wdio.shared.conf";

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'MicrosoftEdge'
  }
];
config.services = (config.services ? config.services : []).concat(['edgedriver']);
exports.config = config;