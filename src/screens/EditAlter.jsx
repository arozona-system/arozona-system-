import { useState } from "react";
import { updateUser } from "../utils/storage";

export default function EditAlter({ user, alterIndex, onBack, onSaved }) {
  const alter = user.alters[alterIndex];

  const [name, setName] = useState(alter.name);
  const [age, setAge] = useState(alter.age);
  const [gender, setGender] = useState(alter.gender);
  const [role, setRole] = useState(alter.role);
  const [orientation, setOrientation] = useState(alter.orientation);
  const [photo, setPhoto] = useState(alter.photo);

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const save = () => {
    alter.name = name;
    alter.age = age;
    alter.gender = gender;
    alter.role = role;
    alter.orientation = orientation;
    alter.photo = photo;

    updateUser(user);
    alert("Alter modifié !");
    onSaved();
  };

  return (
    <div className="screen center">
      <h1>Modifier l’alter</h1>

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

      <button className="btn primary" onClick={save}>Sauvegarder</button>
      <button className="btn secondary" onClick={onBack}>Retour</button>
    </div>
  );
}
