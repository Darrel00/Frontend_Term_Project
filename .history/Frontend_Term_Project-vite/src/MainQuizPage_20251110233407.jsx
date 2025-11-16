import Navigation from './Components/Navigation.jsx';
import { useState } from 'react';
import Footer from './Components/Footer.jsx';
import Button from './Components/Button.jsx';
import Card from './Components/Card.jsx';
import './MainQuizPage.css';
import QuizEditPage from './QuizEditPage.jsx';

function QuizPage({ setPage }) {
  const [page, setPage] = useState('quiz');
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
            word="French Vocabulary"
            showEdit={true}
            showDelete={true}
            onEdit={() => setPage=('quizedit')}
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
      {page === 'quizedit' && <QuizEditPage setPage={setPage}/>}
    </div>
  );
}
export default QuizPage;