import Footer from "./Components/Footer"
import { useState } from "react"
import './SignIn.css'
import SignUpPage from "./SignUp.jsx"
import Navigation from "./Components/Navigation.jsx";

function SignInPage() {
  const [page, setPage] = useState('signin');
  return (
    <div className="signinContainer">
      <Navigation setPage={setPage}/>
        <>
        <div className="intro">
          <h1>Welcome Back!</h1>
        </div>
        <form>
          <h3>Email</h3>
          <input type="email" placeholder="email" required />
          <h3>Password</h3>
          <input type="password" placeholder="password" required />
          <button>Sign In</button>
        </form>
        <span onClick={() => setPage('signup')}>Sign up</span>
        <Footer />
        </>
        {page === 'signup' && <SignUpPage />}
    </div>
  )
}

export default SignInPage;