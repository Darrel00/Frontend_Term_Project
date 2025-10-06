import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"
import Button from "./Components/Button"
import './index.css'

function SignIn({ setCurrentPage }) {
  return (
    <div>
        <Navigation setCurrentPage={setCurrentPage}/>
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
        <button onClick={() => setCurrentPage('signup')}>Sign up</button>
        <Footer />
    </div>
  )
}

export default SignIn