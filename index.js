import dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js'
import {
    sendCommands,
    welcomeNewUser,
    announceMessage,
    getWeather
} from './botFunctions.js'

dotenv.config();
const discordKey = process.env.DISCORD_KEY;
const weatherKey = process.env.WEATHER_KEY;
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });

// Log in when the bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    // don't listen to other bots
    if (message.author.bot) return;

    //send list of commands
    if (message.content === '!commands') {
        sendCommands(message);
    }

    // first command made, for learning purposes
    if (message.content === '!hello') {
        message.channel.send('Hello, World!');
    }

    // sends welcome command to new users
    if (message.content.startsWith('!announce')) {
        announceMessage(message);
    }

    if (message.content.startsWith('!weather')) {
        getWeather(message, weatherKey);
    }
});

client.on('guildMemberAdd', member => {
    welcomeNewUser(member);
})

// Log in to Discord with your bot token
client.login(discordKey);




