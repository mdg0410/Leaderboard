import { setKey, getKey } from './keys.js';
import { setScore, getScore } from './scores.js';
import render from './display.js';

const createNewGame = async () => {
  const game = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ name: 'MicroGameXtrem' }),
  });
  return game.json().then((res) => {
    const key = toString(/\w{20}/.exec(res.result)[0]);
    setKey(key);
  });
};

const fetchScores = async () => {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getKey()}/scores/`);
  return res.json().then(({ result }) => {
    setScore(result);
    render(getScore());
  });
};

const addScore = async (newScore) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getKey()}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newScore),
  });
};

export { createNewGame, fetchScores, addScore };