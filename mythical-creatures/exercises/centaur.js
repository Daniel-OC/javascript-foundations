class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.i = 0;
  }
  shootBow() {
    if (this.cranky || this.layingDown){
      return 'NO!'
    }
    if (this.i < 2) {
      this.i++;
      return 'Twang!!!'
    } else {
      this.i++;
      this.cranky = true;
      return 'Twang!!!'
    }
  }
  run() {
    if (this.cranky || this.layingDown){
      return 'NO!'
    }
    if (this.i < 2) {
      this.i++;
      return 'Clop clop clop clop!!!'
    } else {
      this.i++;
      this.cranky = true;
      return 'Clop clop clop clop!!!'
    }
  }
  sleep() {
    if (this.standing){
      return 'NO!'
    }
    this.cranky = false
    return 'ZZZZ'
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if(this.standing) {
      this.cranky = false
    }
    return 'Not while I\'m laying down!'
  }
}

module.exports = Centaur;
