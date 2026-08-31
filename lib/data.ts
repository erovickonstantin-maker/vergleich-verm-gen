export interface Product {
  name: string;
  category: string;
  estimatedPrice: number;
  annualAppreciation: number;
  description: string;
  emoji: string;
}

export interface Investment {
  name: string;
  symbol: string;
  description: string;
  cagr: number;
  volatility: number;
  bullScenario: number;
  bearScenario: number;
  riskLevel: "low" | "medium" | "high";
  emoji: string;
}

const CURATED_PRODUCTS: Product[] = [
  // Watches
  {
    name: "Rolex Submariner",
    category: "Uhren",
    estimatedPrice: 9000,
    annualAppreciation: 0.05,
    description: "Luxus-Sportuhr",
    emoji: "⌚",
  },
  {
    name: "Vintage Patek Philippe",
    category: "Uhren",
    estimatedPrice: 25000,
    annualAppreciation: 0.07,
    description: "Sammlerstück Luxusuhr",
    emoji: "⌚",
  },
  {
    name: "Omega Speedmaster",
    category: "Uhren",
    estimatedPrice: 6000,
    annualAppreciation: 0.04,
    description: "Moonwatch",
    emoji: "⌚",
  },
  {
    name: "Audemars Piguet Royal Oak",
    category: "Uhren",
    estimatedPrice: 32000,
    annualAppreciation: 0.06,
    description: "Ikonische Sportuhr",
    emoji: "⌚",
  },
  {
    name: "Richard Mille RM 11",
    category: "Uhren",
    estimatedPrice: 180000,
    annualAppreciation: 0.03,
    description: "Ultra-Luxus Chronograph",
    emoji: "⌚",
  },
  // Electronics
  {
    name: "iPhone 16 Pro Max",
    category: "Elektronik",
    estimatedPrice: 1599,
    annualAppreciation: -0.15,
    description: "Neuestes Apple Smartphone",
    emoji: "📱",
  },
  {
    name: "MacBook Pro M4",
    category: "Elektronik",
    estimatedPrice: 3499,
    annualAppreciation: -0.1,
    description: "Profi-Laptop",
    emoji: "💻",
  },
  {
    name: "PlayStation 5 Pro",
    category: "Elektronik",
    estimatedPrice: 800,
    annualAppreciation: -0.12,
    description: "Spielkonsole",
    emoji: "🎮",
  },
  {
    name: "Samsung 8K OLED TV",
    category: "Elektronik",
    estimatedPrice: 4500,
    annualAppreciation: -0.18,
    description: "Premium-Fernseher",
    emoji: "📺",
  },
  {
    name: "Vision Pro",
    category: "Elektronik",
    estimatedPrice: 3999,
    annualAppreciation: -0.2,
    description: "AR/VR-Headset",
    emoji: "🥽",
  },
  // Fashion
  {
    name: "Hermès Birkin",
    category: "Mode",
    estimatedPrice: 8000,
    annualAppreciation: 0.08,
    description: "Ikonische Luxus-Handtasche",
    emoji: "👜",
  },
  {
    name: "Louis Vuitton Monogram Bag",
    category: "Mode",
    estimatedPrice: 2500,
    annualAppreciation: 0.04,
    description: "Designer-Handtasche",
    emoji: "👜",
  },
  {
    name: "Chanel Classic Flap",
    category: "Mode",
    estimatedPrice: 9500,
    annualAppreciation: 0.06,
    description: "Klassische Steppledertasche",
    emoji: "👜",
  },
  {
    name: "Canada Goose Parka",
    category: "Mode",
    estimatedPrice: 1200,
    annualAppreciation: -0.2,
    description: "Winterjacke",
    emoji: "🧥",
  },
  // Sneakers
  {
    name: "Air Jordan 1 Retro",
    category: "Sneaker",
    estimatedPrice: 1200,
    annualAppreciation: 0.12,
    description: "Sammler-Sneaker",
    emoji: "👟",
  },
  {
    name: "Nike Dunk Low Travis Scott",
    category: "Sneaker",
    estimatedPrice: 2000,
    annualAppreciation: 0.1,
    description: "Limitierte Kollaboration",
    emoji: "👟",
  },
  {
    name: "Yeezy Boost 350",
    category: "Sneaker",
    estimatedPrice: 400,
    annualAppreciation: -0.05,
    description: "Lifestyle-Sneaker",
    emoji: "👟",
  },
  // Cars
  {
    name: "Porsche 911 Carrera",
    category: "Autos",
    estimatedPrice: 120000,
    annualAppreciation: -0.08,
    description: "Sportwagen",
    emoji: "🚗",
  },
  {
    name: "Ferrari 296 GTB",
    category: "Autos",
    estimatedPrice: 320000,
    annualAppreciation: -0.05,
    description: "Supersportwagen",
    emoji: "🏎️",
  },
  {
    name: "Mercedes G-Klasse",
    category: "Autos",
    estimatedPrice: 140000,
    annualAppreciation: -0.1,
    description: "Luxus-SUV",
    emoji: "🚙",
  },
  {
    name: "Tesla Model S Plaid",
    category: "Autos",
    estimatedPrice: 110000,
    annualAppreciation: -0.15,
    description: "Elektro-Performance-Limousine",
    emoji: "🚗",
  },
  // Jewelry
  {
    name: "Diamant-Solitärring 2ct",
    category: "Schmuck",
    estimatedPrice: 25000,
    annualAppreciation: 0.03,
    description: "Investitionsdiamant",
    emoji: "💍",
  },
  {
    name: "Cartier Love Bracelet",
    category: "Schmuck",
    estimatedPrice: 7500,
    annualAppreciation: 0.05,
    description: "Ikonisches Goldarmband",
    emoji: "💎",
  },
  {
    name: "Rolex Daytona Gold",
    category: "Schmuck",
    estimatedPrice: 45000,
    annualAppreciation: 0.06,
    description: "Goldene Luxusuhr",
    emoji: "💍",
  },
  // Art & Collectibles
  {
    name: "Zeitgenössisches Gemälde",
    category: "Kunst",
    estimatedPrice: 15000,
    annualAppreciation: 0.06,
    description: "Werk eines aufstrebenden Künstlers",
    emoji: "🖼️",
  },
  {
    name: "Pokémon 1st Edition Booster Box",
    category: "Sammlerstücke",
    estimatedPrice: 250000,
    annualAppreciation: 0.15,
    description: "Versiegelte Sammelkarten-Box",
    emoji: "🎴",
  },
  {
    name: "Vintage Comic (CGC 9.8)",
    category: "Sammlerstücke",
    estimatedPrice: 5000,
    annualAppreciation: 0.09,
    description: "Gradeter Sammler-Comic",
    emoji: "📚",
  },
  {
    name: "LEGO Millennium Falcon UCS",
    category: "Sammlerstücke",
    estimatedPrice: 900,
    annualAppreciation: 0.08,
    description: "Versiegeltes Sammler-Set",
    emoji: "🧱",
  },
  // Wine & Spirits
  {
    name: "Château Lafite Rothschild (Kiste)",
    category: "Wein",
    estimatedPrice: 12000,
    annualAppreciation: 0.07,
    description: "Bordeaux-Spitzenwein",
    emoji: "🍷",
  },
  {
    name: "Macallan 25 Jahre",
    category: "Wein",
    estimatedPrice: 3500,
    annualAppreciation: 0.05,
    description: "Rarer Single Malt Whisky",
    emoji: "🥃",
  },
  // Boats
  {
    name: "Motoryacht 10m",
    category: "Boote",
    estimatedPrice: 250000,
    annualAppreciation: -0.06,
    description: "Freizeit-Motorboot",
    emoji: "🛥️",
  },
  // Gaming
  {
    name: "Gaming-PC High-End",
    category: "Gaming",
    estimatedPrice: 4000,
    annualAppreciation: -0.22,
    description: "High-End-Gaming-Rig",
    emoji: "🖥️",
  },
  {
    name: "Nintendo Switch 2",
    category: "Gaming",
    estimatedPrice: 470,
    annualAppreciation: -0.14,
    description: "Hybrid-Spielkonsole",
    emoji: "🎮",
  },
  {
    name: "Xbox Series X",
    category: "Gaming",
    estimatedPrice: 550,
    annualAppreciation: -0.13,
    description: "Spielkonsole",
    emoji: "🎮",
  },
  // More Watches
  {
    name: "Rolex Daytona Panda",
    category: "Uhren",
    estimatedPrice: 38000,
    annualAppreciation: 0.06,
    description: "Begehrter Chronograph",
    emoji: "⌚",
  },
  {
    name: "Casio G-Shock Limited",
    category: "Uhren",
    estimatedPrice: 300,
    annualAppreciation: -0.03,
    description: "Robuste Sammler-Digitaluhr",
    emoji: "⌚",
  },
  // More Electronics
  {
    name: "Samsung Galaxy S26 Ultra",
    category: "Elektronik",
    estimatedPrice: 1450,
    annualAppreciation: -0.17,
    description: "Android-Flaggschiff-Smartphone",
    emoji: "📱",
  },
  {
    name: "iPad Pro M5",
    category: "Elektronik",
    estimatedPrice: 1300,
    annualAppreciation: -0.14,
    description: "Profi-Tablet",
    emoji: "📱",
  },
  {
    name: "DJI Mavic Drohne",
    category: "Elektronik",
    estimatedPrice: 2200,
    annualAppreciation: -0.16,
    description: "Profi-Kameradrohne",
    emoji: "🚁",
  },
  {
    name: "Sony Alpha 1 II Kamera",
    category: "Elektronik",
    estimatedPrice: 6500,
    annualAppreciation: -0.09,
    description: "Profi-Vollformatkamera",
    emoji: "📷",
  },
  // More Fashion
  {
    name: "Ray-Ban Meta Sonnenbrille",
    category: "Mode",
    estimatedPrice: 350,
    annualAppreciation: -0.1,
    description: "Smart-Sonnenbrille",
    emoji: "🕶️",
  },
  {
    name: "Moncler Daunenjacke",
    category: "Mode",
    estimatedPrice: 1800,
    annualAppreciation: -0.15,
    description: "Premium-Winterjacke",
    emoji: "🧥",
  },
  {
    name: "Gucci Gürtel",
    category: "Mode",
    estimatedPrice: 450,
    annualAppreciation: -0.08,
    description: "Designer-Accessoire",
    emoji: "👔",
  },
  // More Sneakers
  {
    name: "Nike Air Mag 'Back to the Future'",
    category: "Sneaker",
    estimatedPrice: 50000,
    annualAppreciation: 0.1,
    description: "Extrem seltener Sammler-Sneaker",
    emoji: "👟",
  },
  {
    name: "Adidas Samba OG",
    category: "Sneaker",
    estimatedPrice: 120,
    annualAppreciation: -0.03,
    description: "Klassischer Lifestyle-Sneaker",
    emoji: "👟",
  },
  // More Cars
  {
    name: "VW Golf GTI",
    category: "Autos",
    estimatedPrice: 45000,
    annualAppreciation: -0.12,
    description: "Kompakter Hot Hatch",
    emoji: "🚗",
  },
  {
    name: "Land Rover Defender",
    category: "Autos",
    estimatedPrice: 95000,
    annualAppreciation: -0.09,
    description: "Geländewagen",
    emoji: "🚙",
  },
  {
    name: "Vintage Mercedes 190 SL",
    category: "Autos",
    estimatedPrice: 150000,
    annualAppreciation: 0.05,
    description: "Klassiker mit Sammlerwert",
    emoji: "🚘",
  },
  // Motorcycles (new category)
  {
    name: "Ducati Panigale V4",
    category: "Motorräder",
    estimatedPrice: 28000,
    annualAppreciation: -0.1,
    description: "Superbike",
    emoji: "🏍️",
  },
  {
    name: "Harley-Davidson Fat Boy",
    category: "Motorräder",
    estimatedPrice: 22000,
    annualAppreciation: -0.06,
    description: "Cruiser-Motorrad",
    emoji: "🏍️",
  },
  // More Jewelry
  {
    name: "Van Cleef & Arpels Alhambra",
    category: "Schmuck",
    estimatedPrice: 6500,
    annualAppreciation: 0.04,
    description: "Ikonisches Schmuckset",
    emoji: "💎",
  },
  {
    name: "Tiffany Diamant-Ohrringe",
    category: "Schmuck",
    estimatedPrice: 9000,
    annualAppreciation: 0.03,
    description: "Diamantschmuck",
    emoji: "💍",
  },
  // More Art & Collectibles
  {
    name: "Limitierter Kunstdruck (Signiert)",
    category: "Kunst",
    estimatedPrice: 3000,
    annualAppreciation: 0.04,
    description: "Signierte Auflage eines bekannten Künstlers",
    emoji: "🖼️",
  },
  {
    name: "Antike Bronzeskulptur",
    category: "Kunst",
    estimatedPrice: 22000,
    annualAppreciation: 0.05,
    description: "Historisches Sammlerstück",
    emoji: "🗿",
  },
  {
    name: "Rolex Submariner NOS (Vintage)",
    category: "Sammlerstücke",
    estimatedPrice: 40000,
    annualAppreciation: 0.08,
    description: "Ungetragene Vintage-Uhr",
    emoji: "🎴",
  },
  {
    name: "Michael Jordan Rookie Card (PSA 9)",
    category: "Sammlerstücke",
    estimatedPrice: 35000,
    annualAppreciation: 0.11,
    description: "Gradete Sammelkarte",
    emoji: "🏀",
  },
  {
    name: "Erstausgabe Roman (Signiert)",
    category: "Sammlerstücke",
    estimatedPrice: 4500,
    annualAppreciation: 0.05,
    description: "Signiertes literarisches Sammlerstück",
    emoji: "📖",
  },
  // More Wine & Spirits
  {
    name: "Dom Pérignon Vintage (Kiste)",
    category: "Wein",
    estimatedPrice: 2500,
    annualAppreciation: 0.04,
    description: "Prestige-Champagner",
    emoji: "🍾",
  },
  {
    name: "Pappy Van Winkle 23",
    category: "Wein",
    estimatedPrice: 5000,
    annualAppreciation: 0.06,
    description: "Seltener Bourbon-Whiskey",
    emoji: "🥃",
  },
  // More Boats
  {
    name: "Jetski",
    category: "Boote",
    estimatedPrice: 15000,
    annualAppreciation: -0.14,
    description: "Wassersportfahrzeug",
    emoji: "🚤",
  },
  // Furniture (new category)
  {
    name: "Le Corbusier LC4 Liege (Original)",
    category: "Möbel",
    estimatedPrice: 6000,
    annualAppreciation: 0.02,
    description: "Design-Klassiker",
    emoji: "🛋️",
  },
  {
    name: "Designer-Küche (High-End)",
    category: "Möbel",
    estimatedPrice: 45000,
    annualAppreciation: -0.05,
    description: "Maßgefertigte Einbauküche",
    emoji: "🍽️",
  },
  // Musical instruments (new category)
  {
    name: "Gibson Les Paul Custom",
    category: "Musikinstrumente",
    estimatedPrice: 5000,
    annualAppreciation: 0.03,
    description: "Ikonische E-Gitarre",
    emoji: "🎸",
  },
  {
    name: "Steinway & Sons Flügel",
    category: "Musikinstrumente",
    estimatedPrice: 90000,
    annualAppreciation: 0.02,
    description: "Konzertflügel",
    emoji: "🎹",
  },
  {
    name: "Vintage Fender Stratocaster (1965)",
    category: "Musikinstrumente",
    estimatedPrice: 35000,
    annualAppreciation: 0.06,
    description: "Vintage-Sammlergitarre",
    emoji: "🎸",
  },
  // Bikes (new category)
  {
    name: "Rennrad High-End (Carbon)",
    category: "Fahrräder",
    estimatedPrice: 9000,
    annualAppreciation: -0.15,
    description: "Profi-Rennrad",
    emoji: "🚴",
  },
  {
    name: "E-Bike Premium",
    category: "Fahrräder",
    estimatedPrice: 5500,
    annualAppreciation: -0.16,
    description: "Elektrofahrrad",
    emoji: "🚲",
  },
];

