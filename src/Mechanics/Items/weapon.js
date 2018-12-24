import Item from './item'
import Armory from './armory'
import Modify from './modify'
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
        return changeCase.titleCase(`${this.model} ${this.class}`) + this.generateModifierName(this.modifiers)
    }
    calcDamage = () => {

    }
    generateModifierName = (modifiers) => {
        if (modifiers.length <= 0) {
            return ""
        }
        if (modifiers.length = 1) {
        return ` ${modifiers[0].name}`
        }
    }
}
export default Weapon;