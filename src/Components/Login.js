//Practise For USENAVIGATE HOOK FN
import { useNavigate } from "react-router-dom";

function Login() {
  //Login Code Exists
  let navigate = useNavigate()
  let handleLogin = ()=>{
      navigate("/dashboard")
  }
  return (
    <>
      <h1>Login Page </h1>
      <button onClick={handleLogin}>Get Started !</button>
    </>
  );
}

export default Login;
