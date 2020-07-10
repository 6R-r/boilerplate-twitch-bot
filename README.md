# boilerplate-twitch-bot
A very basic Twitch Bot boilerplate using `tmi.js`, with a command handler and experimental permissions system based on the user's badges returned by the TMI.

# Config
To run the bot correctly, you have to edit the `config.json` file found in the `cfg` directory, and replace the username, password, and channels. Change the prefix to
your liking.

# Validation
An example command found inside the `commands` directory is included to show how a command should be structured. The validation for command files is done using the `@hapi/joi` library, the schema for said validation can be found in the `validation` directory as `CommandSchema.js`. Similarly, a file called `PermissionTypes.js` can also be found there, which holds the known badges and exempt badges.

# Permissions
Currently there are only "hard permissions". "Hard permissions" basically means that permission to use a command will be granted to the user **if their badges satisfy at least one badge required by the command.** There are badges exempt from permission handling.

# Adding Capabilities
**This repository is only meant to be a starting point.** It is all in your hands to do whatever with this boilerplate, be it adding a capability for cooldowns, an economy system, or simply modifying how the boilerplate handles certain things, your options are endless. **These are too opinionated to be incorporated into this kind of project.**

# How to run
`node index.js`

# Todos
* Refactor event registering
* Change CommandStore to load from nested folders too

# Helpful resources
* TMI badges: https://dev.twitch.tv/docs/irc/tags#globaluserstate-twitch-tags
* tmi.js documentation: https://github.com/tmijs/docs/tree/gh-pages/_posts/v1.4.2
