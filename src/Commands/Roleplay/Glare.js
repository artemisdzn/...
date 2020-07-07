const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['glares'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://thumbs.gfycat.com/SkeletalPaltryBarracuda-small.gif",
        "https://thumbs.gfycat.com/SevereGoldenAustralianfreshwatercrocodile-size_restricted.gif",
        "https://i.imgur.com/HNf94DG.gif",
        "https://66.media.tumblr.com/42be6b536844c10883b4d054137e409b/tumblr_mpfczcWr9T1rbrgc7o1_400.gif",
        "https://i.gifer.com/2y8x.gif",
        "https://thumbs.gfycat.com/SlipperyCreamyAmphiuma-small.gif",
        "https://media2.giphy.com/media/a0hgH5m2hWZ4k/200.gif",
        "https://pa1.narvii.com/5931/d0d18f58483d30b33457316b67a86e6629e454e3_hq.gif",
        "https://bigmemes.funnyjunk.com/thumbnails/comments/You+guys+are+mad+lads+_fc4217a325b8c0e9d40d7506d13a5c16.gif",
        "https://i.pinimg.com/originals/05/71/73/05717388b2478a3a4576ea2ade984ded.gif",
        "https://i.imgur.com/8P0fpAv.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} glares at ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} glares.`)
            }
		return message.channel.send(embed);
    }
    
};
