export default class Score {
  constructor(name, score, index) {
    this.name = name;
    this.score = score;
    this.index = index;
  }

  createNode() {
    const Node = document.createElement('li');
    Node.innerHTML = `
      <span>${this.name}: ${this.score}</span>
    `;
    return Node;
  }
}