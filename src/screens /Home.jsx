export default function Home({ onRegister, onLogin }) {
  return (
    <div className="screen center">
      <h1 className="title">Bienvenue</h1>

      <button className="btn primary" onClick={onRegister}>
        Créer un compte
      </button>

      <button className="btn secondary" onClick={onLogin}>
        Se connecter
      </button>
    </div>
  );
}
