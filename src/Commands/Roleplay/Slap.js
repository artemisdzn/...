const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['slaps'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://cdn.zerotwo.dev/SLAP/8033a02c-b983-4cec-bbb7-e57c0361103b.gif",
        "https://cdn.zerotwo.dev/SLAP/9be3ae42-362a-42cb-a340-7bb73de67ff8.gif",
        "https://cdn.zerotwo.dev/SLAP/797e3a1b-2c5e-4556-adf1-3f10afa0d76e.gif",
        "https://thumbs.gfycat.com/PersonalUnlinedAsiaticwildass-size_restricted.gif",
        "https://thumbs.gfycat.com/IllinformedRigidAfricangoldencat-size_restricted.gif",
        "https://i.imgur.com/Agwwaj6.gif",
        "https://i.pinimg.com/originals/2f/0f/82/2f0f82e4fb0dee8efd75bee975496eab.gif",
        "https://i.imgur.com/VW0cOyL.gif",
        "https://i.pinimg.com/originals/b0/a7/8b/b0a78b527317430cee98d326c85d1572.gif",
        "https://i.kym-cdn.com/photos/images/original/001/225/332/e83.gif",
        "https://ci.memecdn.com/1340810.gif",
        "https://giffiles.alphacoders.com/194/194456.gif",
        "https://i.imgur.com/0G5uqlN.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} slaps ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} slaps.`)
            }
		return message.channel.send(embed);
    }
    
};
