import Navigation from './Components/Navigation.jsx';
import { useState } from 'react';
import Footer from './Components/Footer.jsx';
import Button from './Components/Button.jsx';
import TutorialModal from './Components/TutorialModal.jsx';
import './MainQuizPage.css';
import QuizEditPage from './QuizEditPage.jsx';
import NewQuizCreate from './NewQuizCreate.jsx';
import QuizCard from './Components/QuizCard.jsx';

function QuizPage({ setPage, quizzes, setCurrentQuizIndex, setQuizzes }) {
  const [showQuizTutorial, setShowQuizTutorial] = useState(false);

  const deleteQuiz = (index) => {
    const newQuizzes = quizzes.filter((_, i) => i !== index);
    setQuizzes(newQuizzes);
  };
  return (
    <div className="quizContainer">
      {showQuizTutorial && (
        <TutorialModal
          title="How to Use Quizzes"
          content={[
            {
              title: "Creating Quizzes",
              text: "Start by creating quizzes to test your knowledge on various topics.",
              list: [
                "Click 'Create New Quiz' to start",
                "Enter a title for your quiz",
                "Add questions one by one with multiple choice options",
                "Mark the correct answer for each question"
              ]
            },
            {
              title: "Taking Quizzes",
              text: "When you're ready to test yourself, take your quiz:",
              list: [
                "Click on any quiz card to start",
                "Read each question carefully",
                "Select your answer by clicking on an option",
                "Get instant feedback on your choices",
                "See your final score when you complete the quiz"
              ]
            },
            {
              title: "Managing Quizzes",
              text: "Keep your quizzes organized and up to date:",
              list: [
                "Edit any quiz by clicking the edit icon",
                "Delete quizzes you no longer need",
                "All quizzes are automatically saved locally",
                "You can create as many quizzes as you want"
              ]
            },
            {
              title: "Best Practices",
              text: "Make the most of your quiz experience:",
              list: [
                "Write clear, unambiguous questions",
                "Provide realistic distractors in wrong answers",
                "Test yourself regularly to improve retention",
                "Review incorrect answers to learn from mistakes"
              ]
            }
          ]}
          onClose={() => setShowQuizTutorial(false)}
        />
      )}
      <Navigation setPage={setPage} />

      <main className="quizMain">
        <header className="quizHeader">
          <h1 className="quizTitle">Your Quizzes</h1>
          <div className="quizHeaderButtons">
            <Button onClick={() => setShowQuizTutorial(true)}>
              <span>How to use</span>
            </Button>
            <Button>
              <span onClick={() => setPage('newquiz')}>Create New Quiz</span>
            </Button>
          </div>
        </header>

        <section className="quizList">
          {quizzes.map((quiz, index) => (
            <QuizCard
              key={index}
              word={quiz.title}
              showEdit={true}
              showDelete={true}
              onEdit={() => { setCurrentQuizIndex(index); setPage('quizedit'); }}
              onDelete={() => deleteQuiz(index)}
              onClick={() => { setCurrentQuizIndex(index); setPage('quizstart'); }}
              setPage={setPage}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default QuizPage;