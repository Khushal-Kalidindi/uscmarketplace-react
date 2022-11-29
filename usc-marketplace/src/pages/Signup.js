//import "./../App.css";
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
                <div class="blank">
                    <div><input type="text" {...register("fname")} placeholder="First Name" required></input></div>
                    <div><input type="text" {...register("lname")} placeholder="Last Name" required></input></div>
                    <div><input type="email" {...register("email")} pattern=".+@usc\.edu" placeholder="Enter @usc.edu email" required></input></div>
                    <div><input type="password" {...register("password")} placeholder="Enter password" required></input></div>
                    <div><textarea rows="3" cols="30" {...register("bio")} placeholder="Write a bio!"></textarea></div>
                    <div><input class="buttons" type="submit" {...register("submit")}></input></div>
                    <div><input class="buttons" type="reset" {...register("reset")}></input></div>
                    <label>{status}</label>
                </div>
            </form>
        </div>
      </body>
    </div>
  );
}

export default SignupPage;
