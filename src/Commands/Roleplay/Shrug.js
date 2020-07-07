const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['shrugs'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://media.tenor.com/images/d8f436bd04d10a3ca4fd5510f6378200/tenor.gif",
        "https://media.tenor.com/images/f9269d307f3c5e4ff0d37c3dfdaebb56/tenor.gif",
        "https://cdn.lowgif.com/small/1424479b463a88b2-anime-sigh-gif-8-gif-images-download.gif",
        "https://media.tenor.com/images/8a6ed3d685fb66e6e6d3b4b02f882ce9/tenor.gif",
        "https://media.tenor.com/images/c4505a05dc524b81a4d80a8346a2c095/tenor.gif",
        "https://cdn.zerotwo.dev/SHRUG/6da98ae7-3e02-4265-ae97-9bc6b7e3e0bc.gif",
        "https://cdn.zerotwo.dev/SHRUG/6da98ae7-3e02-4265-ae97-9bc6b7e3e0bc.gif",
        "https://cdn.zerotwo.dev/SHRUG/6058e419-bce9-45d6-a693-93074eb8891a.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} shrugs to ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} shrugs.`)
            }
		return message.channel.send(embed);
    }
    
};
