import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }

    handle(): void {
        this.bot.start(ctx => {
            console.log(ctx.session);
            ctx.reply(`Did you like the course?.`, Markup.inlineKeyboard([
                Markup.button.callback("yes", "course_liked"), 
                Markup.button.callback("no", "course_disliked"), 
            ])); 
        });

        this.bot.action("course_liked", ctx => {
            ctx.session.courseLiked = true;
            ctx.editMessageText('thanks');
        })

        this.bot.action("course_disliked", ctx => {
            ctx.session.courseLiked = false;
            ctx.editMessageText('sorry');
        })
    }
}