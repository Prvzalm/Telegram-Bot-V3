const { Telegraf } = require('telegraf');
const express = require('express');
const { message } =  require('telegraf/filters')

const app = express();

const botToken = '';

const bot = new Telegraf(botToken);

bot.on('chat_member', (ctx) => {
  console.log(ctx.chatMember.invite_link.invite_link)
})

// Start the bot
bot.launch({
  allowedUpdates : ['chat_member']
}).then(() => {
  console.log('Bot is running');
});
