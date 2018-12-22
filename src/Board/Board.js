import React from 'react';
import Card from '../Card/CardTemplate'

const board = (props) => {
    return (
        <div className="mainBoard">
            <h3>I'm the Main Board!</h3>
            <Card cardTitle="First" cardDescription="Lorem impsum shmookie shmook" cardStats={props.stats} />
            <Card cardTitle="Second" cardDescription="Lorem impsum shmookie shmook" />
            <Card cardTitle="Third" cardDescription="Lorem impsum shmookie shmook" />
            <Card cardTitle="Fifth" cardDescription="Say whaaaaaa....?" />
        </div>
    );
};

export default board;