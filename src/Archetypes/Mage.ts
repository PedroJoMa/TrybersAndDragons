import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._instances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;