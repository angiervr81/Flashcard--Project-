import React, { useState } from 'react';

function Flashcard({ card, flipped, onFlip }) {
  const images = import.meta.glob('../images/*', { eager: true });

  const imagePath = card.image 
  ? Object.keys(images).find((key) => key.includes(card.image))
  : null;
  
  return(
    <div className="flashcard" onClick={onFlip}>
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <p>{card.question}</p>
        </div>
        <div className="card-back">
         <div className="card-answer">
          <p>{card.answer}</p>
            {imagePath && (
              <img
                src={images[imagePath].default}
                alt="Card Visual"
                className="card-image"
              />
            )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
