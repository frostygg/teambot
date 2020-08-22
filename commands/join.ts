import oneLine from 'common-tags';
import * as Commando from 'discord.js-commando';
import { Message } from 'discord.js';

export class JoinTeam extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'teams',
            memberName: 'join',
            description: 'Joins a team (red or blue).',
            guildOnly: true,
            args: [
                {
                    key: 'team',
                    prompt: 'Which team to join? (Red or Blue)',
                    type: 'string',
                    oneOf: ['red', 'blue']
                }
            ],
            throttling: {
                usages: 1,
                duration: 600
            }
        });
    }

    async run(msg, { team }) {
        if (msg.member.roles.get(config.roles.red) == undefined &&
            msg.member.roles.get(config.roles.blue) == undefined)
        {
            switch(team) {
                case 'red':
                    msg.member.addRole(config.roles.red);
                    return msg.reply("You are now in the red team.");
                case 'blue':
                    msg.member.addRole(config.roles.blue);
                    return msg.reply("You are now in the blue team.");
            }
        } else {
            return msg.reply("You are already in a team!");
        }
    }
}