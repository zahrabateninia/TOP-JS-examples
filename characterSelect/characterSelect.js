function Hero(name, level) {
  this.name = name;
  this.level = level;
}

let hero1 = new Hero('Bjorn', 1);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);
  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');