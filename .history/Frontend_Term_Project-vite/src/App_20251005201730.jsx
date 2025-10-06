import './index.css';
import { useState } from 'react';
import FlashcardsPage from './Flashcards.jsx';
import FlashcardsDeckPage from './FlashcardsDeck.jsx';
import Footer from './Components/Footer.jsx';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import Navigation from './Components/Navigation.jsx';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      {page === 'home' && (
        <>
        <Navigation setPage={setPage}/>
          <nav>
            <h1>ScholarDeck</h1>
            <span onClick={() => setPage('signin')}>Sign Up or Login</span>
          </nav>
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
              <button onClick={() => setPage('quiz')}>Start Learning Now</button>
          </div>

          <Footer />
        </>
      )}

      {page === 'flashcards' && <FlashcardsPage setPage={setPage}/>}
      {page === 'deck' && <FlashcardsDeckPage setPage={setPage} />}
      {page === 'quiz' && <QuizPage setPage={setPage} />}
      {page === 'signin' && <SignInPage setPage={setPage} />}
      {page === 'signup' && <SignUpPage setPage={setPage} />}
    </div>
  );
}

export default App;