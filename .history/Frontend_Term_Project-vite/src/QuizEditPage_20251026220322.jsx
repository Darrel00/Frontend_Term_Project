import { useState } from 'react';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Button from './Components/Button';
import Card from './Components/Card';
import './QuizEditPage.css';

function QuizEditPage({setPage}) {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Which design principle refers to the visual weight of objects in a layout?",
      options: [
        { id: 1, word: "Contrast", isCorrect: false },
        { id: 2, word: "Balance", isCorrect: false },
        { id: 3, word: "Alignment", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "Which color model is used for digital screens?",
      options: [
        { id: 4, word: "RGB", isCorrect: false },
        { id: 5, word: "CMYK", isCorrect: false },
        { id: 6, word: "Pantone", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "Which file format is best for high-quality scalable graphics?",
      options: [
        { id: 7, word: "PNG", isCorrect: false },
        { id: 8, word: "SVG", isCorrect: false },
        { id: 9, word: "JPEG", isCorrect: false }
      ]
    }
  ]);

  const handleDelete = (questionId, optionId) => {
    setQuestions(questions.map(q =>
      q.id === questionId ? { ...q, options: q.options.filter(o => o.id !== optionId) } : q
    ));
  };

  const handleMarkAsAnswer = (questionId, optionId, isCorrect) => {
    setQuestions(questions.map(q =>
      q.id === questionId ? { ...q, options: q.options.map(o => o.id === optionId ? { ...o, isCorrect } : o) } : q
    ));
  };
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