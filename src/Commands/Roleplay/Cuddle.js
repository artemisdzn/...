const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['cuddles'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://media.tenor.com/images/7fa3b39ddac5925af0d81aefeeeb3ad4/tenor.gif",
        "https://i.pinimg.com/originals/96/26/62/962662ea1f3741e2b18e3da800fdeec6.gif",
        "https://pa1.narvii.com/6243/5eb4849659aa14f4d80310a9a1810893de7374fc_hq.gif",
        "https://i.pinimg.com/originals/4b/34/c2/4b34c2fd473942b7fbd25c443b8ed8a2.gif",
        "https://66.media.tumblr.com/6365c83624552427f6de9c92e8e28b52/tumblr_nmud2yJw7D1unbsixo1_500.gif",
        "https://media2.giphy.com/media/mJIa7rg9VPEhzU1dyQ/giphy.gif",
        "https://i1.wp.com/kakuchopurei.com/wp-content/uploads/2019/02/13jojotorturedance.gif?resize=480%2C270&ssl=1.gif",
        "https://i.gifer.com/7BN.gif",
        "https://i2.wp.com/kakuchopurei.com/wp-content/uploads/2019/02/haruhisuzumiyaGIF.gif?fit=498%2C278&ssl=1.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/115/816/936.gif",
        "https://media.giphy.com/media/BruDqK9IZzD3O/giphy.gif",
        "https://i2.wp.com/kakuchopurei.com/wp-content/uploads/2019/02/luckystar_dance.gif?resize=440%2C248&ssl=1.gif",
        "https://bestanimations.com/Music/Dancers/anime-dancing-girls/anime-kawaii-cute-dance-animated-gif-image-14.gif",
        "https://i.imgur.com/zmUyr5b.gif",
        "https://66.media.tumblr.com/2f7473d810f7e91a5b3cea909a0d97c3/tumblr_nmpr7yYkZ61updw00o10_500.gif",
        "https://pa1.narvii.com/6243/f7ccee5acbe2b70dba8ceef184c88f80b3bbea22_hq.gif",
        "https://cdn64.picsart.com/189798505001201.gif",
        "https://media3.giphy.com/media/VGiUYnkVsowAgZRlMD/giphy.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} cuddles ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} wants a cuddle.`)
            }
		return message.channel.send(embed);
	}

};
