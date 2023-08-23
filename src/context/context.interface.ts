import { Context } from "telegraf"

export interface Session {
    courseLiked: boolean;
}

export interface IBotContext extends Context {
    session: Session;
}
