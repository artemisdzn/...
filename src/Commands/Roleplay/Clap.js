const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['claps'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://media.tenor.com/images/ed9272c81f685d9c3de214333ee08ced/tenor.gif",
        "https://media.tenor.com/images/07908bbd4b8336d826c733de9b2f2988/tenor.gif",
        "https://thumbs.gfycat.com/ClumsyExcellentLeveret-size_restricted.gif",
        "https://media1.giphy.com/media/klQrJUcrfMsTK/200.gif",
        "https://thumbs.gfycat.com/BruisedTidyAsiaticmouflon-size_restricted.gif",
        "https://i.gifer.com/O128.gif",
        "https://i.imgur.com/ezHbFKc.gif",
        "https://i.gifer.com/Px2u.gif",
        "https://media.tenor.com/images/c7999c3dcc34569a14a6aa4aec3a27e4/tenor.gif",
        "https://i.pinimg.com/originals/f9/95/b1/f995b120af0f9d564b9312a6d4f3a975.gif",
        "https://cdn.lowgif.com/full/81f183176c22568c-.gif",
        "https://thumbs.gfycat.com/BiodegradableBackAfricanwildcat-size_restricted.gif",
        "https://i.gifer.com/BHLE.gif",
        "https://i.makeagif.com/media/11-02-2015/-3lBuB.gif",
        "https://i.kym-cdn.com/photos/images/original/000/840/249/375.gif",
        "https://media.giphy.com/media/zyG4Xi6MvCP84/giphy.gif",
        "https://mrwgifs.com/wp-content/uploads/2013/04/Hellsing-Alucard-Clapping-Anime-Gif.gif",
        "https://i.gifer.com/7ddb.gif",
        "https://thumbs.gfycat.com/RareFantasticGrebe-small.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} claps at ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} claps.`)
            }
		return message.channel.send(embed);
	}

};
