const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['pouts'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://media.tenor.com/images/700c12f2a858f7eb6f3e20cc164156ee/tenor.gif",
        "https://media3.giphy.com/media/X3VrxPijowGC4/giphy.gif",
        "https://media.tenor.com/images/0f5d12aa3dfa6d8fd9e8a41bc51ec421/tenor.gif",
        "https://i.pinimg.com/originals/27/16/68/271668b1037633d7f7ae63dc1a1c29f2.gif",
        "https://66.media.tumblr.com/8c46c4ff7aaec3fee97db03004cecfc8/tumblr_p49rinNVWk1tm1dgio2_400.gif",
        "https://thumbs.gfycat.com/DishonestExcitableHornet-size_restricted.gif",
        "https://i.gifer.com/cBP.gif",
        "https://data.whicdn.com/images/219799600/original.gif",
        "https://i.imgur.com/oxrL5x5.gif",
        "https://38.media.tumblr.com/4018257a1a21e999cd1fdbcd67f38a1d/tumblr_nham95OVWg1rgfa0po1_500.gif",
        "https://i.imgur.com/CFZxvJD.gif",
        "https://media.tenor.com/images/0dd79fc50714078e3f0b33b5e234559e/tenor.gif",
        "https://media.tenor.com/images/9ee03c5f29aa8ee30dfbf95dea30d1d0/tenor.gif",
        "https://i.imgur.com/clpBDOi.gif",
        "https://www.techjunkie.com/wp-content/uploads/2018/03/Sad-Images-of-Pouty-Face-2.gif",
        "https://thumbs.gfycat.com/ShockingCrispElectriceel-max-1mb.gif",
        "https://i.pinimg.com/originals/c4/53/0a/c4530a54feb7347adf339164437d945d.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} pouts at ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} pouts.`)
            }
		return message.channel.send(embed);
    }
    
};
