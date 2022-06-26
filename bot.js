require("dotenv").config();

const { 
    Telegraf, 
} = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(require("./composers/start"));

bot.use(require("./composers/actions/main/main"));

bot.use(require("./composers/actions/shop/shop"));

bot.use(require("./composers/actions/tickets/tickets"));

bot.use(require("./composers/actions/loyalty/loyalty"));

bot.use(require("./composers/actions/reaction/reaction"))

bot
.launch()
.then(() => console.log("The bot is running"));