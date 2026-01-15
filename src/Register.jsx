import { useState } from "react";

const Register = ({ goLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = () => {
    if (!username || !email || !password || !confirm) {
      alert("Please fill all fields");
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    alert("Register successful ");
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
        Create Account
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Join our social platform
      </p>

      <input
        type="text"
        placeholder="Username"
        className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full p-3 mb-6 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />

      <button
        onClick={handleRegister}
        className="
          w-full py-3
          bg-green-500 text-white
          rounded-lg
          font-medium
          hover:bg-green-600
          transition
        "
      >
        Register
      </button>

      <p className="text-center text-sm mt-6">
        Already have an account?
        <button
          onClick={goLogin}
          className="text-blue-500 ml-1 hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default Register;
