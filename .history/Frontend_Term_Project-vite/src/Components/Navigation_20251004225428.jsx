function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigationLeft">
        <h1>ScholarDeck</h1>
      </div>
      <div className="navigationRight">
        <a href="/src/flashcards">Flashcards</a>
        <a href="/src/MainQuizPage">Qz</a>
        <a href="/src/index.html">Sign Out</a>
      </div>
    </nav>
  );
}

export default Navigation;