import react from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../Login/login.css";
function Login() {
  return (
    <div className="row" id="general">
      <div classNameName="container center black-text">
        <h2 className="white-text">HIKR</h2>
        <p className="white-text">The journal for all things hiking</p>
      </div>
      <div className="container center">
        <div className="row">
          <div className="col s12 l7">
            <h3>Login</h3>
            <div className="input-field col s12  ">
              <input id="email" type="email" className="validate"></input>
              <label for="email">
                <i className="material-icons">email</i>Email
              </label>
            </div>
            <div className="input-field col s12">
              <input id="password" type="password" className="validate"></input>
              <label for="password">
                <i className="material-icons">lock</i>Password
              </label>
            </div>
            <button
              className="btn waves-effect waves-light #00bfa5 teal accent-4"
              id="submit"
              type="submit"
              name="action"
            >
              Sign in
              <i className="material-icons right">arrow_forward</i>
            </button>
          </div>
        </div>
      </div>
      <div className=" center">
      <div className="row">
        <div className="col s12 l8">
          <h5>New user?</h5>
          <a href="/signUp">
            <button
              className="btn waves-effect waves-light #00bfa5 teal accent-4"
              id="submit"
              type="submit"
              name="action"
            >
              Sign up<i className="material-icons right">account_box</i>
            </button>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;
