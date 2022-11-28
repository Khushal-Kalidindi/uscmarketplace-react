import "./../App.css";
import "./style.css";
import SignupPage from "./Signup"
import { Link } from "react-router-dom";


function LoginPage() {
  return (
    <html>
      <head>
        <script
          src="https://kit.fontawesome.com/fd33c7b4a1.js"
          crossorigin="anonymous"
        ></script>
        <meta charset="utf-8" />
      </head>
      <body>
        <div className="App">
          <div class="login-container">
            <h1>Login</h1>
            <div class="google">
              <i class="fa-brands fa-google"></i>
              <p>Google</p>
            </div>

            <form method="POST">
              <div class="txt_field">
                <label>Email</label>
                <input type="text" required />
              </div>
              <div class="txt_field">
                <label>Password</label>
                <input type="password" required />
              </div>

              <input class="login-button" type="submit" value="Login"></input>
              <div class="signup_link">
                Not a member? 
                <Link to="/signup">
                  <li>Signup</li>
                </Link>
                {/* <a href="/signup">Signup</a> */}
              </div>
            </form>
          </div>
        </div>
      </body>
    </html>
  );
}

export default LoginPage;
