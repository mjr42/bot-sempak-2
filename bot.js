const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDQ0ODAwNjUzMDM1MDQ0ODY1.DdhRtg.EPN_ggOT5Z9-lhAWCuSQWdLrfNs';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('process.env.BOT_TOKEN');

client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  if (message.content === 'rhana') {
    message.channel.send('Goceng sia');
  }
});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Assalamualaikum wa Mabar teu, ${member}`);
});
