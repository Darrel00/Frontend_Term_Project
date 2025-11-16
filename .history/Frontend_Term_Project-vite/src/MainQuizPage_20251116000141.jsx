import Navigation from './Components/Navigation.jsx';
import { useState } from 'react';
import Footer from './Components/Footer.jsx';
import Button from './Components/Button.jsx';
import './MainQuizPage.css';
import QuizEditPage from './QuizEditPage.jsx';
import QuizCard from './Components/QuizCard.jsx';

function QuizPage({ setPage }) {
  return (
    <div className="quizContainer">
      <Navigation setPage={setPage} />

      <main className="quizMain">
        <header className="quizHeader">
          <h1 className="quizTitle">Your Quizzes</h1>
          <Button>
            <span onClick={() => setPage('quizedit')}>Create New Quiz</span>
          </Button>
        </header>

        <section className="quizList">
          <QuizCard
            word="Graphic Design"
            showEdit={true}
            showDelete={true}
            onEdit={() => setPage('quizedit')}
            onDelete={() => console.log('Delete quiz clicked')}
            setPage={setPage}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default QuizPage;