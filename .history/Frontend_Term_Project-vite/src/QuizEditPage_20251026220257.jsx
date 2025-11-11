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
                <div className='questionandoptions'>
                    <h2 className='question'>
                        Question 1: Which design principle refers to the visual weight of objects in a layout?
                    </h2>
                        <div className='options'>
                                <Card
                                    word="Contrast"
                                    showEdit={true}
                                    showDelete={true}
                                    onEdit={() => console.log('Edit clicked')}
                                    onDelete={() => console.log('Delete clicked')}
                                    setPage={setPage}
                                />
                                <Card
                                    word="Balance"
                                    showEdit={true}
                                    showDelete={true}
                                    onEdit={() => console.log('Edit clicked')}
                                    onDelete={() => console.log('Delete clicked')}
                                    setPage={setPage}
                                />
                                <Card
                                    word="Alignment"
                                    showEdit={true}
                                    showDelete={true}
                                    onEdit={() => console.log('Edit clicked')}
                                    onDelete={() => console.log('Delete clicked')}
                                    setPage={setPage}
                                />
                        </div>
                </div>
                <div className='questionandoptions'>
                    <h2 className='question'>
                        Question 2: Which color model is used for digital screens?
                    </h2>
                        <div className='options'>
                                <Card
                                    word="RGB"
                                    showEdit={true}
                                    showDelete={true}
                                    onEdit={() => console.log('Edit clicked')}
                                    onDelete={() => console.log('Delete clicked')}
                                    setPage={setPage}
                                />
                                <Card
                                    word="CMYK"
                                    showEdit={true}
                                    showDelete={true}
                                    onEdit={() => console.log('Edit clicked')}
                                    onDelete={() => console.log('Delete clicked')}
                                    setPage={setPage}
                                />
                                <Card
                                    word="Pantone"
                                    showEdit={true}
                                    showDelete={true}
                                    onEdit={() => console.log('Edit clicked')}
                                    onDelete={() => console.log('Delete clicked')}
                                    setPage={setPage}
                                />
                        </div>
                </div>
                <div className='questionandoptions'>
                    <h2 className='question'>
                        Question 3: Which file format is best for high-quality scalable graphics?
                    </h2>
                        <div className='options'>
                                <Card
                                    word="PNG"
                                    showEdit={true}
                                    showDelete={true}
                                    onEdit={() => console.log('Edit clicked')}
                                    onDelete={() => console.log('Delete clicked')}
                                    setPage={setPage}
                                />
                                <Card
                                    word="SVG"
                                    showEdit={true}
                                    showDelete={true}
                                    onEdit={() => console.log('Edit clicked')}
                                    onDelete={() => console.log('Delete clicked')}
                                    setPage={setPage}
                                />
                                <Card
                                    word="JPEG"
                                    showEdit={true}
                                    showDelete={true}
                                    onEdit={() => console.log('Edit clicked')}
                                    onDelete={() => console.log('Delete clicked')}
                                    setPage={setPage}
                                />
                        </div>
                </div>
                <button type="button" className="addCardButton"><h3>Add Question + </h3></button>
            </section>
        </main>
        <Footer />
    </div>
  );
}

export default QuizEditPage;