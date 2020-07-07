const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['pokes'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://media.tenor.com/images/6d227fd93656bd164985aad517a25c3f/tenor.gif",
        "https://i.pinimg.com/originals/b4/95/fb/b495fb19f4b9a1b04f48297b676c497b.gif",
        "https://media1.giphy.com/media/pWd3gD577gOqs/giphy.gif",
        "https://i.imgur.com/N7g7caI.gif",
        "https://media.tenor.com/images/bf6d48509b4ec6d8b759b49a5e6336f9/tenor.gif",
        "https://thumbs.gfycat.com/IndolentFragrantIrishterrier-small.gif",
        "https://i.pinimg.com/originals/67/11/dd/6711ddf3a591bbc99aab173f3c0190de.gif",
        "https://i.imgur.com/xSvkpIh.gif",
        "https://i.gifer.com/S00v.gif",
        "https://thumbs.gfycat.com/ConventionalIlliterateFattaileddunnart-size_restricted.gif",
        "https://66.media.tumblr.com/tumblr_m8pu2plq9m1roiqt7o1_400.gif",
        "https://i.imgur.com/0NiK25x.gif",
        "https://media.moddb.com/cache/images/groups/1/1/84/thumb_620x2000/rxsyBWA.gif",
        "https://66.media.tumblr.com/tumblr_lkn1twb83X1qbq4v6o1_500.gif",
        "https://i.imgur.com/KCAdA7c.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} pokes ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} wants to poke someone.`)
            }
		return message.channel.send(embed);
    }
    
};
