// Liste de textes à afficher
const texts = [
  { texte : "Le problème c'est que tu es trop belle je n'est pas réussi à regarder autre chose de la soirée.", expediteur : "recu"},
  { texte : "Tu hantes toutes mes pensées, voir d'autres gens ne m'intéresse plus.", expediteur : "envoye"},
  { texte : "Nos dates sont de trop hauts vols pour que j'ai envie de voir quelqu'un d'autre.", expediteur : "envoye"},
  { texte : "Si seulement je n'étais pas omnibulé par toi, je pourrais penser à autre chose dans ma journée.", expediteur : "recu"},
  { texte : "Tu es la seule personne qui peut me faire sourire sans même dire un mot.", expediteur : "envoye"},
  { texte : "Je ne crois pas aux coups de foudre, mais depuis que je t’ai vu(e), j’ai des doutes.", expediteur : "recu"},
  { texte : "Si la beauté était un crime, tu serais en prison à vie.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "envoye"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
  { texte : "Est-ce que tu as un plan ? Parce que je me perds dans tes yeux.", expediteur : "recu"},
];

// Fonction pour afficher la liste
function displayTexts() {
  const container = document.getElementById("textList");

    texts.forEach(text => {
        // Crée un élément div pour le message
        const messageDiv = document.createElement("div");

        // Ajoute la classe CSS en fonction de l'expéditeur
        if (text.expediteur === "recu") {
            messageDiv.className = "message-recu";
        } else {
            messageDiv.className = "message-envoye";
        }

        // Ajoute le texte du message
        messageDiv.innerHTML = `
            ${text.texte}
        `;

        // Ajoute le message au conteneur
        container.appendChild(messageDiv);
    });
}

// Appel de la fonction au chargement de la page
window.onload = displayTexts;