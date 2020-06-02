/**
 * @author conner
 * @since 29-05-2020
 */

const dUtil = require("../../utils/discord");
const {token} = require("../../data/cfg.json");

let stop = false;

module.exports = {
    "info": {
        "permission": 1,
        "name": "clantag",
        "description": "Changes your clantag",
        "aliases": ["clan", "tag", "ct"],
        "syntax": "clantag [host]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});
        
        let satana = ["satana", "atana s", "tana sa", "ana sat", "na sata", "a satan"];
        let kappa = ["$£_.-$0-1'", "k£_.-$0-1'", "ka_.-$0-1'", "kap.-$0-1'", "kapp-$0-1'", "kappa$0-1'", "kappa.0-1'", "kappa.h-1'", "kappa.ho1'", "kappa.hos'", "kappa.host"];
        let host = ["p", "p.", "pa", "pa.", "pay", "pay.", "pays", "pays.", "pays.", "pays.h", "pays.h.", "pays.ho", "pays.ho.", "pays.hos", "pays.hos.", "pays.host"];
        let otc = ["onetap.su", "netap.su o", "etap.su on", "tap.su one", "ap.su onet", "p.su oneta", ".su onetap", "su onetap.", "u onetap.", "onetap.s"];

        if(args[0]) {
            let tag = args[0];
            let x = 0;

            switch(tag) {
                case "satana":
                    global.ct = setInterval(() => {
                        dUtil.setStatus(satana[x], null, token);
                        x++;

                        if(x == satana.length) x = 0;
                    }, 2500);

                    msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nSuccess :: Clantag has been set to SATANA\n\`\`\``);
                    break;
                case "kappa":
                    global.ct = setInterval(() => {
                        dUtil.setStatus(kappa[x], null, token);
                        x++;

                        if(x == kappa.length) x = 0;
                    }, 2500);

                    msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nSuccess :: Clantag has been set to KAPPA\n\`\`\``);
                    break;
                case "host":
                    global.ct = setInterval(() => {
                        dUtil.setStatus(host[x], null, token);
                        x++;

                        if(x == host.length) x = 0;
                    }, 2500);

                    msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nSuccess :: Clantag has been set to HOST\n\`\`\``);
                    break;
                case "otc":
                    // Thanks Quake =)
                    global.ct = setInterval(() => {
                        dUtil.setStatus(otc[x], null, token);
                        x++;

                        if(x == otc.length) x = 0;
                    }, 2500);

                    msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nSuccess :: Clantag has been set to OTC\n\`\`\``);
                    break;
                case "stop":
                    console.log(global.ct); // undefined
                    clearInterval(global.ct);
                    x = 0;

                    msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nSuccess :: Stopped clantag\n\`\`\``);
                    break;
            }
        }
    }
}