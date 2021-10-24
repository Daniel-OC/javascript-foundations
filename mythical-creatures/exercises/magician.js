class Magician {
  constructor({name, assistant, clothing = 'top hat'}) {
    this.name = `The Great ${name}`;
    this.assistant = assistant;
    this.favoriteAccessory = clothing;
    this.confidencePercentage = 10;
  }
  performIncantation(incantation) {
    incantation = incantation.toUpperCase();
    return `${incantation}!`
  }
  performTrick() {
    this.confidencePercentage += 10
    if (this.favoriteAccessory != `top hat`) {
      return 'PULL DOVE FROM SLEEVE'
    }
  }
  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant === true) {
      return 'WOW! The magician totally just sawed that person in half!'
    };
    return 'Oh no, this trick is not ready!';
  }

}
module.exports = Magician;
