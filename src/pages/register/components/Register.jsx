import RegisterForm from "./RegisterForm";
import RegisterText from "./RegisterText";
import "./style/register.css";
function Register() {
  return (
    <div className="register-wrapper" id="reg-wrapper">
      <RegisterText />
      <RegisterForm />
    </div>
  );
}

export default Register;
