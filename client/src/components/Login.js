// client/src/components/Login.js
import axios from "axios";
export default function Login(){
  const login = async ()=>{
    const res = await axios.post("/auth/login", { user: "demo" });
    localStorage.setItem("token", res.data.token);
  };
  return <button onClick={login}>Login</button>;
}