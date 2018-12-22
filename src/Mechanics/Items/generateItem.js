import Weapon from './weapon'
import Armor from './armor'
import Roll from '../Roll'

class generateItem {
    constructor(levelOfItem, playerLevel) {
        return this.calcType(levelOfItem, playerLevel)
    }
    calcType = (levelOfItem, playerLevel) => {
        const roll = Roll(1,100);
        if (roll > 0) {
            return new Weapon(levelOfItem, playerLevel)
        }
        else {
            return new Armor(levelOfItem)
        }
    }
}
export default generateItem;