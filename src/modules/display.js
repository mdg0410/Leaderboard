import addScores from './scores.js';
import Score from './score.js';

class Display {
  scores = [];

  localData = 'Score';

  workForm = '';

  constructor() {
    this.container = document.getElementById('listScore');
    if (localStorage.getItem(this.localData)) {
      this.scores = JSON.parse(localStorage.getItem(this.localData)).map(
        (score) => new Score(score.name, score.score, score.index),
      );
    } else {
      this.scores = addScores.map((score) => new Score(score.name, score.score, score.index));
    }
  }

  render() {
    this.container.innerHTML = '';

    this.scores.forEach((score) => {
      const Node = score.createNode();
      this.container.appendChild(Node);
    });
  }
}

export default new Display();