import './styles.css';
import { createNewGame, fetchScores, addScore } from './modules/game.js';

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
  await createNewGame();
  await fetchScores();
};

init();