// --- Generated catalog extension -------------------------------------
// Deterministically expands the curated list above into a much larger
// browsable catalog (brand x model x variant combinations per category),
// so the tool has thousands of items without hand-authoring each one.
// The hash-based pricing keeps output stable across server and client
// renders (no Math.random, which would cause hydration mismatches).

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function fraction(input: string): number {
  return (hashString(input) % 10000) / 10000;
}

function roundPrice(price: number): number {
  if (price < 1000) return Math.round(price / 5) * 5;
  if (price < 10000) return Math.round(price / 50) * 50;
  if (price < 100000) return Math.round(price / 500) * 500;
  return Math.round(price / 5000) * 5000;
}

interface CategoryTemplate {
  category: string;
  emoji: string;
  brands: string[];
  models: string[];
  variants: string[];
  priceMin: number;
  priceMax: number;
  appreciationMin: number;
  appreciationMax: number;
}

const CATEGORY_TEMPLATES: CategoryTemplate[] = [
  {
    category: "Uhren",
    emoji: "⌚",
    brands: [
      "Rolex", "Omega", "Patek Philippe", "Audemars Piguet", "Cartier",
      "IWC", "Panerai", "Breitling", "TAG Heuer", "Hublot", "Longines",
      "Tudor", "Zenith", "Jaeger-LeCoultre",
    ],
    models: ["Classic", "Chronograph"],
    variants: ["Stahl", "Gold", "Zweifarbig", "Keramik", "Titan"],
    priceMin: 3000,
    priceMax: 200000,
    appreciationMin: -0.02,
    appreciationMax: 0.08,
  },
  {
    category: "Elektronik",
    emoji: "📱",
    brands: [
      "Apple", "Samsung", "Sony", "Google", "Dell", "HP", "Lenovo",
      "Microsoft", "LG", "ASUS",
    ],
    models: ["Smartphone", "Laptop", "Tablet", "Kamera", "Kopfhörer"],
    variants: ["128GB", "256GB", "512GB", "1TB"],
    priceMin: 300,
    priceMax: 6000,
    appreciationMin: -0.22,
    appreciationMax: -0.08,
  },
  {
    category: "Mode",
    emoji: "👜",
    brands: [
      "Hermès", "Louis Vuitton", "Chanel", "Gucci", "Prada", "Dior",
      "Balenciaga", "Fendi", "Burberry", "Saint Laurent",
    ],
    models: ["Handtasche", "Geldbörse", "Schal", "Gürtel", "Jacke"],
    variants: ["Schwarz", "Braun", "Beige", "Bordeaux"],
    priceMin: 300,
    priceMax: 12000,
    appreciationMin: -0.2,
    appreciationMax: 0.08,
  },
  {
    category: "Sneaker",
    emoji: "👟",
    brands: [
      "Nike", "Adidas", "New Balance", "Puma", "Reebok", "Converse",
      "Vans", "ASICS", "Jordan", "Yeezy",
    ],
    models: ["Retro High", "Classic", "Pro", "SE", "OG"],
    variants: ["Black/White", "Chicago", "University Blue"],
    priceMin: 100,
    priceMax: 3000,
    appreciationMin: -0.08,
    appreciationMax: 0.15,
  },
  {
    category: "Autos",
    emoji: "🚗",
    brands: [
      "Porsche", "Ferrari", "Lamborghini", "Mercedes-Benz", "BMW", "Audi",
      "Bentley", "Aston Martin", "McLaren", "Maserati", "Rolls-Royce",
    ],
    models: ["Coupé", "Cabrio", "SUV", "Limousine"],
    variants: ["Basis", "Sport", "Performance"],
    priceMin: 25000,
    priceMax: 350000,
    appreciationMin: -0.15,
    appreciationMax: 0.05,
  },
  {
    category: "Schmuck",
    emoji: "💍",
    brands: [
      "Cartier", "Tiffany & Co.", "Van Cleef & Arpels", "Bulgari",
      "Chopard", "Harry Winston", "Graff", "Boucheron", "Piaget",
      "Mikimoto",
    ],
    models: ["Ring", "Armband", "Halskette", "Ohrringe"],
    variants: ["Gold", "Weißgold", "Platin"],
    priceMin: 2000,
    priceMax: 60000,
    appreciationMin: 0.02,
    appreciationMax: 0.06,
  },
  {
    category: "Kunst",
    emoji: "🖼️",
    brands: [
      "Zeitgenössisch", "Abstrakt", "Pop-Art", "Impressionistisch",
      "Street Art", "Fotografie", "Skulptur", "Minimalismus",
      "Surrealistisch", "Modern",
    ],
    models: ["Gemälde", "Druck", "Skulptur"],
    variants: ["Klein", "Mittel", "Groß", "Limitiert"],
    priceMin: 1000,
    priceMax: 50000,
    appreciationMin: 0.02,
    appreciationMax: 0.08,
  },
  {
    category: "Sammlerstücke",
    emoji: "🎴",
    brands: [
      "Pokémon", "Magic The Gathering", "Yu-Gi-Oh", "Marvel Comics",
      "DC Comics", "LEGO", "Funko", "Topps", "Panini", "Hot Wheels",
    ],
    models: ["Booster Box", "Grading-Karte", "Sammler-Set", "Erstausgabe"],
    variants: ["Standard", "Limitiert", "Ungeöffnet"],
    priceMin: 200,
    priceMax: 100000,
    appreciationMin: 0.03,
    appreciationMax: 0.15,
  },
  {
    category: "Wein",
    emoji: "🍷",
    brands: [
      "Château Lafite", "Château Margaux", "Dom Pérignon", "Moët & Chandon",
      "Macallan", "Glenfiddich", "Pappy Van Winkle", "Louis Roederer",
      "Krug", "Screaming Eagle",
    ],
    models: ["Kiste", "Flasche", "Magnum"],
    variants: ["Jahrgang A", "Jahrgang B", "Jahrgang C", "Jahrgang D"],
    priceMin: 200,
    priceMax: 15000,
    appreciationMin: 0.02,
    appreciationMax: 0.08,
  },
  {
    category: "Boote",
    emoji: "🛥️",
    brands: [
      "Bavaria", "Beneteau", "Sunseeker", "Azimut", "Princess", "Ferretti",
      "Jeanneau", "Fairline", "Riva", "Sea Ray",
    ],
    models: ["Motoryacht", "Segelboot", "Sportboot"],
    variants: ["8m", "10m", "12m", "14m"],
    priceMin: 10000,
    priceMax: 500000,
    appreciationMin: -0.15,
    appreciationMax: -0.02,
  },
  {
    category: "Gaming",
    emoji: "🎮",
    brands: [
      "Sony", "Microsoft", "Nintendo", "Valve", "ASUS ROG", "Razer",
      "Alienware", "MSI", "Corsair", "Logitech",
    ],
    models: ["Konsole", "Gaming-PC", "Handheld", "Zubehör-Set"],
    variants: ["Standard", "Pro", "Limited Edition"],
    priceMin: 300,
    priceMax: 5000,
    appreciationMin: -0.25,
    appreciationMax: -0.08,
  },
  {
    category: "Motorräder",
    emoji: "🏍️",
    brands: [
      "Ducati", "Harley-Davidson", "BMW Motorrad", "Honda", "Kawasaki",
      "Yamaha", "Triumph", "KTM", "Suzuki", "Indian",
    ],
    models: ["Sportbike", "Cruiser", "Naked Bike", "Tourer"],
    variants: ["Standard", "Performance", "Limited"],
    priceMin: 5000,
    priceMax: 40000,
    appreciationMin: -0.12,
    appreciationMax: -0.02,
  },
  {
    category: "Möbel",
    emoji: "🛋️",
    brands: [
      "Knoll", "Herman Miller", "Vitra", "B&B Italia", "Cassina",
      "Poliform", "Molteni&C", "Roche Bobois", "Minotti", "Flexform",
    ],
    models: ["Sofa", "Sessel", "Tisch", "Regal"],
    variants: ["Leder", "Stoff", "Holz"],
    priceMin: 500,
    priceMax: 60000,
    appreciationMin: -0.08,
    appreciationMax: 0.03,
  },
  {
    category: "Musikinstrumente",
    emoji: "🎸",
    brands: [
      "Gibson", "Fender", "Steinway & Sons", "Yamaha", "Roland", "Martin",
      "Taylor", "PRS", "Ibanez", "Bösendorfer",
    ],
    models: ["E-Gitarre", "Akustikgitarre", "Klavier", "Keyboard"],
    variants: ["Standard", "Vintage", "Custom"],
    priceMin: 500,
    priceMax: 100000,
    appreciationMin: 0.0,
    appreciationMax: 0.06,
  },
  {
    category: "Fahrräder",
    emoji: "🚴",
    brands: [
      "Specialized", "Trek", "Canyon", "Cannondale", "Cervélo", "Giant",
      "Scott", "BMC", "Pinarello", "Cube",
    ],
    models: ["Rennrad", "Mountainbike", "E-Bike", "Gravelbike"],
    variants: ["Carbon", "Aluminium", "Titan"],
    priceMin: 500,
    priceMax: 12000,
    appreciationMin: -0.18,
    appreciationMax: -0.05,
  },
];

