import { useState } from "react";
import { updateUser } from "../utils/storage";

export default function Alters({ user }) {
  const [refresh, setRefresh] = useState(false);

  const setController = (index) => {
    user.alters.forEach((a, i) => {
      a.controller = i === index;
    });

    user.journal.push({
      alter: user.alters[index].name,
      time: new Date().toLocaleString(),
    });

    updateUser(user);
    setRefresh(!refresh);
  };

  return (
    <div>
      <h2>Vos alters</h2>

      <button className="btn primary" onClick={() => alert("L'écran de création arrive bientôt ✨")}>
        Créer un alter
      </button>

      <div className="alter-list">
        {user.alters.length === 0 && <p>Aucun alter pour le moment.</p>}

        {user.alters.map((alter, index) => (
          <div key={index} className="alter-card">
            <h3>{alter.name}</h3>
            <p>Âge : {alter.age}</p>
            <p>Genre : {alter.gender}</p>
            <p>Rôle : {alter.role}</p>

            <label>
              <input
                type="checkbox"
                checked={alter.controller || false}
                onChange={() => setController(index)}
              />
              Au contrôle
            </label>

            <button className="btn secondary" onClick={() => alert("L'écran de modification arrive bientôt ✨")}>
              Modifier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
