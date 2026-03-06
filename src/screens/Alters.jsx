import Header from "../components/Header";

export default function Alters({ user, onLogout, onNavigate }) {
  return (
    <>
      <Header user={user} onLogout={onLogout} onNavigate={onNavigate} />

      <div className="page">
        <h1>Vos alters</h1>

        <button
          className="btn primary"
          onClick={() => onNavigate("createAlter")}
        >
          Créer un alter
        </button>

        <p>Aucun alter pour le moment.</p>
      </div>
    </>
  );
}
