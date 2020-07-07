const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const math = require('mathjs');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['calculate'],
			description: 'Get the answer to a math problem.',
            category: 'Utilities'
		});
	}

	async run (message, args){

        if(!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new MessageEmbed()
        .setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
        .setColor('ff0068')
        .setTitle('CALCULATOR')
        .addField('QUESTION', `\`\`\`css\n${args.join(' ')}\`\`\``)
		.addField('ANSWER', `\`\`\`css\n${resp}\`\`\``)
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true}))
        .setTimestamp();

        message.channel.send(embed);

	}
	
};
