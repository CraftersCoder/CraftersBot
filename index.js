const { Client, Collection, Partials, GatewayIntentBits, ActivityType, Events } = require ('discord.js');
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const client = new Client({
    intents: [ Guilds, GuildMembers, GuildMessages ],
    partials: [ User, Message, GuildMember, ThreadMember ]
})

client.once("ready", () => {
    console.log(`${client.user.tag} est connecté !`);
    client.user.setPresence({ activities: [{ name: `la version ${require(`${process.cwd()}/package.json`).version}`, type: ActivityType.Watching }], status: 'idle' })
})

client.config = require('./config.js');

client.login(client.config.BOT.TOKEN)
