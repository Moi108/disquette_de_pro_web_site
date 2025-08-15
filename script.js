// Liste de textes à afficher
const texts = [
  "Le problème c'est que tu es trop belle je n'est pas réussi à regarder autre chose de la soirée.",
  "Tu hantes toutes mes pensées, voir d'autres gens ne m'intéresse plus.",
  "Nos dates sont de trop hauts vols pour que j'ai envie de voir quelqu'un d'autre.",
  "Si seulement je n'étais pas omnibulé par toi, je pourrais penser à autre chose dans ma journée.",
  "Après tout le bonheur que j'ai vécu à tes côtés, tu peux me quitter, j'ai suffisament de beaux souvenirs pour l'eternité."
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