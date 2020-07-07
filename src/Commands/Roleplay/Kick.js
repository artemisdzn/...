const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['kicks'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://i.kym-cdn.com/photos/images/original/001/053/707/042.gif",
        "http://cdn.lowgif.com/full/2fcbb9b429f216b5-anime-kick-gif-www-pixshark-com-images-galleries-with.gif",
        "https://66.media.tumblr.com/ccfb562515974aafd5e879b75439ff18/tumblr_nece2jUD3p1tsd042o1_500.gif",
        "https://gifimage.net/wp-content/uploads/2017/09/anime-tackle-gif-7.gif",
        "https://i.kym-cdn.com/photos/images/original/001/054/543/c22.gif",
        "https://pa1.narvii.com/5755/23c7e7186b075b4bc9d82449a8b38adca6901f8e_hq.gif",
        "https://i.gifer.com/OHNW.gif",
        "http://cdn.lowgif.com/full/31eb56f6423255aa-kick-in-the-balls-anime-visit-to-grab-an-amazing-super-hero-shirt.gif",
        "http://3.bp.blogspot.com/-LL7cld88eDo/WYh9LRxP_EI/AAAAAAAATt8/BDhzNP50JCYBvFJ82_9IdZ455IZveBaHACK4BGAYYCw/s1600/5215466.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} kicks ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} wants to kick someone.`)
            }
		return message.channel.send(embed);
    }
    
};
