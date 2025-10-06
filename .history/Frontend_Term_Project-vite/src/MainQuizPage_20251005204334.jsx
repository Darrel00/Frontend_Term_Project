import { useState } from 'react';
import Navigation from './Components/Navigation.jsx';
import Footer from './Components/Footer.jsx';
import SignUp from './SignUp.jsx';

function QuizPage({ setPage }) {

  return (
    <div className="quizContainer">
      <Navigation setPage={setPage} />

      <main className="quizMain">
        <header className="quizHeader">
          <h1 className="quizTitle">Your Quizzes</h1>
          <button>Create New Quiz</button>
        </header>

        <section className="quizList">
          <div className='quiz-item'>
            <h2>French Vocabulary</h2>
            <button>Start</button>
            <button>Edit</button>
          </div>
          <div className='quiz-item'>
            <h2>Graphic Design</h2>
            <button>Start</button>
            <button>Edit</button>
          </div>
          <div className='quiz-item'>
            <h2>Coding</h2>
            <button>Start</button>
            <button>Edit</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default QuizPage;