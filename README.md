# Test Discord Bot

Made this repo to play around with automatically messaging users in a discord server

The framework of this is based upon the Discrod.js guides for

- [Registering Slash Commands](https://discordjs.guide/interactions/registering-slash-commands.html#guild-commands)
- [Replying to Slash Commeands](https://discordjs.guide/interactions/replying-to-slash-commands.html)

## Requirements

Need a discord server!


## Getting started

1. clone the repo, and run

    ```bash
    npm i
    ```

2. [Create a discord bot user](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

3. [Add your bot to you server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)

    1. Note: I had to tweak permissions somewhat to get the current features to work correctly. The Discord UI for managing the bot will eventually generate a link for use. The permission integer that I ended up with as part of that process was `2147489792`. YMMV.

4. Register some commands

    1. Some basic commands are setup in [registerCommands.js](./registerCommands.js). From the project root, run 

        ```bash
        npm run register-commands
        ```

5. Start the bot!

    ```bash
    npm start
    ```

    __Note__: this starts starts the bot _locally_. Once you kill the process, the bot stop working


## Todo:

- [ ] Deploy this somewhere so I don't have to leave y computer on forever
- [ ] Better organize the events commands


## More helpful links

- [Discord.js documentation](https://discord.js.org/docs/#/docs/discord.js/stable/general/welcome)
- [Discord dev guide](https://discord.com/developers/docs/interactions/application-commands)