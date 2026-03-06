export default function Header({ onNavigate, onLogout, user }) {
  return (
    <div className="navbar">
      <div>{user?.email}</div>

      <div className="nav-links">
        <button className="nav-btn" onClick={() => onNavigate("alters")}>Alters</button>
        <button className="nav-btn" onClick={() => onNavigate("relations")}>Relations</button>
        <button className="nav-btn" onClick={() => onNavigate("journal")}>Journal</button>
        <button className="nav-btn" onClick={onLogout}>Déconnexion</button>
      </div>
    </div>
  );
}
