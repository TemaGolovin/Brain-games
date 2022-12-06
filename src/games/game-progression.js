import gameLogic from '../index.js';
import randNum from '../helper.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNum, progressionStep, length) => {
  const progression = [];
  let nextNum = firstNum;
  for (let i = 0; i < length; i += 1) {
    progression.push(nextNum);
    nextNum += progressionStep;
  }
  return progression;
};

const gameQuestionAnswer = () => {
  const step = randNum(1, 10); // progression step is generated in the range from 1 to 10
  const firstNumProgression = randNum(1, 20);
  const hiddenNumIndex = randNum(0, 9);
  const length = 10;
  const progression = getProgression(firstNumProgression, step, length);
  const hiddenNum = progression[hiddenNumIndex];
  progression[hiddenNumIndex] = '..';
  const question = progression.join(' ');
  return [question, String(hiddenNum)];
};

const brainProgression = () => gameLogic(gameQuestionAnswer, description);

export default brainProgression;
