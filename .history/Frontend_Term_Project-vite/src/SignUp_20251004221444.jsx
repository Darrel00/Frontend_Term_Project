import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"
import Button from "./Components/Button"
import './index.css'

function SignUp() {
  return (
    <body>
        <Navigation/>
        <div className="intro">
          <h1>Boost your studying now!</h1>
        </div>
        <form>
          <input type="email" placeholder="email" required />
        </form>
        <a href="/src/SignIn.jsx">Login</a>
        <Footer />
    </body>
  )
}

export default SignUp