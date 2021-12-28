import '.index/scss';

import tchat from './tchat.js'

const bots=[{
	id: 1,
	name: 'Kitty',
	avatar: 'https://moncarrevert.com/wp-content/uploads/2014/10/Image_01-325x325.png',
	countMessage: 0,
    action: [{
        name: 'hello',
        keywords: ['hello', 'bonjour'],
        action: () => 'bonjour Vincent'
    }]
}];
const tchat = new ChatBot(bots);
tchat.run();