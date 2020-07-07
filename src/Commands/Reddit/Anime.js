const randomPuppy = require('random-puppy');
const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: ['anime news'],
            description: 'Anime reddit.',
            category: 'Reddit'
        });
    }
    
    async run(message) { 
        const subReddits = ["anime", "Animesuggest", "animenews", "Animedubs"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const animeEmbed = new MessageEmbed()
        .setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
        .setColor('ff0068')
        .setImage(img)
        .setTitle(`Your anime. From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true}))
        .setTimestamp();
  
        message.channel.send(animeEmbed);
    }
}