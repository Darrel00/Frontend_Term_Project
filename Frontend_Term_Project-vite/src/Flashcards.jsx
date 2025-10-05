import Navigation from './Components/Navigation.jsx';
import Button from './Components/Button.jsx';
import Card from './Components/Card.jsx';
import Footer from './Components/Footer.jsx';

function FlashcardsPage() {
  return (
    <div>
      <Navigation />
      <h1>Your Flashcard Decks</h1>
      <Button>New Flashcard Deck</Button>
      <Card
        word="Oui"
        showEdit={false}
        showDelete={true}
        onEdit={() => console.log('Edit clicked')}
        onDelete={() => console.log('Delete clicked')}
      />
      <Footer />
    </div>
  );
}

export default FlashcardsPage;