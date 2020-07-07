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
        "https://media.tenor.com/images/9000aca94295d6438ea941069e402e77/tenor.gif",
        "https://i.gifer.com/Aq6y.gif",
        "https://media.giphy.com/media/arbHBoiUWUgmc/giphy.gif",
        "https://i.gifer.com/9eUJ.gif",
        "https://i.pinimg.com/originals/92/f4/59/92f4595d3f6ac39b6c175eb3d454fec2.gif",
        "https://gifimage.net/wp-content/uploads/2017/09/anime-punch-gif-1.gif",
        "https://media2.giphy.com/media/xUO4t2gkWBxDi/giphy.gif",
        "https://i.kym-cdn.com/photos/images/original/001/117/646/bf9.gif",
        "https://66.media.tumblr.com/992e4cac19f6a0ef68ea89ab5c3a59a0/tumblr_nrnfw7UZyR1uo5k7bo1_500.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/000/864/544/ac6.gif",
        "https://nights4saturn.files.wordpress.com/2011/11/dokki_doki_anime_punch.gif",
        "https://38.media.tumblr.com/dff6a125e38e7a33a126ca25887bd47a/tumblr_mkp5gujurX1s8oal1o1_500.gif",
        "https://media0.giphy.com/media/FyikNKBtz1lg4/giphy.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} punches ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} wants to punch someone.`)
            }
		return message.channel.send(embed);
    }
    
};
