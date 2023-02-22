// Importation des dépendances
const { Client, Collection, Partials, GatewayIntentBits, ActivityType, Events } = require ('discord.js');
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

// Création du client Discord.js
const client = new Client({
    intents: [ Guilds, GuildMembers, GuildMessages ], // Activation des intentions
    partials: [ User, Message, GuildMember, ThreadMember ] // Activation des partials
});

// Code exécuté une fois le bot prêt
client.once("ready", () => {
    console.log(`${client.user.tag} est connecté !`);
    // Mise à jour de la présence du bot avec la version du package.json
    client.user.setPresence({ activities: [{ name: `la version ${require(`${process.cwd()}/package.json`).version}`, type: ActivityType.Watching }], status: 'idle' }); //online(Enligne)/dnd(Ne pas déranger)/idle(Inactif)/invisible(Invisible)
});

// Chargement de la configuration depuis un fichier externe
client.config = require('./config.js');

// Connexion du bot à Discord avec le token d'authentification
client.login(client.config.BOT.TOKEN);
