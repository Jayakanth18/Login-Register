import "./login.css";
import LoginValidation from "../validation/LoginValidation";
import { useState } from "react";
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
console.log(values)

  function handleInput(event) {
    setValues((previousState) => ({
      ...previousState,
      [event.target.name]: [event.target.value],
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(values)
  }

  return (
    <div className="container">
      <h2 className="title">Login</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="e">Email</label>
        <input type="email" onChange={handleInput} name="email" id="e" required/>
        <label htmlFor="p">Password</label>
        <input type="password" onChange={handleInput} name="password" id="p" required min={8}/>
        <div className="button">
          <button type="submit" >Login</button>
        </div>
        <div className="registerbox">
          <p>Don&apos;t have account create below.⬇️</p>
          <button>Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
