import React, { useState } from 'react';


const images = import.meta.glob('../images/*',{eager: true});
function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

const imagePath = card.image
 ? Object.keys(images).find((keys) => keys.includes(card.image))
  : null;

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <p>{card.question}</p>
        </div>
        <div className="card-back">
          <div className="card-answer">
            <p>{card.answer}</p>
              {imagePath && <img src={images[imagePath].default} alt="Card Visual" className="card-image" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
