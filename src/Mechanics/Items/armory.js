import Roll from '../Roll'

const Armory = {
    levels: ["Regular","Enchanted", "Rare","Exotic", "Set", "Crafted", "Artisan"],
    elements: ["Thaumaturgic", "Evolved", "Spliced", "Synthesized", "Dimensional"],
    types: {
        weapons: {
            class: ["Sword","Bow","Pistol","Mace","Rifle"],
            model: ["Shenknoon", "Ruby","Lame","Snich"]
        },
        armors: {
            class: ["robes","chestplate","pants","underpants","stupid hat"],
            model: ["Rosalin", "Kankun","Zavigdor","String"]
        }
    },
    accessArmory: (whatToRollFor) => {
        let rollFor;
        whatToRollFor === "element" ? rollFor = Armory.elements : rollFor = Armory.types[whatToRollFor["type"]][whatToRollFor["prop"]];
        const roll = Roll(1, rollFor.length)
        return rollFor[roll - 1]
    }
}

export default Armory;