function generateCatalog(): Product[] {
  const generated: Product[] = [];

  for (const tpl of CATEGORY_TEMPLATES) {
    for (const brand of tpl.brands) {
      for (const model of tpl.models) {
        for (const variant of tpl.variants) {
          const name = `${brand} ${model} ${variant}`;
          const priceFraction = fraction(`${name}:price`);
          const appreciationFraction = fraction(`${name}:appreciation`);

          const price = roundPrice(
            tpl.priceMin + priceFraction * (tpl.priceMax - tpl.priceMin)
          );
          const appreciation =
            Math.round(
              (tpl.appreciationMin +
                appreciationFraction *
                  (tpl.appreciationMax - tpl.appreciationMin)) *
                1000
            ) / 1000;

          generated.push({
            name,
            category: tpl.category,
            estimatedPrice: price,
            annualAppreciation: appreciation,
            description: `${brand} ${model} – ${variant}`,
            emoji: tpl.emoji,
          });
        }
      }
    }
  }

  return generated;
}

export const PRODUCTS: Product[] = [
  ...CURATED_PRODUCTS,
  ...generateCatalog(),
];

export const CATEGORY_EMOJIS: Record<string, string> = {
  Uhren: "⌚",
  Elektronik: "📱",
  Mode: "👜",
  Sneaker: "👟",
  Autos: "🚗",
  Schmuck: "💍",
  Kunst: "🖼️",
  Sammlerstücke: "🎴",
  Wein: "🍷",
  Boote: "🛥️",
  Gaming: "🎮",
  Motorräder: "🏍️",
  Möbel: "🛋️",
  Musikinstrumente: "🎸",
  Fahrräder: "🚴",
};

