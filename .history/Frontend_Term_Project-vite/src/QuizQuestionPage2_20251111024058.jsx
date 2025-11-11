import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import QuizOption from "./Components/QuizOption";
import './QuizQuestionPage.css';


function QuizQuestionPage2({setPage, score, setScore}) {
    const handleOptionSelect = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        setPage('quiz-question-3');
    };

    return (
        <div className="quizQuestionContainer">
            <main className="quizQuestionMain">
                <Navigation setPage={setPage} />
                <Button>
                    <span onClick={() => setPage('quiz')}>Back to Quizzes</span>
                </Button>
                <header className="quizQuestionHeader">
                    <h1 className="quizQuestionTitle">Graphic Design - Question 2</h1>
                </header>
                <section className="quizQuestionContent">
                    <h2 className="quizQuestionText">
                        Which color model is used for digital screens?
                    </h2>
                    <div className="quizQuestionOptions">
                        <QuizOption
                            word="RGB"
                            type="quiz"
                            onSelect={handleOptionSelect}
                            isCorrect={true}
                            setPage={setPage}
                        />
                        <QuizOption
                            word="CMYK"
                            type="quiz"
                            onSelect={handleOptionSelect}
                            isCorrect={false}
                            setPage={setPage}
                        />
                        <QuizOption
                            word="Pantone"
                            type="quiz"
                            onSelect={handleOptionSelect}
                            isCorrect={false}
                            setPage={setPage}
                        />
                    </div>
                </section>
            </main>
            <div className="quiz-footer">
            <Footer />
            </div>
        </div>
    );
}

export default QuizQuestionPage2;