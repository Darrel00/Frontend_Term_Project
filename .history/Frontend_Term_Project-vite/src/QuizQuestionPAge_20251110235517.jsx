import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import Card from "./Components/Card";
import './QuizQuestionPage.css';

function QuizQuestionPage({setPage}) {
    return (
        <div className="quizQuestionContainer">
            <Navigation setPage={setPage} />
            <main className="quizQuestionMain">
                <Button>
                    <span onClick={() => setPage('quiz')}>Back to Quizzes</span>
                </Button>
                <header className="quizQuestionHeader">
                    <h1 className="quizQuestionTitle">Graphic Design - Question 1</h1>
                </header>
                <section className="quizQuestionContent">
                    <h2 className="quizQuestionText">
                        Which design principle refers to the visual weight of objects in a layout?
                    </h2>
                    <div className="quizQuestionOptions">
                        <QuizOption
                            word="Contrast"
                            isCorrect={true}
                            type="display"
                            setPage={setPage}
                        />
                        <QuizOption
                            word="Balance"
                            isCorrect={false}
                            type="display"
                            setPage={setPage}
                        />
                        <QuizOption
                            word="Alignment"
                            isCorrect={false}
                            type="display"
                            setPage={setPage}
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default QuizQuestionPage;