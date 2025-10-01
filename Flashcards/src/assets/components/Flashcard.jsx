import React, { useState } from 'react';

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <p>{card.question}</p>
        </div>
        <div className="card-back">
          <p>{card.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
