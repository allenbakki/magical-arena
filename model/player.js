// players model class to fetch the data of players and a constructor to set the details of players;
class Player {
  constructor(name, strength, attack, health) {
    this._name = name;
    this._strength = strength;
    this._attack = attack;
    this._health = health;
  }

  get name() {
    return this._name;
  }

  get strength() {
    return this._strength;
  }
  set strength(strength) {
    this._strength = strength;
  }

  get attack() {
    return this._attack;
  }
  set attack(attack) {
    this._attack = attack;
  }

  get health() {
    return this._health;
  }
  set health(health) {
    this._health = health;
  }
}

export default Player;
