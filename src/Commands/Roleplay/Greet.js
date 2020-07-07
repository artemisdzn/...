const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['greets'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://cdn.zerotwo.dev/GREET/4a61b89b-7cff-4b2d-915c-814ff7e33c38.gif",
        "https://cdn.zerotwo.dev/GREET/366905ce-85fe-4145-83c3-43d548e0a3fc.gif",
        "https://cdn.zerotwo.dev/GREET/3862d046-45ad-45e5-a275-0271c73f48a1.gif",
        "https://cdn.zerotwo.dev/GREET/7099380a-8667-4879-98da-f93cc28278db.gif",
        "https://cdn.zerotwo.dev/GREET/70a5cda3-2064-456d-8e20-f5982a5f795a.gif",
        "https://cdn.zerotwo.dev/GREET/cee343db-82f9-419c-bb29-06b57e896b6c.gif",
        "https://pa1.narvii.com/6112/c25eef8c38179276593e9961c1abd2e12bbbf1d0_hq.gif",
        "https://i.kym-cdn.com/photos/images/original/001/371/139/a10.gif",
        "https://i.imgur.com/Bb7T2kV.gif",
        "https://data.whicdn.com/images/58725628/original.gif",
        "https://cdn.zerotwo.dev/GREET/641a9b0e-8b0e-49f6-9a3f-cbff9e3bb146.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} greets to ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} greets.`)
            }
		return message.channel.send(embed);
    }
    
};
