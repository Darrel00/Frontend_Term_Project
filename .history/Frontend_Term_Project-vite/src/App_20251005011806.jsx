import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import SignUp from './SignUp.jsx';
import Navigation from './Components/Navigation.jsx';
import Footer from './Components/Footer.jsx';
import Button from "./Components/Button.jsx";

function Home() {
  return (
    <>
      <Navigation />
      <nav>
        <h1>ScholarDeck</h1>
        <Link to="/signup">Sign Up or Login</Link>
      </nav>
      <div className="intro">
        <h2 className="introHeading">Welcome to ScholarDeck! Your new studying companion.</h2>
        <h3 className="introText">Here you can create, edit, and organize flashcards on various topics. There is also a quiz mode where you can put your knowledge to the test!</h3>
      </div>
      <img src="/src/assets/image1.png" alt="People gathered around a laptop" className="image1" />
      <div className="features">
        <div className="flashcards">
          <img src="/src/assets/image2.png" alt="Man working on his laptop" className="image2" />
          <h4 className="flashcardsHeading">Create Flashcards</h4>
          <p className="flashcardsText">Build comprehensive flashcard decks with our intuitive editor</p>
        </div>
        <div className="quizzes">
          <img src="/src/assets/image3.png" alt="Woman working on her laptop" className="image3" />
          <h4 className="quizzesHeading">Smart Quizzes</h4>
          <p className="quizzesText">Test your knowledge with adaptive quiz systems</p>
        </div>
        <div className="study">
          <img src="/src/assets/image4.png" alt="Woman reading a book" className="image4" />
          <h4 className="studyHeading">Quick Study</h4>
          <p className="studyText">Efficient study sessions that maximize retention</p>
        </div>
      </div>
      <div className="callToAction">
        <h2>Ready To Become a Scholar?</h2>
        <Button><Link to="/signup">Start Learning Now</Link></Button>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
