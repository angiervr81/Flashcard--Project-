import React, { useState } from 'react';
import Flashcard from './Flashcard';
import { flashcards } from '../data/flashcards';

function FlashcardList() {
  const [shuffledCards, setShuffledCards] = useState([...flashcards]);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);  
  const [userGuess, setUserGuess] = useState('');
  const [feedBack, setFeedback] = useState(null);

  const currentCard = shuffledCards[currentIndex];

  const normalize = (str) => 
   str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').trim();

  const handleGuessSubmit = () => {
    const normalizedGuess = normalize(userGuess);
    const normalizedAnswer = normalize(currentCard.answer);

    if (normalizedAnswer.includes(normalizedGuess) && normalizedGuess != '')  {
      setFeedback('Correct!');
      setStreak(prev => { 
        const newStreak = prev + 1;
        if (newStreak > maxStreak) setMaxStreak(newStreak);
        return newStreak;
    });

    }else{
      setFeedback('Incorrect!');
      setStreak(0);
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

// Rename this function to avoid conflict with the state variable
  function shuffleCards() { 
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentIndex(0);
    resetCardState();
  }


  return (
    <div className="flashcard-list">
      <h1> Data Structures Flashcards</h1>
      <p className='card-description'>Explore essential data structures through flashcards! You'll review definitions, use cases, time complexities, common operations, comparisons, and more.</p>
      <p className='card-description'>Total Cards: {flashcards.length}</p>
      <p className='card-description'>Current Streak: {streak} | Max Streak: {maxStreak}</p>  
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
        <button onClick={shuffleCards} style={{ marginLeft: '1rem' }}
        >
          Shuffle Cards
        </button>
      </div>
    </div>
  );
}

export default FlashcardList;
