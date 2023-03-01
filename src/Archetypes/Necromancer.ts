import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._instances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;