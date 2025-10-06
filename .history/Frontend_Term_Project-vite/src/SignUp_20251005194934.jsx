import Footer from "./Components/Footer"
import { useState } from "react"
import './index.css'
import SignUpPage from "./SignUp.jsx"

function SignUpPage() {
  const [page, setPage] = useState('signup');
  return (
    <div>
      {page === 'signup' && (
      <>
      <div className="intro">
        <h1>Boost your studying now!</h1>
      </div>
      <form>
        <h3>Email</h3>
        <input type="email" placeholder="email" required />
        <h3>Password</h3>
        <input type="password" placeholder="password" required />
        <button>Create Account</button>
      </form>
      <button onClick="/signin">Login</button>
      <Footer />
      </>
        )}
        {page === 'signup' && <SignUpPage />}
    </div>
  );
}

export default SignUpPage;
