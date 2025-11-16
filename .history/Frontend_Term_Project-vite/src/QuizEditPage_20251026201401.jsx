import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Button from './Components/Button';
import Card from './Components/Card';
import './QuizEditPage.css';

function QuizEditPage({setPage}) {
  return (
    <div className="quiEditContainer">
        <Navigation setPage={setPage} />
        <main className="quizEditMain">
            <button>Back</button>
            <header className="quizEditHeader">
                <h1 className="quizEditTitle">Graphic Design</h1>
                <Button>
                    <span onClick={() => console.log("Quiz Saved")}>Save Quiz</span>
                </Button>
            </header>

            <section className="quizEditList">
                <Card
                    word="Oui"
                    showEdit={true}
                    showDelete={true}
                    onEdit={() => console.log('Edit clicked')}
                    onDelete={() => console.log('Delete clicked')}
                    setPage={setPage}
                />
                <Card
                    word="Pomme"
                    showEdit={true}
                    showDelete={true}
                    onEdit={() => console.log('Edit clicked')}
                    onDelete={() => console.log('Delete clicked')}
                    setPage={setPage}
                />
                <Card
                    word="Fromage"
                    showEdit={true}
                    showDelete={true}
                    onEdit={() => console.log('Edit clicked')}
                    onDelete={() => console.log('Delete clicked')}
                    setPage={setPage}
                />
                <button type="button" className="addCardButton"><h3>Add Card</h3></button>
            </section>
        </main>
        <Footer />
    </div>
  );
}

export default QuizEditPage;