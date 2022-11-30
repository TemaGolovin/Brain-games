import { gameLogic } from "../index.js";
import randNum from "../randNum.js";

const gameQuestionAnswer = () => {
  const randNumber = randNum();
  let answerEven = "yes";
  if (randNumber % 2 === 0) {
    answerEven;
  } else {
    answerEven = "no";
  }
  return [randNumber, answerEven];
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => gameLogic(gameQuestionAnswer, task);

export default brainEven;
