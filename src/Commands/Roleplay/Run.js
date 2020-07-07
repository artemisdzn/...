const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['runs'],
			description: 'Roleplaying.',
			category: 'Roleplay'
		});
    }

	async run(message, [target]) {
            
    let gifs = [
        "https://i.pinimg.com/originals/0c/e8/be/0ce8bec2543d81ba65eefd309f0f0c5b.gif",
        "https://cdn.myanimelist.net/s/common/uploaded_files/1460140429-d60a2b5a534becb71153db8eaaaf4e14.gif",
        "https://thumbs.gfycat.com/ImpureDismalEgret-size_restricted.gif",
        "https://media1.giphy.com/media/CRWdhM1XgJ7Pi/giphy.gif",
        "https://media.tenor.com/images/3e7ed096e3f3bbeafffda2b56cf3843c/tenor.gif",
        "https://thumbs.gfycat.com/WealthyAgedAlligatorsnappingturtle-size_restricted.gif",
        "https://i.kym-cdn.com/photos/images/original/001/081/817/909.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/000/983/261/1a1.gif",
        "https://i.gifer.com/79o6.gif",
        "https://cdn.lowgif.com/small/03140d4a9537cd72-running-with-knives-anime-manga-know-your-meme.gif",
        "https://data.whicdn.com/images/223989016/original.gif",
        "https://cdn64.picsart.com/183683453001202.gif?to=min&r=640.gif",
        "https://66.media.tumblr.com/ef6cbebeb390d3e5bfb66c28fae5f3b0/tumblr_mvpx9qDTOh1qbvovho1_500.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} runs to ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} runs.`)
            }
		return message.channel.send(embed);
    }
    
};
