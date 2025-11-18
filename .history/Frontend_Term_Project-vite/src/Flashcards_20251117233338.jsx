import Navigation from './Components/Navigation.jsx';
import Button from './Components/Button.jsx';
import Card from './Components/Card.jsx';
import Footer from './Components/Footer.jsx';
import DeckModal from './Components/DeckModal.jsx';
import './Flashcards.css';
import { useState, useEffect } from 'react';

function FlashcardsPage({ setPage, setActiveDeck }) {
  const [decks, setDecks] = useState(() => {
    const saved = localStorage.getItem("decks");
    return saved ? JSON.parse(saved) : ["French Vocabulary"];
  });

  const [showDeckModal, setShowDeckModal] = useState(false);
  const [newDeckName, setNewDeckName] = useState("");

  useEffect(() => {
    localStorage.setItem("decks", JSON.stringify(decks));
  }, [decks]);

  function handleAddDeck() {
    if (newDeckName.trim() !== "" && !decks.includes(newDeckName)) {
      setDecks([...decks, newDeckName]);
    }
    setNewDeckName("");
    setShowDeckModal(false);
  }

  function handleDeleteDeck(index) {
    const updated = [...decks];
    updated.splice(index, 1);
    setDecks(updated);
  }

  function handleOpenDeck(name) {
    setActiveDeck(name);
    setPage("deck");
  }

  return (
    <div className="flashcardsContainer">
      {showDeckModal && (
        <div className="overlay">
          <DeckModal
            deckName={newDeckName}
            setDeckName={setNewDeckName}
            onSave={handleAddDeck}
            onClose={() => setShowDeckModal(false)}
          />
        </div>
      )}
      <Navigation setPage={setPage} />
      <main className="flashcardsMain">
        <header className="flashcardsHeader">
          <h1 className="flashcardsTitle">Your Flashcard Decks</h1>
          <Button onClick={() => setShowDeckModal(true)}>
            <span>New Flashcard Deck</span>
          </Button>
        </header>
        <section className="flashcardsList">
          {decks.map((deck, index) => (
            <Card
              key={index}
              word={deck}
              showEdit={false}
              showDelete={true}
              onEdit={() => {}}
              onDelete={() => handleDeleteDeck(index)}
              onClick={() => handleOpenDeck(deck)}
              setPage={setPage}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default FlashcardsPage;