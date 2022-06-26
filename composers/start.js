const { Composer, Markup } = require("telegraf");
const composer = new Composer();

composer.start(async (ctx) => {
    try {
        await ctx.replyWithHTML(`<b>Здравствуйте, ${ctx.message.from.first_name || "New User"}!</b>\nВыберите, с чем вам требуется помощь и нажмите на нужную кнопку.`, 
        Markup.inlineKeyboard([
            [Markup.button.callback("🏪 Магазин", "btn_shop")],
            [Markup.button.callback("🎫 Билетная система", "btn_tickets")],
            [Markup.button.callback("🤝 Программа лояльности", "btn_bonuses")],
            [Markup.button.callback("👀 Другое", "btn_other")],
        ]));
    } catch (e) {
        console.log(e);
    }
});

module.exports = composer; 