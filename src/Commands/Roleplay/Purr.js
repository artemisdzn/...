const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['punches'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://thumbs.gfycat.com/AstonishingInnocentGrayreefshark-small.gif",
        "https://thumbs.gfycat.com/InfamousVariableAmericanriverotter-small.gif",
        "https://media.tenor.com/images/1d5336519c84088c48b1fdf4cc30327c/tenor.gif",
        "https://49.media.tumblr.com/64ff73c946647944e4ec16a8963d92fe/tumblr_nzrkaltP9q1v2z4l8o1_500.gif",
        "https://i.imgur.com/hsXImWz.gif",
        "https://i0.wp.com/i1.kym-cdn.com/photos/images/original/001/167/919/00e.gif",
        "https://pa1.narvii.com/7032/cca055a4d4df5e67e54fdef5e5de3fa8400289e3r1-500-281_00.gif",
        "https://4.bp.blogspot.com/-RQRvH52FC4k/VsURaZ5bTQI/AAAAAAAAX6U/jlaBQun9x-Y/s1600/Omake%2BGif%2BAnime%2B-%2BMusaigen%2Bno%2BPhantom%2BWorld%2B-%2BEpisode%2B7%2B-%2BMai%2BCat%2BStretch.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} purrs to ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} purrs.`)
            }
		return message.channel.send(embed);
    }
    
};
