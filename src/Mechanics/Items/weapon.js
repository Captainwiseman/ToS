import Item from './item'
import Armory from './armory'
import Modify from './modifiers'
let changeCase = require('change-case')

class Weapon extends Item {
    constructor(level, playerLevel) {
        super(level, playerLevel)
        this.type = "Weapon";
        this.model = Armory.accessArmory({
            type: "weapons",
            prop: "model"
        })
        this.class = Armory.accessArmory({
            type: "weapons",
            prop: "class"
        })
        this.damage = {
            minDamage: 0,
            maxDamage: 0
        }
        this.modifiers = Modify.rollForModifires(this.level)
        this.name = this.generateName();
        this.damage = this.calcDamage();
    }
    generateName = () => {
        return changeCase.titleCase(`${this.model} ${this.class} of ${this.generateModifierName(this.modifiers[0])}`)
    }
    calcDamage = () => {

    }
    generateModifierName = (modifier) => {
        return modifier;
    }
}
export default Weapon;