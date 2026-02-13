import { useState } from "react";
import { updateUser } from "../utils/storage";

export default function CreateAlter({ user, onBack, onCreated }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [orientation, setOrientation] = useState("");
  const [photo, setPhoto] = useState("");

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const submit = () => {
    if (!name) return alert("Le nom est obligatoire.");

    const newAlter = {
      name,
      age,
      gender,
      role,
      orientation,
      photo,
      controller: false,
    };

    user.alters.push(newAlter);
    updateUser(user);

    alert("Alter créé !");
    onCreated();
  };

  return (
    <div className="screen center">
      <h1>Créer un alter</h1>

      <input
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Âge"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        placeholder="Genre"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />

      <input
        placeholder="Rôle"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <input
        placeholder="Orientation"
        value={orientation}
        onChange={(e) => setOrientation(e.target.value)}
      />

      <label>Photo :</label>
      <input type="file" accept="image/*" onChange={handlePhoto} />

      {photo && (
        <img
          src={photo}
          alt="preview"
          style={{ width: "120px", marginTop: "10px", borderRadius: "10px" }}
        />
      )}

      <button className="btn primary" onClick={submit}>Créer</button>
      <button className="btn secondary" onClick={onBack}>Retour</button>
    </div>
  );
}
