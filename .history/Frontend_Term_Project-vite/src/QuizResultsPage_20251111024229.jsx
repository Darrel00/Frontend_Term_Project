import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import './QuizQuestionPage.css'; // Reuse existing CSS

function QuizResultsPage({ score, setPage, setScore }) {
    const totalQuestions = 3;
    const percentage = Math.round((score / totalQuestions) * 100);

    const handleRestartQuiz = () => {
        setScore(0);
        setPage('quiz-question-1');
    };

    return (
        <div className="quizQuestionContainer">
            <Navigation setPage={setPage} />
            <main className="quizQuestionMain">
                <div className="backbuttonspacing">
                    <Button>
                        <span onClick={() => setPage('quiz')}>Back to Quizzes</span>
                    </Button>
                </div>
                <header className="quizQuestionHeader">
                    <h1 className="quizQuestionTitle">Quiz Results</h1>
                </header>
                <section className="quizQuestionContent">
                    <div className="resultsContainer">
                        <h2 className="quizQuestionText">Your Score</h2>
                        <div className="scoreDisplay">
                            <h3 className="score">{score} / {totalQuestions}</h3>
                            <p className="percentage">{percentage}%</p>
                        </div>
                        <div className="resultsMessage">
                            {percentage >= 80 ? (
                                <p>Excellent work! You've mastered this topic.</p>
                            ) : percentage >= 60 ? (
                                <p>Good job! Keep practicing to improve your score.</p>
                            ) : (
                                <p>Keep studying! Review the material and try again.</p>
                            )}
                        </div>
                        <Button onClick={handleRestartQuiz}>
                            <span>Take Quiz Again</span>
                        </Button>
                    </div>
                </section>
            </main>
            <div className="quiz-footer">
            <Footer />
            </div>
        </div>
    );
}

export default QuizResultsPage;