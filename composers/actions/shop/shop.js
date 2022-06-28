const { Composer, Markup } = require("telegraf");
const composer = new Composer();

composer.action("btn_back-merch", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML(`<b>Возврат мерча из интернет-магазина</b>
\nПожалуйста, нажмите на кнопку внизу, перейдите в чат с оператором, после напишите номер заказа и причину его возврата. Мы направим курьера, чтобы он забрал товар, который вы хотите вернуть. Далее события будут развиваться в зависимости от причин возврата: это может быть обмен, полный возврат денег или возврат по итогам экспертизы (ненадлежащее качество). Также вы можете вернуть товары, купленные в интернет-магазине, в магазин атрибутики по адресу: [тут будет адрес].`,
    Markup.inlineKeyboard([
        [Markup.button.url("Перейти в чат с оператором", "https://t.me/HC_Avangard_chat_bot")],
        [Markup.button.callback("⬅ Назад", "btn_back-to-shop")],
    ]));
    } catch (e) {
        console.log(e);
    }
});

composer.action("btn_back-off-merch", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML(`<b>Возврат мерча из офф-магазина атрибутики</b>
\nПожалуйста, прочитайте правила возврата товаров вот тут: <a href="www.google.com">[тут будет ссылка]</a>.Вы можете вернуть товары в магазин атрибутики по адресу: [тут будет адрес].`, 
        Markup.inlineKeyboard([
            [Markup.button.callback("Назад", "btn_back-to-shop")],
        ]));
    } catch (e) {
        console.log(e);
    }
});

composer.action("btn_question", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML(`<b>Чат с оператором</b>
\nЕсли вам требуется помощь, нажмите на кнопку ниже, чтобы связаться с оператором и опишите вашу проблему.`, 
        Markup.inlineKeyboard([
            [Markup.button.url("Перейти в чат с оператором", "https://t.me/HC_Avangard_chat_bot")],
            [Markup.button.callback("Назад", "btn_back-to-shop")],
        ]));
    } catch (e) {
        console.log(e);
    }
});

composer.action("btn_back-to-shop", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML("<b>Магазин:</b>", 
        Markup.inlineKeyboard([
            [Markup.button.callback("Возврат мерча из интернет-магазина", "btn_back-merch")],
            [Markup.button.callback("Возврат мерча из офф-магазина атрибутики", "btn_back-off-merch")],
            [Markup.button.callback("Задать вопрос", "btn_question")],
            [Markup.button.callback("Назад", "btn_back-to-start")],
        ]));
    } catch (e) {
        console.log(e);
    }
});

module.exports = composer;