const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['cries'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://i.pinimg.com/originals/2b/82/b0/2b82b012bc049d81e0d4fd22a79583ad.gif",
        "https://i.kym-cdn.com/photos/images/original/001/003/097/41a.gif",
        "https://i.pinimg.com/originals/60/73/8a/60738afd01ff17db156ceab784244fd1.gif",
        "https://66.media.tumblr.com/tumblr_m1ijubsRj11qi2x6ao1_500.gif",
        "https://media3.giphy.com/media/PPyxyvpnbT9RK/source.gif",
        "https://37.media.tumblr.com/8daa948047cc65f078900bebbfd3cd09/tumblr_mz3phpi7041rmxbouo1_500.gif",
        "https://pa1.narvii.com/6686/573793853a30766bf2b4283ad0ee5673498de63c_hq.gif",
        "https://66.media.tumblr.com/4bea34cede3be5d92b6a98ad7540ef31/1599ed523947b481-2f/s540x810/25096c6b0611d50ac9b7e12615a5dbf9904f0af3.gif",
        "https://thumbs.gfycat.com/PhonyReflectingAmazonparrot-size_restricted.gif"
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
