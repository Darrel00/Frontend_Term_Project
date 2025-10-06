import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"
import './index.css'

function SignUp() {
  return (
    <body>
        <Navigation/>
        <div className="Intro">
          <h1>Boost your studying now!</h1>
          <a href="/src/Login.jsx">Login</a>
        </div>
        <Footer />
    </body>
  )
}

export default SignUp