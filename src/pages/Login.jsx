import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";
import axios from "axios";

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "https://backendsorath.vercel.app/api/admin/login",
        { email, password }
      );

      login(res.data.token);
      navigate("/dashboard");
    } catch {
      setError("Invalid email/Username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-6">
      
      <div className="bg-gray-900/70 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-3xl p-10 w-full max-w-md transform hover:scale-105 transition-all duration-500">
        
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-white mb-8 tracking-tight">
          Admin <span className="text-indigo-500">Login</span>
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email */}
          <div>
            <input
              type="text"
              placeholder="Enter your email/username"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-400 text-sm text-center animate-pulse">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-indigo-500/40"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
