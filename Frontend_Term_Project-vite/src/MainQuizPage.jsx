function QuizPage({ setCurrentPage }) {
  return (
    <div>
      <Navigation setCurrentPage={setCurrentPage} />
      <h1>Your Quizzes</h1>
      <Button>Create New Quiz</Button>
      <div className='quiz-list'>
        <div className='quiz-item'>
          <h2>French Vocabulary</h2>
          <Button>Start</Button>
          <Button>Edit</Button>
        </div>
        <div className='quiz-item'>
          <h2>Graphic Design</h2>
          <Button>Start</Button>
          <Button>Edit</Button>
        </div>
        <div className='quiz-item'>
          <h2>Coding</h2>
          <Button>Start</Button>
          <Button>Edit</Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default QuizPage;