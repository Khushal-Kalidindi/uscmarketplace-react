import "./../App.css";
import "./style.css";

function SignupPage() {
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
        <div class="login-container">
            <h1>Sign Up</h1>
            <form>
                <ul class="blank">
                    <li><input type="text" name="name" placeholder="First Name" required></input></li>
                    <li><input type="text" name="name" placeholder="Last Name" required></input></li>
                    <li><input type="email" name="email" pattern=".+@usc\.edu" placeholder="Enter @usc.edu email" required></input></li>
                    <li><input type="password" name="password" placeholder="Enter password" required></input></li>
                    <li><textarea rows="5" cols="35" name="bio" placeholder="Write a bio!"></textarea></li>
                    <li><input type="submit" name="submit"></input></li>
                    <li><input type="reset" name="reset"></input></li>
                </ul>
            </form>
        </div>
      </body>
    </html>
  );
}

export default SignupPage;
