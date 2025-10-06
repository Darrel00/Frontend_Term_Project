import Footer from "./Components/Footer.jsx";
import './SignIn.css';

function SignInPage({ setPage }) {
  
  return (
    <div className="signinContainer">
      <main className="signinMain">
        <header className="signinHeader">
          <h1 className="signinTitle">Welcome Back!</h1>
        </header>

        <section className="signinForm">
          <form>
            <h2 className='input-name'>Email</h2>
            <input type="email" required />
            <h2 className='input-name'>Password</h2>
            <input type="password" required />
            <button className='signin-button'>Sign In</button>
          </form>
          <span className='link' onClick={() => setPage('signup')}>Sign up</span>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SignInPage;