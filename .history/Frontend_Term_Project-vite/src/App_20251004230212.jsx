import Footer from './Components/Footer.jsx';
import Button from "./Components/Button.jsx";
import Navigation from "./Components/Navigation.jsx";

function App() {
  return (
    <div>
      {/* NOTE:DELETE COMPONENT VERSION LATER HERE FOR TESTING PURPOSES */}
      <Navigation/>
      <nav>
        <h1>ScholarDeck</h1>
        <a href="/src/SignUp.jsx">Sign Up or Login</a>
      </nav>
      <div className="intro">
        <h2 className="introHeading">Welcome to ScholarDeck! Your new studying companion.</h2>
        <h3 className="introText">Here you can create, edit, and organize flashcards on various topics. There is also a quiz mode where you can put your knowledge to the test!</h3>
      </div>
      <img src="/src/assets/image1.png" alt="People gathered around a laptop" className="image1"/>
      <div className="features">
        <div className="flashcards">
          <img src="/src/assets/image2.png" alt="Man working on his laptop" className="image2"/>
          <h4 className="flashcardsHeading">Create Flashcards</h4>
          <p className="flashcardsText">Build comprehensive flashcard decks with our intuitive editor</p>
        </div>
        <div className="quizzes">
          <img src="/src/assets/image3.png" alt="Woman working on her laptop" className="image3"/>
          <h4 className="quizzesHeading">Smart Quizzes</h4>
          <p className="quizzesText">Test your knowledge with adaptive quiz systems</p>
        </div>
        <div className="study">
          <img src="/src/assets/image4.png" alt="Woman reading a book" className="image4"/>
          <h4 className="studyHeading">Quick Study</h4>
          <p className="studyText">Efficient study sessions that maximize retention</p>
        </div>
      </div>
      <div className="callToAction">
        <h2>Ready To Become a Scholar?</h2>
        <Button><a href="/src/SignUp.jsx">Start Learning Now</a></Button>
      </div>
      <Footer />
    </div>
  )
}

export default App