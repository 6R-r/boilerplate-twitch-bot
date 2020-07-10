/** 
 * The permissions system is based on the "badges" object returned by the TMI
 * For more info: https://dev.twitch.tv/docs/irc/tags#globaluserstate-twitch-tags
 */
const VALID_PERMISSIONS = ['broadcaster', 'moderator', 'subscriber', 'vip', 'turbo', 'bits']
const EXEMPT = ['broadcaster'];

module.exports = {
    VALID_PERMISSIONS,
    EXEMPT
}