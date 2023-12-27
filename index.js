const TelegramBot = require("node-telegram-bot-api");

// Replace with your Telegram bot token
const botToken = "6370448394:AAGaA-FFH92-lylUkKBPF321PkuCppcVBug";

// Create a new Telegram bot
const bot = new TelegramBot(botToken, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "recieved")
})

// Listen for chat member updates
bot.on("chatMemberUpdated", async (update) => {

  try {
    const chatId = await update.chat.id;
    const newMember = await update.message.new_chat_member;

    // Check if a new member joined
    if (newMember) {
      const chatInviteLink = await update.message.chat_invite_link;

      if (chatInviteLink) {
        console.log(
          `New member ${newMember.first_name} joined in chat ${chatId}`
        );
        console.log(`Chat Invite Link: ${chatInviteLink}`);
      } else {
        console.log(`Chat Invite Link not available for chat ${chatId}`);
      }
    }
  } catch (error) {
    console.log(error)
  }
});
