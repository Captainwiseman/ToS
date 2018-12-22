import React from 'react';
import './CardTemplate.css'

const CardTemplate = (props) => {
    let level;
    switch (props.item.level) {
        case 'Enchanted' :
        level = 'cyan';
        break;
        case 'Rare' :
        level = 'purple';
        break;
        case 'Exotic' :
        level = 'yellow';
        break;
        case 'Artisan' :
        level = 'red';
        break;
        default:
        level = 'black';
        break;
    }
    const style = {
        borderColor: level
    }
    return (
        <div className="cardTemplate" style={style}>
            <h6 className="cardTitle">{props.item.name}</h6>
            <h2 className="cardStats">{props.cardStats}</h2>
            <p className="cardDescription">{props.cardDescription}</p>
        </div>
    )
}

export default CardTemplate;