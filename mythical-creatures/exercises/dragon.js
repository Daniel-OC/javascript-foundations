class Dragon  {
  constructor(name, rider){
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.fed = 0
  }
  greet(rider){
    return `Hi, ${this.rider}!`
  }

  eat(fed) {
    this.fed++;
    if (this.fed >= 3) {
      this.hungry = false
    }
    }
  }




var smog = new Dragon()

smog.eat()
console.log("fed once",smog.fed)
smog.eat()
console.log("fed twice",smog.fed)
smog.eat()
console.log("fed thrice",smog.fed)
console.log("Smog is hungry", smog.hungry)




module.exports = Dragon;
