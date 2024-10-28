import React, { useState } from 'react';
import Participant from './participant';

function ScoreBoard() {
    const [participants, setParticipants] = useState([
        { id: 1, name: 'Alice', score: 10 },
        { id: 2, name: 'Bob', score: 15 },
        { id: 3, name: 'Charlie', score: 12 },
    ]);

    const [sortOrder, setSortOrder] = useState('asc');

    // Function to increase the score of a specific participant
    const increaseScore = (id) => {
        setParticipants((prevParticipants) =>
            prevParticipants.map((participant) =>
                participant.id === id
                    ? { ...participant, score: participant.score + 1 }
                    : participant
            )
        );
    };

    // Function to sort participants based on the score
    const sortedParticipants = [...participants].sort((a, b) =>
        sortOrder === 'asc' ? a.score - b.score : b.score - a.score
    );

    // Toggle sorting order
    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    return (
        <div className="scoreboard">
            <h2>Score Board</h2>
            <button onClick={toggleSortOrder}>
                Sort by Score ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
            </button>
            <div>
                {sortedParticipants.map((participant) => (
                    <Participant
                        key={participant.id}
                        name={participant.name}
                        score={participant.score}
                        onIncreaseScore={() => increaseScore(participant.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ScoreBoard;
