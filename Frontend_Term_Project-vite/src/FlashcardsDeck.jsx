import "./FlashcardsDeck.css"
import Navigation from "./Components/Navigation.jsx";
import Button from "./Components/Button.jsx";

function FlashcardsDeckPage(){
    return(
        <body>
            <Navigation/>
            <h1>French Vocabulary</h1>
            <Button>Change Deck Name</Button>
            <Card word="Oui" showEdit={true} showDelete={true} onEdit={() => console.log('Edit clicked')} onDelete={() => console.log('Delete clicked')}/>
            <Card word="Pomme" showEdit={true} showDelete={true} onEdit={() => console.log('Edit clicked')} onDelete={() => console.log('Delete clicked')}/>
            <Card word="Fromage" showEdit={true} showDelete={true} onEdit={() => console.log('Edit clicked')} onDelete={() => console.log('Delete clicked')}/>
            <Card word="Non" showEdit={true} showDelete={true} onEdit={() => console.log('Edit clicked')} onDelete={() => console.log('Delete clicked')}/>
            <Card word="Fraise" showEdit={true} showDelete={true} onEdit={() => console.log('Edit clicked')} onDelete={() => console.log('Delete clicked')}/>
            <button type="click" class="addCardButton">Add Card</button>
            <Footer/>
        </body>
    )
}

export default FlashcardsDeckPage