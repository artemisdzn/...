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
        "https://media.tenor.com/images/bf139869d81cd9b73144d6b941ebb733/tenor.gif",
        "https://media2.giphy.com/media/ROF8OQvDmxytW/200.gif",
        "https://media2.giphy.com/media/Xqlsn2kLPBquI/200.gif",
        "https://i.pinimg.com/originals/c0/9c/fb/c09cfb56ca4311502f8713712f6a96d1.gif",
        "https://media.tenor.com/images/19089cd2b4970740debff2cdfc43329a/tenor.gif",
        "https://66.media.tumblr.com/5b4e0848d8080db04dbfedf31a4869e2/tumblr_inline_or4whcrg1z1ueut6r_540.gif",
        "https://i.pinimg.com/originals/b1/ae/3c/b1ae3cd36795f45af901e3d07df50667.gif",
        "https://thumbs.gfycat.com/HalfAssuredBorderterrier-size_restricted.gif",
        "https://25.media.tumblr.com/c65a4af4ff032d1ca06350b66a1e819c/tumblr_mtxk6zVzaa1sogk1do1_r1_500.gif",
        "https://data.whicdn.com/images/320214384/original.gif",
        "https://i.pinimg.com/originals/9d/cb/2b/9dcb2b83c29e6c70b4971e718cabe958.gif",
        "https://thumbs.gfycat.com/WearyCourageousAsianporcupine-size_restricted.gif",
        "https://i.gifer.com/WWEL.gif",
        "https://thumbs.gfycat.com/TautWigglyDodo-size_restricted.gif",
        "https://media1.giphy.com/media/4pk6ba2LUEMi4/giphy.gif",
        "https://gif-finder.com/wp-content/uploads/2015/07/Anime-girl-crying.gif",
        "https://pa1.narvii.com/5729/7239144f9492a477092d05271e10657b9e1a335b_hq.gif",
        "https://media1.giphy.com/media/ShPv5tt0EM396/giphy.gif",
        "https://data.whicdn.com/images/300266300/original.gif",
        "https://i.imgur.com/w90EiBy.gif",
        "https://media2.giphy.com/media/ukfn7kMzzLqLeyi5Tt/source.gif",
        "https://data.whicdn.com/images/308944587/original.gif",
        "https://i.pinimg.com/originals/4e/65/cb/4e65cb677a08150e0e90cb69358ef5f4.gif",
        "https://i.kym-cdn.com/photos/images/original/000/425/999/338.gif",
        "https://i.pinimg.com/originals/3a/e1/7a/3ae17ad4a8b93899c409bfa1f6fd7980.gif",
        "https://thumbs.gfycat.com/EnchantedEasygoingGlassfrog-small.gif"
    ];
    let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const embed = new MessageEmbed()
            embed.setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
	        embed.setImage(pick)
            embed.setColor('ff0068')
            if(message.mentions.members.last()) {
                embed.setTitle(`${message.author.username} cries at ${member.user.username}!`)
            } else {
                embed.setTitle(`${message.author.username} cries.`)
            }
		return message.channel.send(embed);
	}

};
