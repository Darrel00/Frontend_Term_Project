import Navigation from './Components/Navigation.jsx';
import Footer from './Components/Footer.jsx';
import Button from './Components/Button.jsx';
import Card from './Components/Card.jsx';
import './MainQuizPage.css';

function QuizPage({ setPage }) {
  return (
    <div className="quizContainer">
      <Navigation setPage={setPage} />

      <main className="quizMain">
        <header className="quizHeader">
          <h1 className="quizTitle">Your Quizzes</h1>
          <Button>
            <span onClick={() => console.log("New Quiz Created")}>Create New Quiz</span>
          </Button>
        </header>

        <section className="quizList">
          <Card
            word="French Vocanbulary"
            showEdit={true}
            showDelete={true}
            onEdit={() => console.log('Edit quiz clicked')}
            onDelete={() => console.log('Delete quiz clicked')}
            setPage={setPage}
          />
          <Card
            word="Graphic Design"
            showEdit={true}
            showDelete={true}
            onEdit={() => console.log('Edit quiz clicked')}
            onDelete={() => console.log('Delete quiz clicked')}
            setPage={setPage}
          />
          <Card
            word="Coding"
            showEdit={true}
            showDelete={true}
            onEdit={() => console.log('Edit quiz clicked')}
            onDelete={() => console.log('Delete quiz clicked')}
            setPage={setPage}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default QuizPage;