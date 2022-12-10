import gameLogic from '../index.js';
import randNum from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameQuestionAnswer = () => {
  const question = randNum(1, 50);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => gameLogic(gameQuestionAnswer, description);

export default brainEven;
