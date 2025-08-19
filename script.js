// Liste de textes à afficher
const texts = [
  "Le problème c'est que tu es trop belle je n'est pas réussi à regarder autre chose de la soirée.",
  "Tu hantes toutes mes pensées, voir d'autres gens ne m'intéresse plus.",
  "Nos dates sont de trop hauts vols pour que j'ai envie de voir quelqu'un d'autre.",
  "Si seulement je n'étais pas omnibulé par toi, je pourrais penser à autre chose dans ma journée.",
  "Tu es la seule personne qui peut me faire sourire sans même dire un mot.",
  "Je ne crois pas aux coups de foudre, mais depuis que je t’ai vu(e), j’ai des doutes.",
  "Si la beauté était un crime, tu serais en prison à vie.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
  "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.",
];

// Fonction pour afficher la liste
function displayTexts() {
  const listElement = document.getElementById('textList');
  texts.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      listElement.appendChild(li);
  });
}

// Appel de la fonction au chargement de la page
window.onload = displayTexts;