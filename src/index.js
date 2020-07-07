const Artemis = require('./Structures/Artemis');
const config = require('../config.json');

const client = new Artemis(config);
client.start();
