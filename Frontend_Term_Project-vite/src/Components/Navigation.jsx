import './Navigation.css';

function Navigation({ setPage }) {
  return (
    <nav>
      <span className="navigationLeft" onClick={() => setPage('home')}>ScholarDeck</span>
      <span className="navigationRight" onClick={() => setPage('flashcards')}>Flashcards</span>
      <span className="navigationRight" onClick={() => setPage('quiz')}>Quiz</span>
      <span className="navigationRight" onClick={() => setPage('signin')}>Log Out</span>
    </nav>
  );
}

export default Navigation; 