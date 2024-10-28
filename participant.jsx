import React from 'react';

function Participant({ name, score, onIncreaseScore }) {
    return (
        <div className="participant">
            <p>Name: {name}</p>
            <p>Score: {score}</p>
            <button onClick={onIncreaseScore}>Increase Score</button>
        </div>
    );
}

export default Participant;
