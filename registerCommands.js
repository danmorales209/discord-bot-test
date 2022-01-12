// Only need to run this to register commands once on the server
require('dotenv').config();

const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    REST
} = require('@discordjs/rest');
const {
    Routes
} = require('discord-api-types/v9');

const guildId = process.env.SERVER_ID || '924922730703355984'; // default is for my test server
const clientId = process.env.BOT_CLIENT_ID || '';
const token = process.env.BOT_USER_TOKEN || '';

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
    new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
].map(command => command.toJSON());

const rest = new REST({
    version: '9'
}).setToken(token);

const regUserCommands = async () => {
    try {
        await rest.put(Routes.applicationCommands(clientId, guildId), {
            body: commands
        })
        console.log(' I MADE SOME COMMANDS YOOOOOO!!!!!')
    } catch (error) {
        console.log('OH NOOOOOOO');
        console.error(error);
    }
};

const regGlobalCommands = async () => {
    const globalCommand = [
        new SlashCommandBuilder()
        .setName('notify')
        .setDescription('ping a user')
        .addUserOption(targetUser =>
            targetUser.setName('target_user')
            .setDescription('The User to ping')
            .setRequired(true)
        )
        .addIntegerOption(numMessages =>
            numMessages.setName('number_of_messages')
            .setDescription('how many times to message the user')
            .setRequired(true)
            .setMinValue(1)
            .setMaxValue(10)
        )
    ];

    try {
        await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
            body: globalCommand
        });
    } catch (error) {
        console.error(error);
    }
}

const getApplicationCommands = async () => {
    try {
        const data = await rest.get(Routes.applicationGuildCommands(clientId, guildId))
        console.log(data);
    } catch (error) {
        console.error(error)
    }
};

return regGlobalCommands();
// return getApplicationCommands();