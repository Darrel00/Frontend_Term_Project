import './Navigation.css';

function Navigation({ setPage }) {
  return (
    <nav>
      <h1 className="navigationLeft">ScholarDeck</h1>
      <span className="navigationRight" onClick={() => setPage('flashcards')}>Flashcards</span>
      <span className="navigationRight" onClick={() => setPage('quiz')}>Quiz</span>
      <span className="navigationRight" onClick={() => setPage('logout')}>Log Out</span>
    </nav>
  );
}

export default Navigation;