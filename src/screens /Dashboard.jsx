import { useState } from "react";
import Alters from "./Alters";
import Relations from "./Relations";
import Journal from "./Journal";

export default function Dashboard({ user, onLogout }) {
  const [tab, setTab] = useState("alters");

  return (
    <div className="screen">
      <h1>Bienvenue, {user.email}</h1>

      <div className="tabs">
        <button onClick={() => setTab("alters")}>Alters</button>
        <button onClick={() => setTab("relations")}>Relations</button>
        <button onClick={() => setTab("journal")}>Journal</button>
        <button onClick={onLogout}>Déconnexion</button>
      </div>

      {tab === "alters" && <Alters user={user} />}
      {tab === "relations" && <Relations user={user} />}
      {tab === "journal" && <Journal user={user} />}
    </div>
  );
}
