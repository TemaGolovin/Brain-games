import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

const yourName = () => {
    const gameName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${gameName}!`);
};

export default yourName;
