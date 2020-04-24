function handleCommands (client, proxy, localServerOptions, proxyOptions) {
  proxy.on('login', (player) => {
    console.info(`${player.username} connected from ${player.socket.remoteAddress}`);

    player.on('end', () => {
      console.info(`${player.username} disconnected: ${player.socket.remoteAddress}`);
    });

    player.on('error', (err) => {
      console.error(`${player.username} disconnected with error: ${player.socket.remoteAddress}`, err);
    });
  });

  proxy.on('moveFailed', (err, playerId, oldServerName, newServerName) => {
    console.error(`Player ${proxy.clients[playerId].username} failed to move from ${oldServerName} to ${newServerName}`, err);
  });

  proxy.on('playerMoving', (playerId, oldServerName, newServerName) => {
    console.info(`Player ${proxy.clients[playerId].username} is moving from ${oldServerName} to ${newServerName}`);
  });

  proxy.on('playerMoved', (playerId, oldServerName, newServerName) => {
    console.info(`Player ${proxy.clients[playerId].username} has moved from ${oldServerName} to ${newServerName}`);
  });

  proxy.on('playerFallback', (playerId, oldServerName, newServerName) => {
    console.info(`Player ${proxy.clients[playerId].username} is falling back from ${oldServerName} to ${newServerName}`);
  });
}
module.exports = handleCommands;
