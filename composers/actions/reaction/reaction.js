const { Composer, Markup } = require("telegraf");
const composer = new Composer();

composer.on('message', async (ctx) => {
    try {
        await ctx.replyWithHTML(`<b>Этот бот не является чатом с оператором.</b>
\nЕсли вы хотите связаться с оператором, нажмите на кнопку ниже.`,
        Markup.inlineKeyboard([
            [Markup.button.url("Перейти в чат с оператором", "https://t.me/HC_Avangard_chat_bot")],
        ]));
    } catch (e) {
        console.log(e);
    }
});

module.exports = composer;