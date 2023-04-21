// Importing Discord js packages
const { EmbedBuilder } = require('@discordjs/builders');
const { GuildMember } = require('discord.js');
const youtube = 'AIzaSyBU3ME_jTpdWHne0hakZiVgY4qxQQ53mbk';
const youtubeUrl = 'https://www.googleapis.com/youtube/v3';


//dotenv properties
require('dotenv').config();

//discord bot application

const { Client } = require('discord.js');
const Bot = new Client();

module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        const { user, guild } = member;
        const welcomeChannel = member.guild.channels.cache.get('933847397359026258');
        const welcomeMessage = `Welcome <@${member.id}> to the guild fam!`;
        welcomeChannel.send({content: welcomeMessage});
    }
}

Bot.on('ready', () => {
    console.log(`${Bot.user.tag} is successfully logged in!`);
})

Bot.login(process.env.BOT);