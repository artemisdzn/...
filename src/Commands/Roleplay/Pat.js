const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['pats'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://media.tenor.com/images/ad8357e58d35c1d63b570ab7e587f212/tenor.gif",
        "https://media.tenor.com/images/a671268253717ff877474fd019ef73e9/tenor.gif",
        "https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif",
        "https://thumbs.gfycat.com/BlushingDeepBlacknorwegianelkhound-small.gif",
        "https://i.imgur.com/UWbKpx8.gif",
        "https://66.media.tumblr.com/6289c42ea805f475698f02207da0a377/tumblr_p14hcsxPsb1tm1dgio1_400.gif",
        "https://66.media.tumblr.com/a72dd82535f3e7accd827c202dacc09a/tumblr_pfyiqz0pFL1th206io1_640.gif",
        "https://media3.giphy.com/media/ARSp9T7wwxNcs/giphy.gif",
        "https://thumbs.gfycat.com/FlimsyDeafeningGrassspider-size_restricted.gif",
        "https://66.media.tumblr.com/851d3f5553d1dfd9e28e4d025ab19299/tumblr_nyk3xfCrTE1s488tpo1_500.gif",
        "https://66.media.tumblr.com/d743a5e5ecc65be5cb6ac8de7978fb22/tumblr_pfyit1ofSu1th206io1_500.gif",
        "https://66.media.tumblr.com/584a3894e3483eed23d1afaf1f6f9347/tumblr_ok1oplyzSF1r0tp5lo1_400.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} pats ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} wants a pat.`)
            }
		return message.channel.send(embed);
    }
    
};
