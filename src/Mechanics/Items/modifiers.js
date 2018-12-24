import Roll from '../Roll'

const Modifiers = {
    firstDegree: () => {
        const roll = Roll(1,3)
        return {
            name: "+" +roll,
            dmg: 5*roll
        }
    }
}

export default Modifiers;