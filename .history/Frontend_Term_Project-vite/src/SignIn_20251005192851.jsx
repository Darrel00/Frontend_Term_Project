import Navigation from "./Components/Navigation.jsx"
import Footer from "./Components/Footer"
import Button from "./Components/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import './Login.css'

function SignIn() {
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
          <Button>Sign In</Button>
        </form>
        <Link to="/signup">Sign up</Link>
        <Footer />
    </body>
  )
}

export default SignIn