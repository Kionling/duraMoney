import react from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../Login/login.css"
function Login() {
  return (
    <div>
      <div className="row">
        <div className="col s6">
          <div id="formContainer">
            <h1>Form div</h1>
          </div>
        </div>
        <div className="col s6" id="imageContainer">
        </div>
      </div>
    </div>
  );
}

export default Login;
