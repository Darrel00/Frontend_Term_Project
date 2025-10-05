import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import { Link } from "react-router-dom";
import './index.css';

function SignUp() {
  return (
    <div>
      <Navigation />
      <div className="intro">
        <h1>Boost your studying now!</h1>
      </div>
      <form>
        <h3>Email</h3>
        <input type="email" placeholder="email" required />
        <h3>Password</h3>
        <input type="password" placeholder="password" required />
        <Button>Create Account</Button>
      </form>
      <Link to="/signin">Login</Link>
      <Footer />
    </div>
  );
}

export default SignUp;
