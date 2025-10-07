import React, { useState } from 'react';
import Flashcard from './Flashcard';
import { flashcards } from '../data/flashcards';

function FlashcardList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);  
  const [userGuess, setUserGuess] = useState('');
  const [feedBack, setFeedback] = useState(null);

  const currentCard = flashcards[currentIndex];

  const normalize = (str) => 
   str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').trim();

  const handleGuessSubmit = () => {
    const normalizedGuess = normalize(userGuess);
    const normalizedAnswer = normalize(currentCard.answer);

    if (normalizedAnswer.includes(normalizedGuess) && normalizedGuess != '')  {
      setFeedback('Correct!');
    } else{
      setFeedback(`Incorrect!`);
    }
    setFlipped(true);
  };

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetCardState();
    } else {
      alert('You have reached the end of the flashcards!');
    }   
  };  

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetCardState();
    }
  };

  const resetCardState = () => {
    setUserGuess('');
    setFeedback(null);
    setFlipped(false);
  };


  return (
    <div className="flashcard-list">
      <h1> Data Structures Flashcards</h1>
      <p className='card-description'>Explore essential data structures through flashcards! You'll review definitions, use cases, time complexities, common operations, comparisons, and more.</p>
      <p className='card-description'>Total Cards: {flashcards.length}</p>

      <div> 
        <input
          type = "text"
          placeholder="Enter your guess"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          />
        <button onClick={handleGuessSubmit}>Submit</button>
      </div>

      {feedBack === 'Correct!' && <p style={{ color: 'green' }}>Correct!</p>}
      {feedBack  === 'Incorrect!' && <p style={{ color: 'red' }}>Incorrect! Try again or flip the card.</p>}
      
       <Flashcard card={currentCard} flipped={flipped} onFlip={() => setFlipped(!flipped)} />
      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          style={{ opacity: currentIndex === 0 ? 0.5 : 1, marginRight: '1rem' }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
          style={{ opacity: currentIndex === flashcards.length - 1 ? 0.5 : 1 }}
        >
          Next
          </button>
      </div>
    </div>
  );
}

export default FlashcardList;
