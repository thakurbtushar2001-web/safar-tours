import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

import "./Login.css";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );


      alert("Login Successful ✅");

      navigate("/admin");


    } catch(error) {

  console.log(error.code);
  console.log(error.message);

  alert(error.message);

}
  };


  return (

    <div className="login-page">


      <div className="login-box">


        <h2>
          Admin Login
        </h2>


        <form onSubmit={handleLogin}>


          <input

          type="email"

          placeholder="Admin Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          required

          />


          <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          required

          />


          <button type="submit">

          Login

          </button>


        </form>


      </div>


    </div>

  );

}


export default Login;