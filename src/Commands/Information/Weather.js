const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const weather = require('weather-js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: [],
			description: "Checks the weather of the provided location.",
			category: 'Information',
			usage: '[Location]'
		});
	}

	async run (message, args){

		weather.find({search: args.join(" "), degreeType: 'F'}, function (error, result){
			// 'C' can be changed to 'F' for farneheit results
			if(error) return message.channel.send(error);
			if(!args[0]) return message.channel.send('Please specify a location.')
	
			if(result === undefined || result.length === 0) return message.channel.send('**Invalid location!**');
	
			var current = result[0].current;
			var location = result[0].location;
	
			const weatherinfo = new MessageEmbed()
			.setAuthor(`Artemis Beta`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
			.setTitle(`**WEATHER FORECAST FOR ${current.observationpoint}**`)
			.setDescription(`**${current.skytext}**`)
			.setThumbnail(current.imageUrl)
			.setColor('ff0068')
			.addField('Timezone', `UTC${location.timezone}`, true)
			.addField('Degree Type', 'Celsius', true)
			.addField('Temperature', `${current.temperature}°`, true)
			.addField('Wind', current.winddisplay, true)
			.addField('Feels like', `${current.feelslike}°`, true)
			.addField('Humidity', `${current.humidity}%`, true)
			.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true}))
			.setTimestamp()

			message.channel.send(weatherinfo)
			})
			     
		}
	
};
