import Navigation from './Components/Navigation.jsx';
import Button from './Components/Button.jsx';
import Card from './Components/Card.jsx';
import Footer from './Components/Footer.jsx';
import DeckModal from './Components/DeckModal.jsx';
import TutorialModal from './Components/TutorialModal.jsx';
import './Flashcards.css';
import { useState, useEffect } from 'react';

function FlashcardsPage({ setPage, setActiveDeck }) {
  const [decks, setDecks] = useState(() => {
    const saved = localStorage.getItem("decks");
    return saved ? JSON.parse(saved) : ["French Vocabulary"];
  });

  const [showDeckModal, setShowDeckModal] = useState(false);
  const [newDeckName, setNewDeckName] = useState("");
  const [showFlashcardsTutorial, setShowFlashcardsTutorial] = useState(false);

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
      {showFlashcardsTutorial && (
        <TutorialModal
          title="How to Use Flashcards"
          content={[
            {
              title: "Creating Flashcard Decks",
              text: "Start by creating flashcard decks to organize your study materials. Each deck can contain multiple flashcards.",
              list: [
                "Click the 'New Flashcard Deck' button",
                "Enter a name for your deck in the modal",
                "Click 'Save' to create the deck"
              ]
            },
            {
              title: "Managing Your Decks",
              text: "Once you've created decks, you can manage them easily.",
              list: [
                "Click on any deck card to start studying",
                "Use the edit and delete icons on each deck card to manage your decks",
                "All your decks and their cards are automatically saved locally"
              ]
            },
            {
              title: "Study Tips",
              text: "Make the most of your flashcard study sessions by following these tips:",
              list: [
                "Create cards with clear, concise questions and answers",
                "Review cards regularly to improve retention",
                "Use different colored cards for different topics",
                "Start with one deck at a time to stay focused"
              ]
            }
          ]}
          onClose={() => setShowFlashcardsTutorial(false)}
        />
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
              setPage={() => handleOpenDeck(deck)}
              type="default"
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default FlashcardsPage;