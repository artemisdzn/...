const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['highfives'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://media.tenor.com/images/a506dd0b87c41f1988e4bddf7dc2062d/tenor.gif",
        "https://media.tenor.com/images/18ed7428944c5312d32484f305ea2e25/tenor.gif",
        "https://i.imgur.com/VqDPSbA.gif",
        "https://thumbs.gfycat.com/SmugLonelyAltiplanochinchillamouse-size_restricted.gif",
        "https://1.bp.blogspot.com/-lXQRidJkUSc/UfpI5ZG81_I/AAAAAAAAB_0/MHw4jp6-REU/s1600/high+five.gif",
        "https://data.whicdn.com/images/24678875/original.gif",
        "https://static.zerochan.net/Cardcaptor.Sakura%3A.Clear.Card-hen.full.2386682.gif",
        "https://media.giphy.com/media/KNGlioVGvwBXO/200.gif",
        "https://pa1.narvii.com/5751/cf7b813c9e0d1d8b29393051643839936d5c754f_hq.gif",
        "https://i.imgur.com/rvBVoey.gif",
        "https://i.pinimg.com/originals/fc/b1/44/fcb1446b74166b0860ace50ed8b33686.gif",
        "https://66.media.tumblr.com/670b47fe8f7da2a49e8089ccfa233c9d/tumblr_pc1t0wl1xR1wn2b96o1_1280.gif",
        "https://thumbs.gfycat.com/GargantuanHeavyHarrierhawk-size_restricted.gif",
        "https://em.wattpad.com/464501dbab2f210021cc608eeeda3c9bc4e1e8db/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f41515f6b58423870377a6b6f4d513d3d2d3438333439343033322e313465653933316234616436623836303337373230353539393633382e676966?s=fit&w=720&h=720.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} highfives to ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} wants a highfive.`)
            }
		return message.channel.send(embed);
    }
    
};
