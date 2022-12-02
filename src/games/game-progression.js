import gameLogic from '../index.js';
import randNum from '../randNum.js';

const gameQuestionAnswer = () => {
  const progressionStep = randNum(1, 10); // progression step is generated in the range from 1 to 10
  const firstNumProgression = randNum(1, 20);
  const hiddenNumIndex = randNum(0, 9);
  const lengthProgression = 10;
  const progression = [];
  let nextNum = firstNumProgression;
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(nextNum);
    nextNum += progressionStep;
  }
  const hiddenNum = progression[hiddenNumIndex];
  progression[hiddenNumIndex] = '..';
  const question = progression.join(' ');
  return [question, String(hiddenNum)];
};

const task = 'What number is missing in the progression?';

const brainProgression = () => gameLogic(gameQuestionAnswer, task);

export default brainProgression;
