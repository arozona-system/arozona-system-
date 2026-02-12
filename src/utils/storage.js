// Sauvegarde un utilisateur dans le localStorage
export function saveUser(user) {
  localStorage.setItem("user_" + user.email, JSON.stringify(user));
}

// Récupère un utilisateur via son email
export function getUser(email) {
  const data = localStorage.getItem("user_" + email);
  return data ? JSON.parse(data) : null;
}

// Met à jour un utilisateur existant
export function updateUser(user) {
  saveUser(user);
}
