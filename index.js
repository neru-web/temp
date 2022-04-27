require('dotenv').config();
const { Client, GuildTemplate } = require('discord.js');
const fs = require('fs');
const client = new Client();
client.on('ready', () => {
  client.user.setActivity('ステータス内容', {
    type: 'PLAYING'
  });
});

client.on('message', async message => {
  if (message.content == 'この文字だけに反応') {
    message.channel.send('この文字だけに反応')
  }
})

client.on('message', async message => {
  if (message.content.match(/この文字を含むものに反応/)) {
    message.channel.send('この文字を含むものに反応')
  }
})

client.on('message', async message => {
  if (message.content == '特定の文字でリアクション') {
    message.react('🎇');
  }
})
client.login(process.env.DISCORD_BOT_TOKEN);