require('dotenv').config();

const { 
    Client,
    Intents,
} = require('discord.js');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

client.once('ready', () => {
    console.log('I AM READY')
});

const waitFor = (ms) => new Promise(resolve => setTimeout(resolve, ms ));

client.on('interactionCreate', async (interaction) => {
    if (interaction.isCommand()) {
        const {commandName} = interaction;
        switch (commandName) {
            case 'ping':
                const user = interaction.user;
                console.dir(user);
                const me = await client.users.fetch(process.env.MY_USER_ID);
                console.log(me)
                await interaction.reply(`Hi, ${user}.`);
                break;

            case 'fart':
                try {
                    const me = await client.users.fetch(process.env.MY_USER_ID);
                    const kyle = await client.users.fetch(process.env.KYLES_USER_ID);
                    await interaction.reply('Starting the message spammer....');
                    
                    for( let i = 0; i < 5; i++) {
                        await waitFor(1000);
                        await me.send(`This is a test from ${me}`);
                    }                    
                    
                } catch (error) {
                    console.error({error}, 'WHOOPS');
                }

            case 'notify':
                const targetUser = interaction.options.get('target_user');
                const numberOfMessage = interaction.options.get('number_of_messages');
                const invokee = interaction.user;

                // console.log(targetUser)
                // console.log(numberOfMessage)
                await interaction.reply({
                    content: `I'm about to message ${targetUser.user} ${numberOfMessage.value} time${numberOfMessage.value > 1 ? 's' : ''}.`,
                    ephemeral: true,
                });
                for( let i = 0; i < numberOfMessage.value; i++) {
                    await waitFor(750);
                    await targetUser.user.send(`${invokee} wanted to send you a message!`, {});
                }
                return;
            default:
                return;
        }
    }
});

client.on('error', (error) => {
    console.error(error)
})

client.login(process.env.BOT_USER_TOKEN);