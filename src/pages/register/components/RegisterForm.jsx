import "./style/register.css";
import "./style/formAnimation.css";

function RegisterForm() {
  return (
    <form  className="registerForm">
      <h1>Sign Up</h1>
      <div className="control">
        <input type="email" name="LoginEmail" placeholder="Email" />
      </div>
      <div className="control">
        <input type="password" name="LoginPass" placeholder="Password" />
      </div>
      <div className="control">
        <label htmlFor="remember">remember me </label>
        <input type="checkbox" name="remember" id="remember" />
      </div>
      <div className="control">
        <input type="submit" id="regBtn" value="reg" />
      </div>
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>
    </form>
  );
}

export default RegisterForm;
