const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['depress'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://media3.giphy.com/media/kXdo4BgGoFC80/200.gif",
        "https://media.tenor.com/images/97922a2b3a66a9a416cfaeed24985061/tenor.gif",
        "https://66.media.tumblr.com/13ce32253c5aaa28fd66105ac436ac7f/tumblr_mv8xlhaOgn1sokegjo1_400.gif",
        "https://thumbs.gfycat.com/SpicyRashComet-size_restricted.gif",
        "https://i.imgur.com/WpCNiiv.gif",
        "https://i.pinimg.com/originals/53/73/66/5373667e873a4591d76250220bf3615a.gif",
        "https://i.pinimg.com/originals/3f/8c/f8/3f8cf8ac78cf067f3c767825176e59bf.gif",
        "https://i.pinimg.com/originals/9c/7b/db/9c7bdb7b4cd118af4c103fb50a856ed2.gif",
        "https://i.pinimg.com/originals/4e/65/cb/4e65cb677a08150e0e90cb69358ef5f4.gif",
        "https://78.media.tumblr.com/a6361aae995f9c0b972e99b6f0f21292/tumblr_pafkp0Tdsn1qkz08qo1_540.gif",
        "https://pa1.narvii.com/6716/6f44bdfe3b3a4731c8485f4fbde2f00940b421c9_hq.gif",
        "https://gif-avatars.com/img/200x200/sad-yuu.gif",
        "https://66.media.tumblr.com/f66275a13aceab905a0b8ca3f4501862/1909c27eaf7a5b74-f8/s640x960/34d7f95a082f39ccd40ee29bf6dd04d2f7de4d80.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} is sad for ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} is sad.`)
            }
		return message.channel.send(embed);
    }
    
};
