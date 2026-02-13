import { useState } from "react";
import Home from "./screens/Home.jsx";
import Register from "./screens/Register.jsx";
import Login from "./screens/Login.jsx";
import Dashboard from "./screens/Dashboard.jsx";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [currentUser, setCurrentUser] = useState(null);

  const handleRegister = () => setScreen("register");
  const handleLogin = () => setScreen("login");
  const handleBack = () => setScreen("home");

  const handleRegistered = (user) => {
    setCurrentUser(user);
    setScreen("dashboard");
  };

  const handleLogged = (user) => {
    setCurrentUser(user);
    setScreen("dashboard");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setScreen("home");
  };

  return (
    <>
      {screen === "home" && (
        <Home onRegister={handleRegister} onLogin={handleLogin} />
      )}

      {screen === "register" && (
        <Register onBack={handleBack} onRegistered={handleRegistered} />
      )}

      {screen === "login" && (
        <Login onBack={handleBack} onLogged={handleLogged} />
      )}

      {screen === "dashboard" && currentUser && (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      )}
    </>
  );
}
