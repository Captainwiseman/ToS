import Roll from '../Roll'
import Armory from './armory'
import Modifiers from './modifiers'

const Modify = {
    levels: Armory.levels.slice(0,4),

    generateModifier: (level) => {
    let modifier = {}
    if (level === Modify.levels[0]) {
        return Modifiers.firstDegree()
    }
    console.log(Modify.levels, level)
    return modifier;
    },
    rollForModifires: (level) => {
        let modifires = [];
            for (let i = 0; i < Modify.levels.indexOf(level); i++) {
                modifires.push(Modify.generateModifier(Modify.levels[i]))
        }
        return modifires;
    }
}


export default Modify;