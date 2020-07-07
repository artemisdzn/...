const Event = require('../Structures/Event');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            once: true
        });
    }

    run() {

        const activities_list = [
            `${this.client.prefix}help!`, 
            `over ${this.client.guilds.cache.size} guilds!`,
            `over ${this.client.users.cache.size} users!`, 
            `${this.client.prefix}help | ${this.client.guilds.cache.size} guilds!`,
            `over ${this.client.commands.size} commands!`
            ];
            setInterval(() => {
                const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
                this.client.user.setActivity(activities_list[index], { type: 'STREAMING', url: 'https://www.youtube.com/watch?v=EC1hthUHtCM'}); // sets bot's activities to one of the phrases in the arraylist.
            }, 2500);

        console.log([
            `${this.client.user.tag} is online on ${this.client.guilds.cache.size} guilds!`,
            `Logged in as ${this.client.user.tag}`,
            `Loaded ${this.client.commands.size} commands!`,
            `Loaded ${this.client.events.size} events!`,

        ].join('\n'));

    }

}