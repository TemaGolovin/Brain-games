import gameLogic from '../index.js';
import randNum from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameQuestionAnswer = () => {
  const randNumber = randNum(1, 50);
  const expectedAnswer = isEven(randNumber) ? 'yes' : 'no';
  return [randNumber, expectedAnswer];
};

const brainEven = () => gameLogic(gameQuestionAnswer, description);

export default brainEven;
