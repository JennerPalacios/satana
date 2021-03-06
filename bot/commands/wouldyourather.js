/**
 * @author Kappador
 * @since 02-06-2020
 */

const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "wouldyourather",
        "description": "Gives you an would you rather question",
        "aliases": ["wyr", "wouldyou"],
        "syntax": "wouldyourather"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        request({
            uri: "https://www.rrrather.com/botapi?explanation=true",
            json: true
        }).then(data => {
            msg.channel.send(`\`\`\`asciidoc\nSUCCESS\n=====\n= ${data.title} =\n1 :: ${data.choicea}\n2 :: ${data.choiceb}\n\`\`\``)
            .then((message) => {
                message.react('1️⃣').then(() => {message.react('2️⃣')});
            });
        });
    }
}