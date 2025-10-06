import React, { useState } from 'react';
import FlashcardsPage from './Flashcards.jsx';
import FlashcardsDeckPage from './FlashcardsDeck.jsx';
import Footer from './Components/Footer.jsx';
import SignUp from './SignUp.jsx';
import Navigation from './Components/Navigation.jsx';
import { Button } from 'react-bootstrap';
import 'index.css';

function QuizPage() {
  const [page, setPage] = useState('quiz');
  return (
    <div>
      {page === 'quiz' && (
      <Navigation />
      <h1>Your Quizzes</h1>
      <Button>Create New Quiz</Button>
      <div className='quiz-list'>
        <div className='quiz-item'>
          <h2>French Vocabulary</h2>
          <Button>Start</Button>
          <Button>Edit</Button>
        </div>
        <div className='quiz-item'>
          <h2>Graphic Design</h2>
          <Button>Start</Button>
          <Button>Edit</Button>
        </div>
        <div className='quiz-item'>
          <h2>Coding</h2>
          <Button>Start</Button>
          <Button>Edit</Button>
        </div>
      </div>
      <Footer />
      )}
      {page === 'flashcards' && <FlashcardsPage setPage={setPage}/>}
      {page === 'deck' && <FlashcardsDeckPage setPage={setPage} />}
      {page === 'home' && <App />}
      {page === 'login' && <SignUp setPage={setPage}/>}
    </div>
  );
}  
export default QuizPage;