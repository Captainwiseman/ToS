import Roll from './Roll'
import Armory from './Items/armory'
import generateItem from './Items/generateItem'

class Drop {
    constructor(dropRates, playerLevel) {
        return this.rollDrop(dropRates, playerLevel)
    }
    calcDrop = (dropRates) => {
        let roll = Roll(1, 100)
        console.log(roll)
        if (roll >= dropRates.drop) {
            console.log("Dropped!")
            let itemType = Armory.levels[0]
            for (let item in dropRates.dropTypes) {
                roll = Roll(1, 100)
                console.log(roll, item, dropRates.dropTypes[item])
                if (roll >= dropRates.dropTypes[item]) {
                    itemType = item
                }
                else return itemType
            }
            return itemType
        }
        return "none"
    }
    rollDrop = (dropRates, playerLevel) => {
        let itemType = this.calcDrop(dropRates)
        if (itemType !== "none") {
            return new generateItem(itemType, playerLevel);
        }
        return {item: "None"}
    }
}
export default Drop;