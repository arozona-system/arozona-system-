import { useState } from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Alters from "./screens/Alters";
import Relations from "./screens/Relations";
import Journal from "./screens/Journal";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [currentUser, setCurrentUser] = useState(null);

  const handleNavigate = (target) => {
    setScreen(target);
  };

  const handleLogged = (user) => {
    setCurrentUser(user);
    setScreen("dashboard");
  };

  const handleRegistered = (user) => {
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
        <Home
          onRegister={() => setScreen("register")}
          onLogin={() => setScreen("login")}
        />
      )}

      {screen === "login" && (
        <Login
          onBack={() => setScreen("home")}
          onLogged={handleLogged}
        />
      )}

      {screen === "register" && (
        <Register
          onBack={() => setScreen("home")}
          onRegistered={handleRegistered}
        />
      )}

      {screen === "dashboard" && currentUser && (
        <Dashboard
          user={currentUser}
          onLogout={handleLogout}
          onNavigate={handleNavigate}
        />
      )}

      {screen === "alters" && currentUser && (
        <Alters
          user={currentUser}
          onLogout={handleLogout}
          onNavigate={handleNavigate}
        />
      )}

      {screen === "relations" && currentUser && (
        <Relations
          user={currentUser}
          onLogout={handleLogout}
          onNavigate={handleNavigate}
        />
      )}

      {screen === "journal" && currentUser && (
        <Journal
          user={currentUser}
          onLogout={handleLogout}
          onNavigate={handleNavigate}
        />
      )}
    </>
  );
}
