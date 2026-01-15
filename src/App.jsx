import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="
      min-h-screen
      flex items-center justify-center
      bg-gradient-to-br from-blue-100 via-white to-purple-100
      px-4
    ">
      {page === "login" ? (
        <Login goRegister={() => setPage("register")} />
      ) : (
        <Register goLogin={() => setPage("login")} />
      )}
    </div>
  );
}

export default App;
