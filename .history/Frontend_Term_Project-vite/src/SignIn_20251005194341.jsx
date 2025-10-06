import Footer from "./Components/Footer"
import Button from "./Components/Button"
import { useState } from "react"
import './index.css'

function SignInPage() {
  const [email, setEmail] = useState('');
  return (
    <body>
        
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
    </body>
  )
}

export default SignInPage;