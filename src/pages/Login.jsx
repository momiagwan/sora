import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";
import axios from "axios";

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://backendsorath.vercel.app/api/admin/login",
        {
          email,
          password,
        },
      );
      login(res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl mb-4">Admin Login</h2>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
