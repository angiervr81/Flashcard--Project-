import React, { useState } from 'react';
import Flashcard from './Flashcard';
import { flashcards } from '../data/flashcards';

function FlashcardList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(newIndex);
  };

  const currentCard = flashcards[currentIndex];

  return (
    <div className="flashcard-list">
      <h1> Data Structures Flashcards</h1>
      <p>Description: Review fundamental in data structures you will look over: Definitions, Use Cases, Time Complexity, Common Operations, Comparison, Behavior to Structure!</p>
      <p>Total Cards: {flashcards.length}</p>

      <Flashcard card={currentCard} />

      <button onClick={handleNext}>Next Random Card</button>
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