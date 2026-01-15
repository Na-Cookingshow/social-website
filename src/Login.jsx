import { useState } from "react";

const Login = ({ goRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("It can't be empty");
      return;
    }
    alert("Login successful ");
  };

  return (
    <div className="
      w-full max-w-sm sm:max-w-md
      bg-white/80 backdrop-blur
      p-6 sm:p-8
      rounded-2xl
      shadow-xl
    ">
      <h2 className="text-2xl font-semibold text-center mb-2">
        Welcome Back
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Login to your account
      </p>

      <input
        type="email"
        placeholder="Email"
        className="
          w-full p-3 mb-4
          border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-400
        "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="
          w-full p-3 mb-6
          border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-400
        "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="
          w-full py-3
          bg-blue-500 text-white
          rounded-lg
          font-medium
          hover:bg-blue-600
          transition
        "
      >
        Login
      </button>

      <p className="text-center text-sm mt-6">
        Don’t have an account?
        <button
          onClick={goRegister}
          className="text-blue-500 ml-1 hover:underline"
        >
          Register
        </button>
      </p>
    </div>
  );
};

export default Login;
