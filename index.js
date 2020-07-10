// get cfg
const Config = require('./cfg/config.json');

// import events
const onChatEvent = require('./events/onChatEvent');

// init TMI
const TMI = require('tmi.js');
const client = new TMI.client(Config.tmiOptions);
client.connect();

/**
 * Register events here
 * For a more detailed rundown of how TMI and its events work, visit this repository
 * https://github.com/tmijs/docs/tree/gh-pages/_posts/v1.4.2
 */
// todo: refactor registering events
client.on('chat', async(channel, userstate, message, self) => await onChatEvent(client, channel, userstate, message, self));