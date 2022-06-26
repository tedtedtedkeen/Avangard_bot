const { Composer, Markup } = require("telegraf");
const composer = new Composer();

composer.action("btn_shop", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML("🏪 <b>Магазин:</b>", 
        Markup.inlineKeyboard([
            [Markup.button.callback("Возврат мерча из интернет-магазина", "btn_back-merch")],
            [Markup.button.callback("Возврат мерча из офф-магазина атрибутики", "btn_back-off-merch")],
            [Markup.button.callback("Задать вопрос", "btn_question")],
            [Markup.button.callback("Назад", "btn_back-to-start")],
        ]));
    } catch(e) {
        console.log(e)
    }
});

composer.action("btn_tickets", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML("🎫 <b>Билеты:</b>", 
        Markup.inlineKeyboard([
            [Markup.button.callback("Покупка билета или абонемента", "btn_buy-ticket")],
            [Markup.button.callback("Возврат билета", "btn_ticket-refund")],
            [Markup.button.callback("Задать вопрос", "btn_question-tickets")],
            [Markup.button.callback("Назад", "btn_back-to-start")],
        ]));
    } catch (e) {
        console.log(e);
    }
});

composer.action("btn_bonuses", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML("🤝 <b>Программа лояльности</b>",
        Markup.inlineKeyboard([
            [Markup.button.callback("Как это работает?", "btn_how-it-works")],
            [Markup.button.callback("Как тратить?", "btn_how-to-spend")],
            [Markup.button.callback("Статус моего заказа или вопрос", "btn_order-status")],
            [Markup.button.callback("Назад", "btn_back-to-start")],
        ]));
    } catch(e) {
        console.log(e);
    }
});

composer.action("btn_other", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML(`💬 <b>Чат с оператором</b>
 \nЕсли вам требуется помощь, нажмите на кнопку ниже, чтобы связаться с оператором.`,
        Markup.inlineKeyboard([
            [Markup.button.url("Перейти в чат с оператором", "https://t.me/HC_Avangard_chat_bot")],
            [Markup.button.callback("Назад", "btn_back-to-start")],
        ]));
    } catch (e) {
        console.log(e);
    }
});

composer.action("btn_back-to-start", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML("<b>Выберите нужную категорию:</b>", 
        Markup.inlineKeyboard([
            [Markup.button.callback("🏪 Shop", "btn_shop")],
            [Markup.button.callback("🎫 Билетная система", "btn_tickets")],
            [Markup.button.callback("🤝 Программа лояльности", "btn_bonuses")],
            [Markup.button.callback("👀 Другое", "btn_other")],
        ]));
    } catch(e) {
        console.log(e);
    }
});


module.exports = composer;