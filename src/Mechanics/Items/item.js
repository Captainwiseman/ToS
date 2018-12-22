import Armory from './armory'

class Item {
    constructor(level, rank) {
        this.name = "";
        this.level = level;
        this.rank = rank;
        this.element = Armory.accessArmory("element");
    }
}

export default Item;