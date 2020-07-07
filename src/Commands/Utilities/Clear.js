const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['purge'],
			description: 'Clears messages.',
            category: 'Utilities'
		});
	}

	async run (message, args) {

        const amount = args.join(" ");

        if(!amount) return message.reply('please provide an amount of messages for me to delete')

        if(amount > 100) return message.reply(`you cannot clear more than 99 messages at once`)

        if(amount < 1) return message.reply(`you need to delete at least one message`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(parseInt(args) + 1
    )});


    message.channel.send(`Cleared ${args} messages!`).then(msg => msg.delete({timeout: 1500}));

    }
	
};
