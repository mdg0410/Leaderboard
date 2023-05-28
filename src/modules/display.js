const createScoreNode = (score) => {
  const scoreNode = document.createElement('li');
  scoreNode.innerHTML = `
  <span>${score.user}: ${score.score}</span>
  `;
  return scoreNode;
};

const render = (scores) => {
  const scoresContainer = document.getElementById('listScore');
  scoresContainer.innerHTML = '';
  scores.forEach((score) => {
    scoresContainer.append(createScoreNode(score));
  });
};

export default render;