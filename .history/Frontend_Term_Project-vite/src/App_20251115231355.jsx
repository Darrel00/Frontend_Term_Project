import './index.css';
import { useState } from 'react';
import FlashcardsPage from './Flashcards.jsx';
import FlashcardsDeckPage from './FlashcardsDeck.jsx';
import QuizPage from './MainQuizPage.jsx';
import QuizEditPage from './QuizEditPage.jsx';
import SignInPage from './SignIn.jsx';
import SignUpPage from './SignUp.jsx';
import Footer from './Components/Footer.jsx';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import Navigation from './Components/Navigation.jsx';
import QuizQuestionPage from './QuizQuestionPage.jsx';
import QuizQuestionPage1 from './QuizQuestionPage1.jsx';
import QuizQuestionPage2 from './QuizQuestionPage2.jsx';
import QuizQuestionPage3 from './QuizQuestionPage3.jsx';
import QuizResultsPage from './QuizResultsPage.jsx';

function App() {
  const [page, setPage] = useState('home');
  const [score, setScore] = useState(0);

  return (
    <div>
      {page === 'home' && (
        <>
        <Navigation setPage={setPage}/>
          {/* <nav>
            <h1>ScholarDeck</h1>
            <span onClick={() => setPage('signin')}>Login</span>
          </nav> */}
          <div className="intro">
            <h2 className="introHeading">
              Welcome to ScholarDeck! Your new studying companion.
            </h2>
            <h3 className="introText">
              Here you can create, edit, and organize flashcards on various topics. There is also a quiz mode where you can put your knowledge to the test!
            </h3>
          </div>
          <div className="image1Container">
            <img src={image1} alt="People gathered around a laptop" className="image1" />
          </div>
          <div className="features">
            <div className="flashcards">
              <img src={image2} alt="Man working on his laptop" className="image2" />
              <h4 className="flashcardsHeading">Create Flashcards</h4>
              <p className="flashcardsText">
                Build comprehensive flashcard decks with our intuitive editor
              </p>
            </div>
            <div className="quizzes">
              <img src={image3} alt="Woman working on her laptop" className="image3" />
              <h4 className="quizzesHeading">Smart Quizzes</h4>
              <p className="quizzesText">
                Test your knowledge with adaptive quiz systems
              </p>
            </div>
            <div className="study">
              <img src={image4} alt="Woman reading a book" className="image4" />
              <h4 className="studyHeading">Quick Study</h4>
              <p className="studyText">
                Efficient study sessions that maximize retention
              </p>
            </div>
          </div>

          <div className="callToAction">
            <h2>Ready To Become a Scholar?</h2>
              <button onClick={() => setPage('signup')}>Start Learning Now</button>
          </div>

          <Footer />
        </>
      )}

      {page === 'flashcards' && <FlashcardsPage setPage={setPage}/>}
      {page === 'deck' && <FlashcardsDeckPage setPage={setPage} />}
      {page === 'quiz' && <QuizPage setPage={setPage} />}
      {page === 'quizedit' && <QuizEditPage setPage={setPage} />}
      {page === 'quizstart' && <QuizQuestionPage1 setPage={setPage} score={score} setScore={setScore} />}
      {page === 'quiz-question-1' && <QuizQuestionPage1 setPage={setPage} score={score} setScore={setScore} />}
      {page === 'quiz-question-2' && <QuizQuestionPage2 setPage={setPage} score={score} setScore={setScore} />}
      {page === 'quiz-question-3' && <QuizQuestionPage3 setPage={setPage} score={score} setScore={setScore} />}
      {page === 'quiz-results' && <QuizResultsPage setPage={setPage} score={score} setScore={setScore} />}
      {page === 'signin' && <SignInPage setPage={setPage} />}
      {page === 'signup' && <SignUpPage setPage={setPage} />}
      
    </div>
  );
}

export default App;
