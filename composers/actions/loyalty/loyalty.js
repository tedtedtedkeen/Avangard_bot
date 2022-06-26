const { Composer, Markup } = require("telegraf");
const composer = new Composer();

composer.action("btn_how-it-works", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML(`<b>Как это работает</b>
\nБонусы программы лояльности начисляются после покупок билетов или атрибутики, а также за ваши действия. Например:
> посещение выездных матчей
> заполнение личного профиля 
> активность в социальных сетях
В зависимости от количества накопленных баллов за всё время вам могут быть доступны статусы: новичок, игрок, ассистент, капитан — чем выше статус, тем больше товаров нематериальных поощрений вам будут доступны в каталоге.
<a href="www.google.com">Ссылка</a>`, 
            Markup.inlineKeyboard([
                [Markup.button.callback("Назад", "btn_back-to-loyalty")],
            ]));
    } catch (e) {
        console.log(e);
    }
});

composer.action("btn_how-to-spend", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML(`<b>Как тратить?</b>
\n1 бонус = 1 рубль 
\nБонусы бывают двух видов: те, что можно тратить только на покупку билетов и в магазине атрибутики (чаще всего это те бонусы, которые мы дарим просто так) и те, которые можно тратить ещё и на каталог нематериальных поощрений (бонусы, которые вы заработали сами).
\nБонусами можно оплачивать до 25% от суммы корзины в интернет-магазине и до 50% от заказа при покупке билетов.`,
            Markup.inlineKeyboard([
                [Markup.button.callback("Назад", "btn_back-to-loyalty")],
            ]));
    } catch (e) {
        console.log(e);
    }
});

composer.action("btn_order-status", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML(`🔎 <b>Узнать информацию о заказе</b>
\nЧтобы узнать всю информацию о вашем заказе, пожалуйста, нажмите на кнопку ниже и напишите ваш вопрос`, 
        Markup.inlineKeyboard([
            [Markup.button.url("Перейти в чат с оператором", "https://t.me/HC_Avangard_chat_bot")],
            [Markup.button.callback("⬅ Назад", "btn_back-to-loyalty")],
        ]));
    } catch (e) {
        console.log(e);
    }
});

composer.action("btn_back-to-loyalty", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML(`<b>Программа лояльности</b>`,
        Markup.inlineKeyboard([
            [Markup.button.callback("Как это работает?", "btn_how-it-works")],
            [Markup.button.callback("Как тратить?", "btn_how-to-spend")],
            [Markup.button.callback("Статус моего заказа или вопрос", "btn_order-status")],
            [Markup.button.callback("Назад", "btn_back-to-start")],
        ]));
    } catch (e) {
        console.log(e);
    }
});

module.exports = composer;