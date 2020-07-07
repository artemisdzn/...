const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            aliases: [],
            description: 'Displays all the command of the bot.',
            category: 'Utilities',
            usage: '[command]'
		});
	}

	async run(message, [command]) {
        const embed = new MessageEmbed()
            .setAuthor(`${this.client.user.username}`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH')
            .setColor('ff0068')
            .setTitle(`${message.guild.name} Help Menu`, message.guild.iconURL({ dynamic: true }))
            .setThumbnail('https://i.imgur.com/7GM9WTf.gif')
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true}))
            .setTimestamp();

        if (command) {
            const cmd = this.client.commands.get(command) || this.client.commands.get(this.aliases.get(command));

            if (!cmd) return message.channel.send(`Invalid Command name. \`${command}\``)

            embed.setAuthor(`${this.client.utils.capitalise(cmd.name)} Command Help`, 'https://i.imgur.com/7GM9WTf.gif', 'https://discord.gg/a2UdmhH');
            embed.setDescription([
                `**❯ Aliases:** ${cmd.aliases.length ? cmd.aliases.map(alias => `\`${alias}\``).join(' ') : 'No Aliases'}`,
                `**❯ Description:** ${cmd.description}`,
                `**❯ Category:** ${cmd.category}`,
                `**❯ Usage:** ${cmd.usage}`
            ]);

            return message.channel.send(embed);
        } else {
            embed.setDescription([
                `These are the available commands for ${message.guild.name}`,
                `The bot's prefix is: ${this.client.prefix}`,
                `Command Parameters: \`<>\` is strict & \`[]\` is optional`,
                `Support Server: https://discord.gg/a2UdmhH`
            ]);
            let categories;
            if (!this.client.owners.includes(message.author.id)) {
                categories = this.client.utils.removeDuplicates(this.client.commands.filter(cmd => cmd.category !== 'Owner').map(cmd => cmd.category));
            } else {
                categories = this.client.utils.removeDuplicates(this.client.commands.map(cmd => cmd.category));
            }

            for (const category of categories) {
                embed.addField(`**${this.client.utils.capitalise(category)}**`, this.client.commands.filter(cmd =>
                    cmd.category === category).map(cmd => `\`${cmd.name}\``).join(' '));
            }
            return message.channel.send(embed);
        }
	}

};
