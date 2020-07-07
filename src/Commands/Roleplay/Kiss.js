const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['kisses'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://media3.giphy.com/media/G3va31oEEnIkM/giphy.gif",
        "https://i.pinimg.com/originals/7e/28/71/7e28715f3c114dc720688f1a03abc5f5.gif",
        "https://thumbs.gfycat.com/FondEvergreenIcterinewarbler-size_restricted.gif",
        "https://acegif.com/wp-content/uploads/anime-kiss-m.gif",
        "https://i.pinimg.com/originals/e0/0f/31/e00f3104927ae27d7d6a32393d163176.gif",
        "https://i.imgur.com/i1PIph3.gif",
        "https://pa1.narvii.com/6248/2d96dcde51edeb7c91f194c71e7a15dddc367e13_00.gif",
        "https://24.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif",
        "https://thumbs.gfycat.com/WarpedSlightFrigatebird-size_restricted.gif",
        "https://media3.giphy.com/media/X3ndlrK6rOCt2/source.gif",
        "https://data.whicdn.com/images/144335846/original.gif",
        "https://cdn.lowgif.com/full/a83dce7fd4dda8f8-anime-kiss-gifs-find-share-on-giphy.gif",
        "https://pa1.narvii.com/6248/cae38662b21747d6247776d35b8d2db50944ef08_hq.gif",
        "https://cdn69.picsart.com/191947441000202.gif?to=min&r=480.gif",
        "https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif",
        "https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} kisses ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} wants a kiss.`)
            }
		return message.channel.send(embed);
    }
    
};
