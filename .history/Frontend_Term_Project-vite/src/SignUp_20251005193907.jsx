import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import { Link } from "react-router-dom";
import './index.css';

function SignUpPage() {
  return (
    <div>
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
    </div>
  );
}

export default SignUpPage;
