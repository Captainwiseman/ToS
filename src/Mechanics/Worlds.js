import Armory from './Items/armory'

const Worlds = [{
        name: "Training Academy",
        dropRates: {
            drop: 30,
            dropTypes: {
                [Armory.levels[1]] : 30, //Enchanted
                [Armory.levels[2]] : 70 //Rare
            }
        }
    }
]
export default Worlds;