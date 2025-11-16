import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import QuizOption from "./Components/QuizOption";
import './QuizQuestionPage.css';


function QuizQuestionPage3({setPage, score, setScore}) {
    const handleOptionSelect = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        // Navigate to results page after last question
        setPage('quiz-results');
    };

    return (
        <div className="quizQuestionContainer">
            <main className="quizQuestionMain">
                <Navigation setPage={setPage} />
                <Button>
                    <span onClick={() => setPage('quiz')}>Back to Quizzes</span>
                </Button>
                <header className="quizQuestionHeader">
                    <h1 className="quizQuestionTitle">Graphic Design - Question 3</h1>
                </header>
                <section className="quizQuestionContent">
                    <h2 className="quizQuestionText">
                        Which file format is best for high-quality scalable graphics?
                    </h2>
                    <div className="quizQuestionOptions">
                        <QuizOption
                            word="PNG"
                            type="quiz"
                            onSelect={handleOptionSelect}
                            isCorrect={false}
                            setPage={setPage}
                        />
                        <QuizOption
                            word="SVG"
                            type="quiz"
                            onSelect={handleOptionSelect}
                            isCorrect={true}
                            setPage={setPage}
                        />
                        <QuizOption
                            word="JPEG"
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

export default QuizQuestionPage3;