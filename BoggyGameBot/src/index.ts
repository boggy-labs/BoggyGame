import TelegramBot from "node-telegram-bot-api";
import { config } from "./config/config";

// create bot
const bot = new TelegramBot(config.bot.token, {
  polling: true,
  request: {
    url: config.bot.api,
    agentOptions: {
      keepAlive: true,
      family: 4,
    },
  },
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});
process.on("unhandledRejection", (reason, promise) => {
  console.log(reason + ":" + promise);
});
