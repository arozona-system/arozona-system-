import { useState } from "react";
import { saveUser } from "../utils/storage";

export default function Register({ onBack, onRegistered }) {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");

  const submit = () => {
    if (!email.includes("@")) return alert("Email invalide");
    if (!/^[0-9]{4}$/.test(pin)) return alert("Le code doit contenir 4 chiffres");

    const user = { email, pin, alters: [], journal: [], relations: [] };
    saveUser(user);
    onRegistered(user);
  };

  return (
    <div className="screen center">
      <h1>Créer un compte</h1>

      <input
        placeholder="Adresse email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Code PIN (4 chiffres)"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        maxLength={4}
      />

      <button className="btn primary" onClick={submit}>Créer</button>
      <button className="btn secondary" onClick={onBack}>Retour</button>
    </div>
  );
}
