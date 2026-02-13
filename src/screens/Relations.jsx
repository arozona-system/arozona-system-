import { useState } from "react";
import { updateUser } from "../utils/storage";

export default function Relations({ user }) {
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [type, setType] = useState("ami");

  const addRelation = () => {
    if (a1 === a2) return alert("Un alter ne peut pas être en relation avec lui-même.");
    if (!a1 || !a2) return alert("Sélectionnez deux alters.");

    user.relations.push({
      from: a1,
      to: a2,
      type,
    });

    updateUser(user);
    alert("Relation ajoutée !");
  };

  return (
    <div>
      <h2>Relations entre alters</h2>

      {user.alters.length < 2 && (
        <p>Vous devez avoir au moins 2 alters pour créer des relations.</p>
      )}

      {user.alters.length >= 2 && (
        <>
          <div className="relation-form">
            <select value={a1} onChange={(e) => setA1(e.target.value)}>
              <option value="">Alter 1</option>
              {user.alters.map((a, i) => (
                <option key={i} value={a.name}>{a.name}</option>
              ))}
            </select>

            <select value={a2} onChange={(e) => setA2(e.target.value)}>
              <option value="">Alter 2</option>
              {user.alters.map((a, i) => (
                <option key={i} value={a.name}>{a.name}</option>
              ))}
            </select>

            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="ami">Ami</option>
              <option value="famille">Famille</option>
              <option value="partenaire">Partenaire</option>
              <option value="autre">Autre</option>
            </select>

            <button className="btn primary" onClick={addRelation}>
              Ajouter
            </button>
          </div>

          <h3>Relations existantes</h3>
          {user.relations.length === 0 && <p>Aucune relation enregistrée.</p>}

          {user.relations.map((r, i) => (
            <div key={i} className="relation-card">
              <p>
                <strong>{r.from}</strong> — {r.type} → <strong>{r.to}</strong>
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
