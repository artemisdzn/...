const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['licks'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://i.imgur.com/YG4i71E.gif",
        "https://i.imgur.com/uALJJV2.gif",
        "https://i.gifer.com/7BW.gif",
        "https://66.media.tumblr.com/b59aba4dee49d89cffd81def664826e0/tumblr_pg510m372k1tqvsfso2_540.gif",
        "https://thumbs.gfycat.com/JaggedLikableLadybug-size_restricted.gif",
        "https://i.gifer.com/4r7J.gif",
        "https://49.media.tumblr.com/f291fcca6c7917260dbca321305eb7db/tumblr_nt8jnfglC21rlvcmto1_500.gif",
        "https://cdn.zerotwo.dev/LICK/36dd6ed1-f77e-4dc3-9f4f-1a77abe2519b.gif",
        "https://cdn.zerotwo.dev/LICK/63f28a6a-9c14-4416-9077-605e44abf70a.gif",
        "https://cdn.zerotwo.dev/LICK/b1d7b324-f9c0-431e-bc18-a860252d017a.gif",
        "https://cdn.zerotwo.dev/LICK/c1d84f1f-e521-4b9f-a877-4c948771bddd.gif",
        "https://cdn.zerotwo.dev/LICK/6ce058e5-2d98-4dc5-aeeb-8ee4ef3f5951.gif",
        "https://cdn.zerotwo.dev/LICK/35563928-1f98-4d26-ae67-749ab05ad12a.gif",
        "https://cdn.zerotwo.dev/LICK/7392b595-7b9a-4dbd-a8b3-5f2c913d0233.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} licks ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} licks.`)
            }
		return message.channel.send(embed);
    }
    
};
