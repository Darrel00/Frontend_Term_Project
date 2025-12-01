import "./FlashcardsDeck.css";
import Navigation from "./Components/Navigation.jsx";
import Button from "./Components/Button.jsx";
import Card from "./Components/Card.jsx";
import Footer from "./Components/Footer.jsx";
import CardModal from "./Components/CardModal.jsx";
import DeckModal from "./Components/DeckModal.jsx";
import { useState, useEffect } from "react";

function FlashcardsDeckPage({ setPage, activeDeck }) {
  const [deckName, setDeckName] = useState(activeDeck);
  const [cards, setCards] = useState([]);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showDeckModal, setShowDeckModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [frontInput, setFrontInput] = useState("");
  const [backInput, setBackInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(deckName + "_cards");
    setCards(saved ? JSON.parse(saved) : []);
  }, [deckName]);

  useEffect(() => {
    localStorage.setItem(deckName + "_cards", JSON.stringify(cards));
  }, [cards, deckName]);

  function handleSaveCard() {
    if (editIndex !== null) {
      const updated = [...cards];
      updated[editIndex] = { front: frontInput, back: backInput, flipped: false };
      setCards(updated);
      setEditIndex(null);
    } else {
      setCards([...cards, { front: frontInput, back: backInput, flipped: false }]);
    }
    setFrontInput("");
    setBackInput("");
    setShowCardModal(false);
  }

  function handleEdit(index) {
    setEditIndex(index);
    setFrontInput(cards[index].front);
    setBackInput(cards[index].back);
    setShowCardModal(true);
  }

  function handleDelete(index) {
    const updated = [...cards];
    updated.splice(index, 1);
    setCards(updated);
  }

  function handleFlip(index) {
    const updated = [...cards];
    updated[index].flipped = !updated[index].flipped;
    setCards(updated);
  }

  function handleSaveDeckName() {
    setShowDeckModal(false);
  }

  return (
    <div>
      {showCardModal && (
        <div className="overlay">
          <CardModal
            frontInput={frontInput}
            backInput={backInput}
            setFrontInput={setFrontInput}
            setBackInput={setBackInput}
            onSave={handleSaveCard}
            isEditing={editIndex !== null}
            onClose={() => {
              setShowCardModal(false);
              setEditIndex(null);
            }}
          />
        </div>
      )}
      {showDeckModal && (
        <div className="overlay">
          <DeckModal
            deckName={deckName}
            setDeckName={setDeckName}
            onSave={handleSaveDeckName}
            onClose={() => setShowDeckModal(false)}
          />
        </div>
      )}
      <Navigation setPage={setPage} />
      <div className="deckContainer">
        <div className="deckHeader">
          <h1>{deckName}</h1>
          <Button onClick={() => setShowDeckModal(true)}>Change Deck Name</Button>
        </div>
        <div className="cardGrid">
          {cards.map((card, index) => (
            <Card
              key={index}
              word={card.flipped ? card.back : card.front}
              showEdit={true}
              showDelete={true}
              showView={false}
              showFlip={true}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
              onFlip={() => handleFlip(index)}
            />
          ))}
          <button type="button" className="addCardButton" onClick={() => setShowCardModal(true)}>
            <h3>Add Card</h3>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );}
export default FlashcardsDeckPage;