<<<<<<< HEAD
export const products = [
  {
    id: 1,
    title: "Amazon Sélection",
    description: "Découvrez les meilleures offres sélectionnées sur Amazon.",
    price: "Voir prix",
    rating: 4.8,
    badge: "Top",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    link: "https://amzn.to/4bZu8a9",
    category: "Shopping"
  },

  {
    id: 2,
    title: "TipTrans - Logistique",
    description: "Service de réexpédition de colis international sécurisé.",
    price: "Service",
    rating: 4.7,
    badge: "Service",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1000&auto=format&fit=crop",
    link: "https://www.tiptrans.com/#assanibinheradi",
    category: "Services"
  },

  {
    id: 3,
    title: "Canva Pro",
    description: "Outils de création graphique pour designs professionnels.",
    price: "$12 / mois",
    rating: 4.9,
    badge: "Populaire",
    image: "https://images.unsplash.com/photo-1590608897129-79a0c13f7b63?q=80&w=1000&auto=format&fit=crop",
    link: "https://www.canva.com",
    category: "Design"
  },

  {
    id: 4,
    title: "Outils Marketing IA",
    description: "Les meilleurs outils d'intelligence artificielle pour le marketing.",
    price: "Voir l'offre",
    rating: 4.6,
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    category: "Marketing"
  },

  {
    id: 5,
    title: "Formation Business en ligne",
    description: "Apprenez à créer un business rentable sur internet.",
    price: "$49",
    rating: 4.8,
    badge: "Best seller",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    category: "Formation"
  }
];
=======
export const AFFILIATE_TAG = "alhaddadonl0b-21";

const catalog = [
  { category: "Tech", items: ["Smartwatch", "Tablette", "Drone", "Projecteur", "Disque Dur External", "Routeur WiFi"], kw: "tech" },
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

  // Nom épuré : "Smartwatch Premium"
  const fullTitle = `${itemType} ${version}`;

  return {
    id: i + 1,
    title: fullTitle,
    category: catData.category,
    description: `Découvrez notre sélection : ${fullTitle}. Un produit de la catégorie ${catData.category} conçu pour allier style et performance.`,
    rating: (Math.random() * (5 - 4.4) + 4.4).toFixed(1),
    // Recherche d'image basée uniquement sur le type d'objet pour la précision
    image: `https://loremflickr.com/600/600/${encodeURIComponent(itemType)},${catData.kw}?lock=${i}`
  };
});
>>>>>>> ae4ca85 (affiliate-site)
