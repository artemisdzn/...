const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['covid19', 'coronavirus'],
            description: 'Track a country or worldwide COVID-19 cases.',
            category: 'Information',
            usage: '[country] or [all]'
		});
	}

	async run (message, args){

        let countries = args.join(" ");

        const noArgs = new MessageEmbed()
        .setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
        .setTitle('**NO COUNTRY PROVIDED**')
        .setColor('ff0068')
        .setDescription('Please specify a country!')
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const worldwide = new MessageEmbed()
                .setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
                .setTitle(`**WORLDWIDE COVID-19 STATS**`)
                .setColor('ff0068')
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
                .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true}))
			    .setTimestamp()

                message.channel.send(worldwide)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const country = new MessageEmbed()
                .setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
                .setTitle(`**COVID-19 STATS FOR ${countries}**`)
                .setColor('ff0068')
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
                .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true}))
			    .setTimestamp()

                message.channel.send(country)
            }).catch(e => {
                return message.channel.send('Invalid country provided, please provide a valid country.')
            })
        }

    }

};
