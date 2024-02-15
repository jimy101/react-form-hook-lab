import "./style/login.css";
import "./style/formAnimation.css";
import { useForm } from "react-hook-form";

function LoginForm() {
  const form = useForm();
  const { register, handleSubmit, formState, setValue } = form;

  function onLogin(values) {
    console.log(values);
    alert("ok done");
    setValue("email", "");
    setValue("LoginPass", "");
    // alert(values);
  }
  return (
    <form onSubmit={handleSubmit(onLogin)} className="loginForm">
      <h1>Log In</h1>
      <div className="control">
        <input
          {...register("email", {
            required: {
              value: true,
              message: "must enter a valid email",
            },
          })}
          type="email"
          placeholder="enter a Email"
        />
        <p className="err">{formState.errors.email?.message}</p>
      </div>
      <div className="control">
        <input
          {...register("LoginPass", {
            required: {
              value: true,
              message: "enter a strong password",
            },
            minLength: {
              value: 8,
              message: "min length 8 chars",
            },
            pattern: {
              value:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
              message: "must be strong password",
            },
          })}
          type="password"
          name="LoginPass"
          placeholder="Password"
        />
        <p className="err">{formState.errors.LoginPass?.message}</p>
      </div>
      <div className="control">
        <label htmlFor="remember">remember me </label>
        <input type="checkbox" name="remember" id="remember" />
      </div>
      <div className="control">
        <input type="submit" id="logBtn" value="Login" />
      </div>
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>
    </form>
  );
}

export default LoginForm;
