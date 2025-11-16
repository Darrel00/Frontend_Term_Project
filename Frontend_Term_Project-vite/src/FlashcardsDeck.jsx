import "./FlashcardsDeck.css"
import Navigation from "./Components/Navigation.jsx";
import Button from "./Components/Button.jsx";
import Card from "./Components/Card.jsx";
import Footer from "./Components/Footer.jsx";
import CardModal from "./Components/CardModal.jsx";

function FlashcardsDeckPage({setPage}){
    return(
        <div>
            <Navigation setPage={setPage}/>
            <div className="deckContainer">
            <div className="deckHeader">
                <h1>French Vocabulary</h1>
                <Button>Change Deck Name</Button>
            </div>
            <div className="cardGrid">
                <Card word="Oui" showEdit={true} showDelete={true} onEdit={() => console.log('Edit clicked')} onDelete={() => console.log('Delete clicked')} setPage={setPage}/>
                <Card word="Pomme" showEdit={true} showDelete={true} onEdit={() => console.log('Edit clicked')} onDelete={() => console.log('Delete clicked')} setPage={setPage}/>
                <Card word="Fromage" showEdit={true} showDelete={true} onEdit={() => console.log('Edit clicked')} onDelete={() => console.log('Delete clicked')} setPage={setPage}/>
                <Card word="Non" showEdit={true} showDelete={true} onEdit={() => console.log('Edit clicked')} onDelete={() => console.log('Delete clicked')} setPage={setPage}/>
                <Card word="Fraise" showEdit={true} showDelete={true} onEdit={() => console.log('Edit clicked')} onDelete={() => console.log('Delete clicked')} setPage={setPage}/>
                <button type="button" className="addCardButton"><h3>Add Card</h3></button>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default FlashcardsDeckPage