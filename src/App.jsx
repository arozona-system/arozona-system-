import { useState } from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [currentUser, setCurrentUser] = useState(null);

  // Navigation entre les écrans
  const handleNavigate = (target) => {
    setScreen(target);
  };

  // Quand l'utilisateur se connecte
  const handleLogged = (user) => {
    setCurrentUser(user);
    setScreen("dashboard");
  };

  // Quand l'utilisateur crée un compte
  const handleRegistered = (user) => {
    setCurrentUser(user);
    setScreen("dashboard");
  };

  // Déconnexion
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
        <Dashboard
          user={currentUser}
          onLogout={handleLogout}
          onNavigate={handleNavigate}
        />
      )}

      {screen === "relations" && currentUser && (
        <Dashboard
          user={currentUser}
          onLogout={handleLogout}
          onNavigate={handleNavigate}
        />
      )}

      {screen === "journal" && currentUser && (
        <Dashboard
          user={currentUser}
          onLogout={handleLogout}
          onNavigate={handleNavigate}
        />
      )}
    </>
  );
}
