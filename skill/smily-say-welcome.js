"use strict";

module.exports = class SkillFollow {

    finish(bot, event, context, resolve, reject){
        return bot.reply({
            type: "text",
            text: "Welcome."
        }).then((response) => {
            return resolve();
        });
    }
}
