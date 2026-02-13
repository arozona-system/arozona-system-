import { useState } from "react";
import { getUser } from "../utils/storage";

export default function Login({ onBack, onLogged }) {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");

  const submit = () => {
    const user = getUser(email);
    if (!user) return alert("Compte introuvable");
    if (user.pin !== pin) return alert("Code incorrect");

    onLogged(user);
  };

  return (
    <div className="screen center">
      <h1>Connexion</h1>

      <input
        placeholder="Adresse email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Code PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        maxLength={4}
      />

      <button className="btn primary" onClick={submit}>Se connecter</button>
      <button className="btn secondary" onClick={onBack}>Retour</button>
    </div>
  );
}
