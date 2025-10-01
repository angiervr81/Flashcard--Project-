import React, { useState } from 'react';
import Flashcard from './Flashcard';
import { flashcards } from '../data/flashcards';

function FlashcardList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    let newIndex; 
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentIndex);
    setCurrentIndex(newIndex);
  };

  const currentCard = flashcards[currentIndex];

  return (
    <div className="flashcard-list">
      <h1> Data Structures Flashcards</h1>
      <p className='card-description'>
          Description: Explore essential data structures through flashcards! You'll review definitions, use cases, time complexities, common operations, comparisons, and more.
      </p>
      <p className='card-description'>Total Cards: {flashcards.length}</p>

      <Flashcard card={currentCard} />

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default FlashcardList;
//Definition Flashcards
//Use Case Flashcards
// Time Complexity Flashcards
//Common Operations Flashcards
// Comparison Flashcards
//Behavior -> Structure 