<<<<<<< HEAD
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import { Link } from "react-router-dom";
import './index.css';

function SignUp() {
  return (
    <div>
      <Navigation />
      <div className="intro">
        <h1>Boost your studying now!</h1>
      </div>
      <form>
        <h3>Email</h3>
        <input type="email" placeholder="email" required />
        <h3>Password</h3>
        <input type="password" placeholder="password" required />
        <Button>Create Account</Button>
      </form>
      <Link to="/signin">Login</Link>
=======
import Footer from "./Components/Footer.jsx";
import './SignUp.css';

function SignUpPage({ setPage }) {
  
  return (
    <div className="signupContainer">
      <main className="signupMain">
        <header className="signupHeader">
          <h1 className="signupTitle">Boost your studying now!</h1>
        </header>

        <section className="signupForm">
          <form>
            <h2 className='input-name'>Email</h2>
            <input type="email" required />
            <h2 className='input-name'>Password</h2>
            <input type="password" required />
            <button className='create-account'>Create Account</button>
          </form>
          <span className='link' onClick={() => setPage('signin')}>Login</span>
        </section>
      </main>

>>>>>>> flashcard-branch
      <Footer />
    </div>
  );
}

export default SignUpPage;
