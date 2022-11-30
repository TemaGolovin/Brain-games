import gameLogic from '../index.js';
import randNum from '../randNum.js';

const minValueRange = 1;
const maxValueRange = 50;

const gameQuestionAnswer = () => {
  const randNumber = randNum(minValueRange, maxValueRange);
  let answerEven = 'yes';
  if (randNumber % 2 === 0) {
    answerEven = 'yes';
  } else {
    answerEven = 'no';
  }
  return [randNumber, answerEven];
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => gameLogic(gameQuestionAnswer, task);

export default brainEven;
