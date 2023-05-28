import './styles.css';
import { fetchScores, addScore, createNewGame } from './modules/game.js';
import keyId from './modules/keys.js';

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', async () => {
  await fetchScores();
});

const init = async () => {
  const form = document.forms['add-Score'];
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await addScore({
      user: e.target.elements.name.value,
      score: e.target.elements.score.value,
    });
    form.reset();
    e.target.elements.name.focus();
  });
  if (keyId === '') {
    createNewGame();
  }
  await fetchScores();
};

init();