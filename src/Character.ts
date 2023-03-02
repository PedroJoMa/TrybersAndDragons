// import Fighter from './Fighter';
// import Race from './Races';
// import Archetype from './Archetypes';

// class Character implements Fighter {
//   private _race: Race;
//   private _archetype: Archetype;
//   private _maxLifePoints: number;
//   private _lifePoints: number;
//   private _strength: number;
//   private _defense: number;
//   private _dexterity: number;
//   private _energy: number;
//   public _name: string;

//   constructor(public name: string) {
//     this._name = name;
//     this._race = Elf;
//     this._dexterity = Math.floor(Math.random() * 10) + 1;
//     this._strength = Math.floor(Math.random() * 10) + 1;
//     this._defense = Math.floor(Math.random() * 10) + 1;
//     this._archetype = Mage;
//   }

//   get race(): Race {
//     return this._race;
//   }

//   get archetype(): Archetype {
//     return this._archetype;
//   }

//   get lifePoints(): number {
//     return this._lifePoints;
//   }

//   get strength(): number {
//     return this._strength;
//   }

//   get defense(): number {
//     return this._defense;
//   }

//   get dexterity(): number {
//     return this._dexterity;
//   }

//   get energy(): Energy {
//     return this._energy;
//   }

//   // attack(enemy: Fighter):void {}

//   generateStatus(attribute: number): void {
//     const randomStatus: number = 
//     attribute = randomStatus;
//   }
// }

// export default Character;