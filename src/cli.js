import readlineSync from 'readline-sync/lib/readline-sync.js';

const yourName = () => {
  const gameName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gameName}!`);
  return gameName;
};

export default yourName;
