var Person = require('./person');
var Statue = require('./statue');
var newlyFree;

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    if (this.statues.length < 3) {
      this.statues.push(new Statue(victim.name));
    } else {
      var newlyFree = this.statues.shift();
      console.log(this.statues.push(new Statue(victim.name)));
      return new Person(newlyFree.name, 'relieved');
    }



  }
}


module.exports = Medusa;
