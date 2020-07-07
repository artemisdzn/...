const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['blushes'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://media.tenor.com/images/0d4260a30ddf2647a9e1824b8e68defd/tenor.gif",
        "https://media.tenor.com/images/75936b8b93269bd293bd184eb209e358/tenor.gif",
        "https://i.pinimg.com/originals/91/e1/db/91e1db4a35959c0b4ed2a5cad1f9e41e.gif",
        "https://i.pinimg.com/originals/15/90/6d/15906d3886ab1e14afa1da583cc63953.gif",
        "https://media.tenor.com/images/0a8c1ae735519df6b91d05a6f28fd374/tenor.gif",
        "https://media3.giphy.com/media/HPI9m7McNPGN2/200.gif",
        "https://thumbs.gfycat.com/GracefulMessyKitten-small.gif",
        "https://thumbs.gfycat.com/ScientificWanIvorybilledwoodpecker-size_restricted.gif",
        "https://i.pinimg.com/originals/a3/43/3d/a3433d093be4009085f7f17b1c091bfe.gif",
        "https://i.imgur.com/hFkeViW.gif",
        "https://66.media.tumblr.com/588725dca29d4258a2f78c3f006f9dde/tumblr_mvyvcgpvco1sq3i0vo1_400.gif",
        "https://media.tenor.com/images/b4be3af320d6bff5196e627f9964c38d/tenor.gif",
        "https://i.imgur.com/W2Ywy7X.gif",
        "https://data.whicdn.com/images/328417923/original.gif",
        "https://media.tenor.com/images/a5c73f6296b856cc2911f604dd0b2a95/tenor.gif",
        "https://i.pinimg.com/originals/b7/4a/5b/b74a5b128b5d65ea1fdb9090c0b3f295.gif",
        "https://68.media.tumblr.com/ed0403053c04ddb8280331115661a9ea/tumblr_ofn6hi0NEL1tydz8to1_500.gif",
        "https://thumbs.gfycat.com/BoilingVacantGermanpinscher-size_restricted.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} blushes at ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} blushes.`)
            }
		return message.channel.send(embed);
	}

};
