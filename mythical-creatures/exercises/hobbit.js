class Hobbit {
  constructor({name}) {
    //make note to ask how the hell this works^^^
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }
  celebrateBirthday() {
    if (this.age < 32) {
      this.age++;
    } else if (this.age >= 32 && this.age < 100){
      this.age++;
      this.adult=true
    } else {
      this.age++;
      this.old = true;
    }
  }
  getRing(name) {
    if (this.name === 'Frodo') {
      this.hasRing = true;
      return 'Here is the ring!'
    }
    else {
      return 'You can\'t have it!'
    }
  }
  }



module.exports = Hobbit;
