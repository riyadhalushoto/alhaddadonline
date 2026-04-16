export const AFFILIATE_TAG = "alhaddadonl0b-21";

const catalog = [
  { category: "Tech", items: ["Smartwatch", "Tablette", "Drone", "Projecteur", "Disque Dur Externe", "Routeur WiFi"], kw: "tech" },
  { category: "Audio", items: ["Casque Bluetooth", "Enceinte", "Écouteurs", "Microphone", "Platine Vinyle"], kw: "audio" },
  { category: "Cuisine", items: ["Blender", "Air Fryer", "Grille-pain", "Machine à Café", "Mixeur", "Robot de Cuisine"], kw: "kitchen" },
  { category: "Maison", items: ["Lampe LED", "Humidificateur", "Aspirateur Robot", "Miroir Tactile", "Ventilateur"], kw: "home" },
  { category: "Mode", items: ["Sac à dos", "Sneakers", "Lunettes de Soleil", "Veste de Pluie", "Montre"], kw: "fashion" },
  { category: "Gaming", items: ["Souris Gamer", "Clavier Mécanique", "Manette", "Casque VR", "Siège Gaming"], kw: "gaming" },
  { category: "Sport", items: ["Tapis de Yoga", "Haltères", "Gourde Isotherme", "Vélo Électrique", "Montre Sport"], kw: "fitness" },
  { category: "Beauté", items: ["Sèche-cheveux", "Lisseur", "Tondeuse", "Masseur Visage", "Brosse Électrique"], kw: "beauty" },
  { category: "Photo", items: ["Trépied", "Objectif Caméra", "Ring Light", "Sac Photo", "Appareil Photo"], kw: "photography" },
  { category: "Bureau", items: ["Organisateur", "Chaise Ergonomique", "Support Ordinateur", "Sous-main", "Destructeur Papier"], kw: "office" },
  { category: "Jardin", items: ["Outils de Jardin", "Tondeuse Gazon", "Lumière Solaire", "Barbecue", "Transat"], kw: "garden" },
  { category: "Auto", items: ["Dashcam", "Aspirateur Voiture", "Support Téléphone", "Compresseur Air", "Transmetteur Bluetooth"], kw: "car" },
  { category: "Animalerie", items: ["Distributeur Croquettes", "Panier Chien", "Laisse", "Arbre à Chat", "Aquarium"], kw: "pet" },
  { category: "Camping", items: ["Tente", "Réchaud", "Lampe de Poche", "Sac de Couchage", "Glacière"], kw: "camping" },
  { category: "Santé", items: ["Thermomètre", "Tensiomètre", "Balance Connectée", "Oxymètre", "Purificateur Air"], kw: "health" }
];

const versions = ["Premium", "Ultra", "Sleek", "Elite", "Advanced", "Essentiel", "Pro", "Minimal", "Nordic", "Evolution"];

export const products = Array.from({ length: 10000 }, (_, i) => {
  const catData = catalog[i % catalog.length];
  const itemType = catData.items[Math.floor(i / catalog.length) % catData.items.length];
  const version = versions[i % versions.length];

  // Nom propre sans préfixes ni nombres : "Smartwatch Premium"
  const fullTitle = `${itemType} ${version}`;

  return {
    id: i + 1,
    title: fullTitle,
    category: catData.category,
    description: `Découvrez notre sélection : ${fullTitle}. Un produit de la catégorie ${catData.category} conçu pour allier style et performance.`,
    rating: (Math.random() * (5 - 4.4) + 4.4).toFixed(1),
    // L'image correspond au nom de l'item grâce à itemType
    image: `https://loremflickr.com/600/600/${encodeURIComponent(itemType)},${catData.kw}?lock=${i}`
  };
});