const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['smiles'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://i.pinimg.com/originals/ee/06/af/ee06afcfc3b2d833d38b4690e12edb2e.gif",
        "https://i.pinimg.com/originals/3f/ed/52/3fed522a9f74fc39d4c265ab17a82267.gif",
        "https://media.tenor.com/images/d8cfad6474c16477362df878df5aba70/tenor.gif",
        "https://media2.giphy.com/media/ivibkKm68n3a/giphy.gif",
        "https://thumbs.gfycat.com/SplendidBeautifulFieldspaniel-size_restricted.gif",
        "https://media2.giphy.com/media/bqSkJ4IwNcoZG/giphy.gif",
        "https://i.imgur.com/Y5o48VW.gif",
        "https://66.media.tumblr.com/1e91408c62f08cef3c6e68435435cea2/tumblr_pxvjgwXMX01ysu9jqo1_500.gif",
        "https://i.gifer.com/3YTP.gif",
        "https://66.media.tumblr.com/a1d0a987b84a19e99b0e05106d20b950/tumblr_om86hzoCXu1tvv82oo1_400.gif",
        "https://46.media.tumblr.com/762dbab12f7e24ed67e883ea9e5c8f16/tumblr_oyxt4rekcj1tydz8to1_540.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} smiles at ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} smiles.`)
            }
		return message.channel.send(embed);
    }
    
};
