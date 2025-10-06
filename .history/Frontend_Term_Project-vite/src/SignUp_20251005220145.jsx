import Navigation from './Components/Navigation.jsx';
import Footer from "./Components/Footer.jsx";
import './SignUp.css';

function SignUpPage({ setPage }) {
  
  return (
    <div className="signupContainer">
      <Navigation setPage={setPage} />
      <main className="signupMain">
        <header className="signupHeader">
          <h1 className="signupTitle">Boost your studying now!</h1>
        </header>

        <section className="signupForm">
          <form>
            <h2 className='input-name'>Email</h2>
            <input type="email" placeholder="email" required />
            <h2 className='input-name'>Password</h2>
            <input type="password" placeholder="password" required />
            <button className='create-account'>Create Account</button>
          </form>
          <span className='link' onClick={() => setPage('signin')}>Login</span>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SignUpPage;
