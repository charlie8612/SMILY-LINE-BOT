"use strict";

module.exports = class SkillSmilyDrinkReply {
    constructor(){
        this.required_parameter = {
            menu: {
                message_to_confirm: {
                    type: "template",
                    altText: "what do you have",
                    template: {
                        type: "buttons",
                        text: "here i have",
                        actions: [
                            {type: "message", label: "milk", text: "milk"},
                            {type: "message", label: "water", text: "water"},
                            {type: "message", label: "soda", text: "soda"}
                        ]
                    }
                },
                parser: (value, bot, event, context, resolve, reject) => {
                    if (["milk", "water", "soda"].includes(value)) {
                        return resolve(value);
                    }
                    return reject();
                },
                reaction: (error, value, bot, event, context, resolve, reject) => {
                    if (error) return resolve();
                    bot.queue({
                        type: "text",
                        text: 'reatttttttttt!'
                    });
                    return resolve();
                }
            }
        }
    }
    finish(bot, event, context, resolve, reject){
        return bot.reply({
            type: "text",
            text: `OKEY!`
        }).then((response) => {
            return resolve(response);
        });
    }
}
