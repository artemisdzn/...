const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['laughs'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://media.tenor.com/images/a2741132a4f7ddf637513737364d87d9/tenor.gif",
        "https://media.tenor.com/images/b92a29ad9c6dbb13e9d90ac8362657d3/tenor.gif",
        "https://media3.giphy.com/media/TORQpT78yQR5S/giphy.gif",
        "https://media2.giphy.com/media/pa1WaYStUKyLC/giphy.gif",
        "https://thumbs.gfycat.com/ChillyTestyDowitcher-small.gif",
        "https://media.tenor.com/images/ae165696602b2d61dbe05477bc934e41/tenor.gif",
        "https://media0.giphy.com/media/zHVDvEgSqIclW/200.gif",
        "https://i.pinimg.com/originals/5e/c5/b6/5ec5b6d6f16de385b67a9c084c9caddc.gif",
        "https://media.giphy.com/media/4E52HOzkvehkA/giphy.gif",
        "https://thumbs.gfycat.com/ImaginativeTepidDormouse-size_restricted.gif",
        "https://media.tenor.com/images/bfe3102feb5a6ddabe2920f174ea808c/tenor.gif",
        "https://i.gifer.com/1Fdr.gif",
        "https://media2.giphy.com/media/ywqynnUTBmQRq/source.gif",
        "https://media.tenor.com/images/8c23b964645e1e7de2b958964efb5328/tenor.gif",
        "https://i.imgur.com/dnxMEZa.gif",
        "https://data.whicdn.com/images/280502932/original.gif",
        "https://i.imgur.com/NpNoc0q.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} laughs at ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} laughs.`)
            }
		return message.channel.send(embed);
    }
    
};
