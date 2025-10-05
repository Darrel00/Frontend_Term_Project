import Navigation from './Components/Navigation.jsx';
import Button from './Components/Button.jsx';
import Card from './Components/Card.jsx';
import Footer from './Components/Footer.jsx';
import './Flashcards.css';

function FlashcardsPage({ setPage }) {
  return (
    <div className="flashcardsContainer">
      <Navigation setPage={setPage} />

      <main className="flashcardsMain">
        <header className="flashcardsHeader">
          <h1 className="flashcardsTitle">Your Flashcard Decks</h1>
          <Button>
            <span onClick={() => console.log("New Flashcard Deck Made")}>New Flashcard Deck</span>
          </Button>
        </header>

        <section className="flashcardsList">
          <Card
            word="French Vocabulary"
            showEdit={false}
            showDelete={true}
            onEdit={() => console.log('Edit clicked')}
            onDelete={() => console.log('Delete clicked')}
            setPage={setPage}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default FlashcardsPage;