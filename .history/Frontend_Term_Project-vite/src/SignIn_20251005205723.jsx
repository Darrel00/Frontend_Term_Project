import Navigation from './Components/Navigation.jsx';
import Footer from "./Components/Footer.jsx";
import { useState } from "react";
import './SignIn.css';
import SignUpPage from "./SignUp.jsx";

function SignInPage({ setPage }) {
  const [localPage, setPage] = useState('signin');
  return (
    <div className="signinContainer">
      <Navigation setPage={setPage} />

      <main className="signinMain">
        <header className="signinHeader">
          <h1 className="signinTitle">Welcome Back!</h1>
        </header>

        <section className="signinForm">
          <form>
            <h3>Email</h3>
            <input type="email" placeholder="email" required />
            <h3>Password</h3>
            <input type="password" placeholder="password" required />
            <button>Sign In</button>
          </form>
          <span onClick={() => setPage('signup')}>Sign up</span>
        </section>
      </main>

      <Footer />
      {localPage === 'signup' && <SignUpPage setPage={setPage} />}
    </div>
  )
}

export default SignInPage;