import { useState, useEffect } from 'react';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Button from './Components/Button';
import QuizOption from './Components/QuizOption';
import './QuizQuestionPage.css';

function QuizTaker({ setPage, quiz, score, setScore }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleOptionSelect = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  useEffect(() => {
    if (quizCompleted) {
      setPage('quiz-results');
    }
  }, [quizCompleted, setPage]);

  return (
    <div className="quizQuestionContainer">
      <Navigation setPage={setPage} />
      <main className="quizQuestionMain">
        <div className="backbuttonspacing">
          <Button>
            <span onClick={() => setPage('quiz')}>Back to Quizzes</span>
          </Button>
        </div>
        <header className="quizQuestionHeader">
          <h1 className="quizQuestionTitle">{quiz.title} - Question {currentQuestionIndex + 1}</h1>
        </header>
        <section className="quizQuestionContent">
          <h2 className="quizQuestionText">
            {currentQuestion.text}
          </h2>
          <div className="quizQuestionOptions">
            {currentQuestion.options.map((option, index) => (
              <QuizOption
                key={index}
                word={option.text}
                type="quiz"
                onSelect={handleOptionSelect}
                isCorrect={option.isCorrect}
                setPage={setPage}
              />
            ))}
          </div>
        </section>
      </main>
      <div className="quiz-footer">
        <Footer />
      </div>
    </div>
  );
}

export default QuizTaker;