export const INVESTMENTS: Investment[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    description: "Kryptowährung",
    cagr: 0.65,
    volatility: 0.75,
    bullScenario: 1.2,
    bearScenario: -0.4,
    riskLevel: "high",
    emoji: "₿",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    description: "Smart-Contract-Blockchain",
    cagr: 0.45,
    volatility: 0.7,
    bullScenario: 1.15,
    bearScenario: -0.5,
    riskLevel: "high",
    emoji: "◆",
  },
  {
    name: "NVIDIA",
    symbol: "NVDA",
    description: "KI-Chip-Marktführer",
    cagr: 0.5,
    volatility: 0.5,
    bullScenario: 0.6,
    bearScenario: -0.3,
    riskLevel: "high",
    emoji: "🖥️",
  },
  {
    name: "Apple",
    symbol: "AAPL",
    description: "Tech-Konzern",
    cagr: 0.28,
    volatility: 0.3,
    bullScenario: 0.35,
    bearScenario: -0.2,
    riskLevel: "medium",
    emoji: "🍎",
  },
  {
    name: "Tesla",
    symbol: "TSLA",
    description: "Elektrofahrzeuge",
    cagr: 0.32,
    volatility: 0.55,
    bullScenario: 0.5,
    bearScenario: -0.35,
    riskLevel: "high",
    emoji: "⚡",
  },
  {
    name: "MSCI World",
    symbol: "MSCI",
    description: "Globaler Aktienindex",
    cagr: 0.09,
    volatility: 0.15,
    bullScenario: 0.15,
    bearScenario: -0.15,
    riskLevel: "medium",
    emoji: "🌍",
  },
  {
    name: "S&P 500",
    symbol: "SPY",
    description: "US-Aktienindex",
    cagr: 0.1,
    volatility: 0.18,
    bullScenario: 0.18,
    bearScenario: -0.18,
    riskLevel: "medium",
    emoji: "📈",
  },
  {
    name: "FTSE 100",
    symbol: "FTSE",
    description: "UK-Aktienindex",
    cagr: 0.07,
    volatility: 0.16,
    bullScenario: 0.12,
    bearScenario: -0.12,
    riskLevel: "medium",
    emoji: "🇬🇧",
  },
  {
    name: "Tagesgeldkonto",
    symbol: "SAVE",
    description: "Sicheres Sparen (Ø 2,5% p.a.)",
    cagr: 0.025,
    volatility: 0.0,
    bullScenario: 0.025,
    bearScenario: 0.025,
    riskLevel: "low",
    emoji: "💰",
  },
  {
    name: "Immobilien (AT)",
    symbol: "REAL",
    description: "Wiener Immobilie (Wertsteigerung + Mietrendite)",
    cagr: 0.045,
    volatility: 0.08,
    bullScenario: 0.08,
    bearScenario: -0.05,
    riskLevel: "low",
    emoji: "🏠",
  },
  {
    name: "Gold",
    symbol: "GOLD",
    description: "Edelmetall als Wertspeicher",
    cagr: 0.08,
    volatility: 0.14,
    bullScenario: 0.18,
    bearScenario: -0.1,
    riskLevel: "low",
    emoji: "🪙",
  },
];
