import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Button from './Components/Button';
import Card from './Components/Card';
import './QuizEditPage.css';

function QuizEditPage({setPage}) {
  return (
    <div className="quizEditContainer">
        <Navigation setPage={setPage} />
        <main className="quizEditMain">
            <Button>
                <span onClick={() => setPage('quiz')}>Back to Quizzes</span>
            </Button>
            <header className="quizEditHeader">
                <h1 className="quizEditTitle">Graphic Design</h1>
                <Button>
                    <span onClick={() => console.log("Quiz Saved")}>Save Quiz</span>
                </Button>
            </header>

            <section className="quizEditList">
                {questions.map(q => (
                    <div key={q.id} className='questionandoptions'>
                        <h2 className='question'>
                            {q.question}
                        </h2>
                        <div className='options'>
                            {q.options.map(option => (
                                <Card
                                    key={option.id}
                                    word={option.word}
                                    showEdit={true}
                                    showDelete={true}
                                    isCorrect={option.isCorrect}
                                    onEdit={() => console.log('Edit clicked for', option.word)}
                                    onDelete={() => handleDelete(q.id, option.id)}
                                    onMarkAsAnswer={(isCorrect) => handleMarkAsAnswer(q.id, option.id, isCorrect)}
                                    setPage={setPage}
                                />
                            ))}
                        </div>
                    </div>
                ))}
                <button type="button" className="addCardButton"><h3>Add Question + </h3></button>
            </section>
        </main>
        <Footer />
    </div>
  );
}

export default QuizEditPage;