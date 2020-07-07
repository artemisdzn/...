const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['hugs'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://acegif.com/wp-content/gif/anime-hug-38.gif",
        "https://acegif.com/wp-content/gif/anime-hug-49.gif",
        "https://acegif.com/wp-content/gif/anime-hug-86.gif",
        "https://acegif.com/wp-content/gif/anime-hug-83.gif",
        "https://acegif.com/wp-content/gif/anime-hug-63.gif",
        "https://acegif.com/wp-content/gif/anime-hug-27.gif",
        "https://acegif.com/wp-content/gif/anime-hug-2.gif",
        "https://acegif.com/wp-content/gif/anime-hug-3.gif",
        "https://acegif.com/wp-content/gif/anime-hug-6.gif",
        "https://acegif.com/wp-content/gif/anime-hug-84.gif",
        "https://acegif.com/wp-content/gif/anime-hug-30.gif",
        "https://acegif.com/wp-content/gif/anime-hug-34.gif",
        "https://acegif.com/wp-content/gif/anime-hug-20.gif",
        "https://acegif.com/wp-content/gif/anime-hug-21.gif",
        "https://acegif.com/wp-content/gif/anime-hug-25.gif",
        "https://acegif.com/wp-content/gif/anime-hug-26.gif",
        "https://acegif.com/wp-content/gif/anime-hug-28.gif",
        "https://acegif.com/wp-content/gif/anime-hug-31.gif",
        "https://acegif.com/wp-content/gif/anime-hug-33.gif",
        "https://acegif.com/wp-content/gif/anime-hug-35.gif",
        "https://acegif.com/wp-content/gif/anime-hug-36.gif",
        "https://acegif.com/wp-content/gif/anime-hug-37.gif",
        "https://acegif.com/wp-content/gif/anime-hug-40.gif",
        "https://acegif.com/wp-content/gif/anime-hug-41.gif",
        "https://acegif.com/wp-content/gif/anime-hug-42.gif",
        "https://acegif.com/wp-content/gif/anime-hug-43.gif",
        "https://acegif.com/wp-content/gif/anime-hug-45.gif",
        "https://acegif.com/wp-content/gif/anime-hug-51.gif",
        "https://acegif.com/wp-content/gif/anime-hug-62.gif",
        "https://media.tenor.com/images/2d6c60e9015b527a600d8255539e7df3/tenor.gif",
        "https://media3.giphy.com/media/ddGxYkb7Fp2QRuTTGO/200.gif",
        "https://46.media.tumblr.com/4215d8eabbe1c5f75b1b77f95ed8ef33/tumblr_p0ob41iKyz1wjv92uo1_500.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} hugs ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} wants a hug.`)
            }
		return message.channel.send(embed);
    }
    
};
