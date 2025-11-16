import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import QuizOption from "./Components/QuizOption";
import './QuizQuestionPage.css';


function QuizQuestionPage1({setPage}) {
    const handleOptionSelect = (isCorrect) => {
        if (isCorrect) {
            setPage('quiz-question-2');
        }
    };

    return (
        <div className="quizQuestionContainer">
            
            <main className="quizQuestionMain">
                <Navigation setPage={setPage} />
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
                            type="quiz"
                            onSelect={handleOptionSelect}
                            isCorrect={false}
                            setPage={setPage}
                        />
                        <QuizOption
                            word="Balance"
                            type="quiz"
                            onSelect={handleOptionSelect}
                            isCorrect={true}
                            setPage={setPage}
                        />
                        <QuizOption
                            word="Alignment"
                            type="quiz"
                            onSelect={handleOptionSelect}
                            isCorrect={false}
                            setPage={setPage}
                        />
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default QuizQuestionPage1;