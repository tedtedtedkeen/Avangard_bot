const { Composer, Markup } = require("telegraf");
const composer = new Composer();

composer.action("btn_buy-ticket", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML(`<b>Покупка билета или абонемента</b>
\nКупить абонемент или билет на игру вы можете в личном кабинете <u><a href="www.hawk.ru">на официальном сайте</a></u> , в приложении или в кассах арены G-Drive.
Будьте внимательны, есть несколько простых правил:
>  Одна учётная запись — один абонемент
>  На один аккаунт нельзя купить более 4 билетов на одну игру
>  Для покупки детского абонемента нужно обратиться в кассу арены (при себе иметь подтверждающие документы)
>  Для приобретения льготного билета нужно обратиться в кассу арены G-Drive`, 
            Markup.inlineKeyboard([
                [Markup.button.callback("Назад", "btn_back-to-tickets")],
            ]));
    } catch (e) {
        console.log(e);
    }
});

composer.action("btn_ticket-refund", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML(`<b>Возврат билета</b>
\nВы можете вернуть билет на матч, до начала которого не менее 48 часов. 
\nДля этого зайдите в личный кабинет <u><a href="www.hawk.ru">на сайте клуба "Авангард"</a></u>. Нажмите кнопку «список заказов» (под значком профиля в правом верхнем углу), чтобы попасть в раздел «Мои заказы». Выберете заказ, который хотите вернуть и нажмите «подробнее». В раскрывшемся окне есть кнопка «вернуть билет» — нажмите её. Готово!
\nЧек возврата придёт на почту, которая привязана к аккаунту, а деньги — в зависимости от сроков, регламентированных банком, которым вы пользуетесь. Обычно возврат средств на личный счёт происходит в течение 7–14 рабочих дней. 
\nЕсли что-то пошло не так, пожалуйста, выберете «задать вопрос», напишите в этот чат все подробности возникшей проблемы — мы обязательно поможем.`, 
            Markup.inlineKeyboard([
                [Markup.button.callback("Назад", "btn_back-to-tickets")],
            ]));
    } catch (e) {
        console.log(e);
    }
});

composer.action("btn_question-tickets", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML(`<b>Чат с оператором</b>
\nЕсли вам требуется помощь, нажмите на кнопку ниже, чтобы связаться с оператором и опишите вашу проблему.`, 
        Markup.inlineKeyboard([
            [Markup.button.url("Перейти в чат с оператором", "https://t.me/HC_Avangard_chat_bot")],
            [Markup.button.callback("Назад", "btn_back-to-tickets")],
        ]));
    } catch (e) {
        console.log(e);
    }
});

composer.action("btn_back-to-tickets", async (ctx) => {
    try {
        await ctx.answerCbQuery();
        await ctx.replyWithHTML("<b>Билеты:</b>", 
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

module.exports = composer;