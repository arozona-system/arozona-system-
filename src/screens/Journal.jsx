export default function Journal({ user }) {
  return (
    <div>
      <h2>Journal des contrôles</h2>

      {user.journal.length === 0 && (
        <p>Aucun événement enregistré pour le moment.</p>
      )}

      {user.journal.map((entry, i) => (
        <div key={i} className="journal-entry">
          <p>
            <strong>{entry.alter}</strong> était au contrôle le{" "}
            {entry.time}
          </p>
        </div>
      ))}
    </div>
  );
}
