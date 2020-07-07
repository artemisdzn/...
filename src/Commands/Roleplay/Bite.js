const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['bites'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://thumbs.gfycat.com/YellowishFrightenedHamster-size_restricted.gif",
        "https://i.pinimg.com/originals/95/79/ed/9579ed2059c327e0715a2c3608acdda4.gif",
        "https://i.imgur.com/k5tADh7.gif",
        "https://i.gifer.com/H3Jt.gif",
        "https://i.pinimg.com/originals/d0/9f/fa/d09ffaaec06b2ffe0d59ed6f48112e03.gif",
        "https://thumbs.gfycat.com/UniqueThickGalapagosalbatross-small.gif",
        "https://data.whicdn.com/images/209822540/original.gif",
        "https://66.media.tumblr.com/ecf17f0f602fa3a16411cf98aa9d2d14/tumblr_opkvboiOzG1tydz8to1_400.gif",
        "https://i.kym-cdn.com/photos/images/original/000/832/011/aaa.gif",
        "https://i.pinimg.com/originals/13/3e/aa/133eaa726f40259c31e1f8e0fda7a039.gif",
        "https://pa1.narvii.com/6206/ede2a18b479c1a4b95bfa444559a1d3b4b3fcb0b_hq.gif",
        "https://media.giphy.com/media/l4FsBwtzg1rsDU8H6/giphy.gif",
        "https://data.whicdn.com/images/202917573/original.gif",
        "https://i.gifer.com/MHg3.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/000/877/784/b88.gif",
        "https://66.media.tumblr.com/7e2cad3ab0432205cdd5c37fab83d977/tumblr_ojh7gzPyeB1uzwbyjo1_400.gif",
        "https://i.gifer.com/Ojry.gif"
    ];

    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} bites ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} wants to bite someone.`)
            }
		return message.channel.send(embed);
	}

};
