import "./../App.css";
import "./style.css";
import { useForm } from 'react-hook-form'
import { AuthContext, useAuthContext } from "../contexts/AuthContext";
import { useContext, useState } from "react";
function SignupPage() {
  const { register, handleSubmit} = useForm();
  const {signup, activeUser} = useAuthContext();
  const [status, setStatus] = useState("")
  const onSubmit = async data => {
    try {
      await signup(data.email, data.password);
      setStatus("Signed in successfully! Try logging in!")
    } catch (e) {
      setStatus("Sign In Failed! try again")
    }
  }
  return (
    <div>
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
            {JSON.stringify(activeUser)}
            <form onSubmit={handleSubmit(onSubmit)}>
                <ul class="blank">
                    <li><input type="text" {...register("fname")} placeholder="First Name" required></input></li>
                    <li><input type="text" {...register("lname")} placeholder="Last Name" required></input></li>
                    <li><input type="email" {...register("email")} pattern=".+@usc\.edu" placeholder="Enter @usc.edu email" required></input></li>
                    <li><input type="password" {...register("password")} placeholder="Enter password" required></input></li>
                    <li><textarea rows="5" cols="35" {...register("bio")} placeholder="Write a bio!"></textarea></li>
                    <li><input type="submit" {...register("submit")}></input></li>
                    <li><input type="reset" {...register("reset")}></input></li>
                    <label>{status}</label>
                </ul>
            </form>
        </div>
      </body>
    </div>
  );
}

export default SignupPage;
