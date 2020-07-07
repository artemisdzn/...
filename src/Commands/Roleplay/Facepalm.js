const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['facepalms'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://media.tenor.com/images/1ca66a8af2d5177b032a81e291b79643/tenor.gif",
        "https://i.gifer.com/YYBe.gif",
        "https://media.tenor.com/images/59ae6e3415612f1429fb6bc5cec806da/tenor.gif",
        "https://thumbs.gfycat.com/CalmAppropriateBarebirdbat-size_restricted.gif",
        "https://i.pinimg.com/originals/46/5c/34/465c344e842fe1705fa88211a60b3134.gif",
        "https://media.tenor.com/images/4b4c46f0a4fdb4fc6ce484a8d441fa53/tenor.gif",
        "https://thumbs.gfycat.com/JadedOfficialHare-size_restricted.gif",
        "https://thumbs.gfycat.com/ScaryChiefIguana-size_restricted.gif",
        "https://31.media.tumblr.com/511571474a5ad429609835a755e0afd4/tumblr_msaueddvzY1rx61j4o1_500.gif",
        "https://cdn.lowgif.com/medium/0bc68be1124157ec-.gif",
        "https://www.kuzmitch.ru/files/2010/gif/gedo.senki.facepalm.gif",
        "https://thumbs.gfycat.com/FlusteredOrderlyGoldenmantledgroundsquirrel-size_restricted.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} reacts to ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username}.`)
            }
		return message.channel.send(embed);
    }
    
};
