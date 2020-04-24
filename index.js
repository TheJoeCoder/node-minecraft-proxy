const MCProxy = require('./src/index');

let localServerOptions = require('./options.json');

let serverList = require('./servers.json');

let proxyOptions = {
  enablePlugins: true
}

let proxy = MCProxy.createProxy(localServerOptions, serverList, proxyOptions);

proxy.on('error', console.error);

proxy.on('listening', () => {
  console.info('Listening!');
});
