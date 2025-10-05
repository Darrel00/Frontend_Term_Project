import './App.css'
import Footer from './Components/Footer.jsx';
import Button from "./Components/Button.jsx";
import Navigation from "./Components/Navigation.jsx";
import SignUp from './SignUp.jsx';

function App() {
  return (
    <body>
      {/* NOTE:DELETE COMPONENT VERSION LATER HERE FOR TESTING PURPOSES */}
      <Navigation/>
      <nav>
        <h1>ScholarDeck</h1>
        <a href="/src/SignUp.jsx">Sign Up or Login</a>
      </nav>
      <div class="intro">
        <h2 class="introHeading">Welcome to ScholarDeck! Your new studying companion.</h2>
        <h3 class="introText">Here you can create, edit, and organize flashcards on various topics. There is also a quiz mode where you can put your knowledge to the test!</h3>
      </div>
      <img src="/src/assets/image1.png" alt="People gathered around a laptop" class="image1"/>
      <div class="features">
        <div class="flashcards">
          <img src="/src/assets/image2.png" alt="Man working on his laptop" class="image2"/>
          <h4 class="flashcardsHeading">Create Flashcards</h4>
          <p class="flashcardsText">Build comprehensive flashcard decks with our intuitive editor</p>
        </div>
        <div class="quizzes">
          <img src="/src/assets/image3.png" alt="Woman working on her laptop" class="image3"/>
          <h4 class="quizzesHeading">Smart Quizzes</h4>
          <p class="quizzesText">Test your knowledge with adaptive quiz systems</p>
        </div>
        <div class="study">
          <img src="/src/assets/image4.png" alt="Woman reading a book" class="image4"/>
          <h4 class="studyHeading">Quick Study</h4>
          <p class="studyText">Efficient study sessions that maximize retention</p>
        </div>
      </div>
      <div class="callToAction">
        <h2>Ready To Become a Scholar?</h2>
        <Button><a href="/src/SignUp.jsx">Start Learning Now</a></Button>
      </div>
      <Footer />
    </body>
  )

  
}



export default App


