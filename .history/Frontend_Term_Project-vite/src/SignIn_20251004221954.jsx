import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"
import Button from "./Components/Button"
import './index.css'

function SignIn() {
  return (
    <body>
        <Navigation/>
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
        <a href="/src/SignUp.jsx">Sign up</a>
        <Footer />
    </body>
  )
}

export default SignIn