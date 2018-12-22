import Roll from '../Roll'

const Modify = {

    generateModifier: (rank) => {

    },
    rollForModifires: (level) => {
        let modifires = [];
        switch (level) {
            case "Enchanted":
                modifires.push("Bleeding")
                break;
            default:
                modifires.push("Nimp")
                break;
        }
        return modifires;
    }
}

export default Modify;