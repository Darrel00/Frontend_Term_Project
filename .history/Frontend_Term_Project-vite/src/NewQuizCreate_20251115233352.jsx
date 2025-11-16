import { useState } from 'react';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Button from './Components/Button';
import QuizCard from './Components/QuizCard';
import './QuizEditPage.css';
import QuizOption from './Components/QuizOption';
import OptionEditModal from './Components/OptionEditModal';
import QuestionEditModal from './Components/QuestionEditModal';

function NewQuizCreate({setPage}) {
  const [questions, setQuestions] = useState([
    {
      text: 'Question 1: Which design principle refers to the visual weight of objects in a layout?',
      options: [
        { text: 'Contrast', isCorrect: false },
        { text: 'Balance', isCorrect: true },
        { text: 'Alignment', isCorrect: false }
      ]
    }
  ]);

  const [modalState, setModalState] = useState({
    isOpen: false,
    questionIndex: null,
    optionIndex: null,
    text: '',
    isCorrect: false
  });

  const [questionModalState, setQuestionModalState] = useState({
    isOpen: false,
    questionIndex: null,
    text: ''
  });

  const addQuestion = () => {
    const newQuestion = {
      text: `Question ${questions.length + 1}: New Question`,
      options: [
        { text: 'Option 1', isCorrect: false },
        { text: 'Option 2', isCorrect: false },
        { text: 'Option 3', isCorrect: false }
      ]
    };
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (qIndex) => {
    const newQuestions = [...questions];
    newQuestions.splice(qIndex, 1);
    setQuestions(newQuestions);
  };

  const deleteOption = (qIndex, oIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options.splice(oIndex, 1);
    setQuestions(newQuestions);
  };

  const addOption = (qIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options.push({ text: 'New Option', isCorrect: false });
    setQuestions(newQuestions);
  };

  const openEditModal = (qIndex, oIndex) => {
    const option = questions[qIndex].options[oIndex];
    setModalState({
      isOpen: true,
      questionIndex: qIndex,
      optionIndex: oIndex,
      text: option.text,
      isCorrect: option.isCorrect
    });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, questionIndex: null, optionIndex: null, text: '', isCorrect: false });
  };

  const openQuestionEditModal = (qIndex) => {
    setQuestionModalState({
      isOpen: true,
      questionIndex: qIndex,
      text: questions[qIndex].text
    });
  };

  const closeQuestionModal = () => {
    setQuestionModalState({ isOpen: false, questionIndex: null, text: '' });
  };

  const saveOption = (newText, newCorrect) => {
    if (modalState.questionIndex !== null && modalState.optionIndex !== null) {
      const newQuestions = [...questions];
      newQuestions[modalState.questionIndex].options[modalState.optionIndex] = { text: newText, isCorrect: newCorrect };
      setQuestions(newQuestions);
    }
    closeModal();
  };

  const saveQuestion = (newText) => {
    if (questionModalState.questionIndex !== null) {
      const newQuestions = [...questions];
      newQuestions[questionModalState.questionIndex].text = newText;
      setQuestions(newQuestions);
    }
    closeQuestionModal();
  };

  const saveQuiz = () => {
    console.log('Quiz Saved', questions);
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
                    <span onClick={saveQuiz}>Save Quiz</span>
                </Button>
            </header>

            <section className="quizEditList">
                {questions.map((question, qIndex) => (
                  <div key={qIndex} className='questionandoptions'>
                      <div className='questionHeader'>
                        <h2 className='question'>{question.text}</h2>
                        <div className='questionButtons'>
                          <button onClick={() => openQuestionEditModal(qIndex)} className='edit-question'>Edit Question</button>
                          <button onClick={() => deleteQuestion(qIndex)} className='delete-question'>Delete Question</button>
                        </div>
                      </div>
                      <div className='options'>
                        {question.options.map((option, oIndex) => (
                          <QuizOption
                              key={oIndex}
                              word={option.text}
                              showEdit={true}
                              showDelete={true}
                              onEdit={() => openEditModal(qIndex, oIndex)}
                              onDelete={() => deleteOption(qIndex, oIndex)}
                              setPage={setPage}
                              isCorrect={option.isCorrect}
                          />
                        ))}
                        <button type="button" className="addOptionButton" onClick={() => addOption(qIndex)}>Add Option +</button>
                      </div>
                  </div>
                ))}
                <button type="button" className="addCardButton" onClick={addQuestion}><h3>Add Question + </h3></button>
            </section>
        </main>
        <Footer />
        <OptionEditModal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          initialText={modalState.text}
          initialCorrect={modalState.isCorrect}
          onSave={saveOption}
        />
        <QuestionEditModal
          isOpen={questionModalState.isOpen}
          onClose={closeQuestionModal}
          initialText={questionModalState.text}
          onSave={saveQuestion}
        />
    </div>
  );
}

export default NewQuizCreate;