import Id from './keys.js';
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
    toString(/\w{20}/.exec(res.result)[0]);
  });
};

const fetchScores = async () => {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${Id}/scores/`);
  return res.json().then(({ result }) => {
    render(result);
  });
};

const addScore = async (newScore) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${Id}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newScore),
  });
};

export { fetchScores, addScore, createNewGame };