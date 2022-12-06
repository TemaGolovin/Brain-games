import readlineSync from 'readline-sync/lib/readline-sync.js';

const roundCount = 3;

const gameLogic = (gameQuestionAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  const gameName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gameName}!`);
  console.log(`${description}`);
  for (let i = 0; i < roundCount; i += 1) {
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
        `'${answerForGame}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${gameName}!`,
      );
      break;
    }
  }
};

export default gameLogic;
