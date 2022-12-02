import readlineSync from 'readline-sync/lib/readline-sync.js';

const gameLogic = (gameQuestionAnswer, task) => {
  console.log('Welcome to the Brain Games!');
  const gameName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gameName}!`);
  console.log(`${task}`);
  for (let i = 0; i <= 2; i += 1) {
    const [questionForGame, answer] = gameQuestionAnswer();
    console.log(`Question: ${questionForGame}`);
    const answerForGame = readlineSync.question('Your answer: ');
    if (answer === answerForGame) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${gameName}!`);
      }
    } else {
      console.log(
        `'${answerForGame}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${gameName}!`
      );
      break;
    }
  }
};

export default gameLogic;
