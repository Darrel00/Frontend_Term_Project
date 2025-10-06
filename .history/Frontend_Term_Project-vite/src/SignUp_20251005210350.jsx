import Navigation from './Components/Navigation.jsx';
import Footer from "./Components/Footer.jsx";
import './SignUp.css';

function SignUpPage({ setPage }) {
  const [localPage, setLocalPage] = useState('signup');
  return (
    <div className="signupContainer">
      <Navigation setPage={setPage} />

      <main className="signupMain">
        <header className="signupHeader">
          <h1 className="signupTitle">Boost your studying now!</h1>
        </header>

        <section className="signupForm">
          <form>
            <h3>Email</h3>
            <input type="email" placeholder="email" required />
            <h3>Password</h3>
            <input type="password" placeholder="password" required />
            <button>Create Account</button>
          </form>
          <span onClick={() => setLocalPage('signin')}>Login</span>
        </section>
      </main>

      <Footer />
      {localPage === 'signin' && <SignInPage setPage={setLocalPage} />}
    </div>
  );
}

export default SignUpPage;
