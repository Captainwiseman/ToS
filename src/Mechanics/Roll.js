const Roll = (howMany,dice) => {
    let result = 0;
    for (let i = 0; i < howMany; i++) {
        result += Math.floor((Math.random() * dice) + 1)
    }
    
    return result
}

export default Roll