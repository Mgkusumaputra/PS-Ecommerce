import type { Product } from "./types";

const productDummy: Product[] = [
  {
    id: 1,
    name: "Ultimate Redstone Automator",
    price: 15.99,
    shortDescription:
      "Automate complex redstone circuits with a single command.",
    detailedDescription:
      "A powerful plugin that simplifies redstone automation, allowing players to create advanced circuits without complex wiring. Perfect for builders and engineers looking to enhance their Minecraft creations.",
    image:
      "https://media.discordapp.net/attachments/1342492329273065593/1342492464912666764/Ultimate_Redstone_Automator.jpeg?ex=67b9d509&is=67b88389&hm=2ecdf20969c8e6b1e9d05ab6461ab2320676efb48819be840eb4bc6222685253&=&format=webp",
  },
  {
    id: 2,
    name: "Medieval Kingdom Map",
    price: 29.99,
    shortDescription:
      "A vast medieval world with castles, villages, and dungeons.",
    detailedDescription:
      "Explore a beautifully crafted medieval-themed Minecraft world featuring towering castles, lively villages, hidden dungeons, and a dynamic landscape. Ideal for RPG adventures, roleplay servers, or creative storytelling.",
    image:
      "https://media.discordapp.net/attachments/1342492329273065593/1342492465390948382/Medieval_Kingdom_Map.jpeg?ex=67b9d50a&is=67b8838a&hm=f30fe610978d75899a0d01ef6a117e85827f267c6b26e5833caf5071f4b56be1&=&format=webp",
  },
  {
    id: 3,
    name: "Cyberpunk City Texture Pack",
    price: 12.49,
    shortDescription:
      "A futuristic cyberpunk-style texture pack with neon lights.",
    detailedDescription:
      "Transform your Minecraft world into a high-tech cyberpunk city with glowing neon signs, metallic surfaces, digital billboards, and a dark urban atmosphere. Perfect for futuristic builds and sci-fi roleplay servers.",
    image:
      "https://media.discordapp.net/attachments/1342492329273065593/1342492571028422746/Cyberpunk_City_Texture_Pack.jpeg?ex=67b9d523&is=67b883a3&hm=7f2de9add3abee9772e0d59bd67f50b45c75fd7790b91a734f1f3cddf43df78b&=&format=webp",
  },
  {
    id: 4,
    name: "Fantasy RPG Quest Pack",
    price: 19.99,
    shortDescription:
      "A collection of RPG-style quests, dungeons, and custom NPCs.",
    detailedDescription:
      "Embark on a thrilling adventure with this quest pack featuring epic storylines, challenging dungeons, magical NPCs, and powerful rewards. Ideal for servers looking to enhance the RPG experience.",
    image:
      "https://media.discordapp.net/attachments/1342492329273065593/1342493733559730236/Fantasy_RPG_Quest_Pack.jpeg?ex=67b9d638&is=67b884b8&hm=c9d1dde254ba084209f06c5233a80375434c0411b6b7ecc6cf671717653a66ee&=&format=webp",
  },
  {
    id: 5,
    name: "Japanese Zen Garden Build",
    price: 9.99,
    shortDescription:
      "A peaceful Japanese garden with cherry blossoms and koi ponds.",
    detailedDescription:
      "Create a tranquil Minecraft retreat with a Japanese Zen garden, featuring sakura trees, bamboo bridges, stone lanterns, and a calming koi pond. Perfect for relaxation and aesthetic builds.",
    image:
      "https://media.discordapp.net/attachments/1342492329273065593/1342493730992558122/Japanese_Zen_Garden_Build.jpeg?ex=67b9d637&is=67b884b7&hm=ce66c3cafd6fb7a966230c4c9fe9e684f0a79b4c3e4c5d8f769ba5b00d89d196&=&format=webp",
  },
  {
    id: 6,
    name: "Space Colony Survival Map",
    price: 24.99,
    shortDescription: "Survive on Mars and build a thriving space colony.",
    detailedDescription:
      "Stranded on Mars, you must gather resources, build structures, and survive against the elements in this challenging space-themed survival map. Features custom biomes, futuristic technology, and deep exploration.",
    image:
      "https://media.discordapp.net/attachments/1342492329273065593/1342493731479228558/Space_Colony_Survival_Map.jpeg?ex=67b9d637&is=67b884b7&hm=88372746ba88b87867d16eeb1175341becdfa8e5de1576b457464f171d261a00&=&format=webp",
  },
  {
    id: 7,
    name: "Apocalypse Zombie Horde Plugin",
    price: 14.99,
    shortDescription: "Survive against massive zombie hordes at night.",
    detailedDescription:
      "This intense plugin spawns large waves of zombies after sunset, forcing players to fortify their bases and fight for survival. Customizable difficulty settings make it perfect for hardcore survival servers.",
    image:
      "https://media.discordapp.net/attachments/1342492329273065593/1342493732796366878/Apocalypse_Zombie_Horde_Plugin.jpeg?ex=67b9d638&is=67b884b8&hm=d5f3756ab30cf07f49773e9e8639d5dbb328682a30834fe40b780f89b1200a95&=&format=webp",
  },
  {
    id: 8,
    name: "Viking Stronghold Build",
    price: 17.99,
    shortDescription: "A detailed Viking fortress with longhouses and docks.",
    detailedDescription:
      "Step into the world of Norse warriors with this handcrafted Viking stronghold featuring wooden longhouses, a grand hall, defensive towers, and a functional harbor. Perfect for historical builds and survival bases.",
    image:
      "https://media.discordapp.net/attachments/1342492329273065593/1342493731907174470/Viking_Stronghold_Build.jpeg?ex=67b9d638&is=67b884b8&hm=224ba3db44a59e4c6929bd4e42e95ccdf82ffd3ad28ac90b122e85c0ca0d939a&=&format=webp",
  },
  {
    id: 9,
    name: "Modern Luxury Mansion",
    price: 22.99,
    shortDescription:
      "A sleek modern mansion with a pool and stylish interiors.",
    detailedDescription:
      "Live in luxury with this high-end modern mansion, featuring glass walls, a stunning infinity pool, rooftop helipad, and a fully furnished interior. Perfect for roleplay servers or high-end creative builds.",
    image:
      "https://media.discordapp.net/attachments/1342492329273065593/1342493732301443082/Modern_Luxury_Mansion.jpeg?ex=67b9d638&is=67b884b8&hm=25ed5fdfe962a7745c02ea499bb48c503f0bd8957750848ffd1e9d5cf6423240&=&format=webp",
  },
  {
    id: 10,
    name: "Steampunk Airship Pack",
    price: 18.49,
    shortDescription: "A collection of custom-built steampunk airships.",
    detailedDescription:
      "Take to the skies with a fleet of beautifully detailed steampunk airships, featuring brass gears, steam engines, and Victorian-era aesthetics. Perfect for adventure maps and sky-based cities.",
    image:
      "https://media.discordapp.net/attachments/1342492329273065593/1342493733156819017/Steampunk_Airship_Pack.jpeg?ex=67b9d638&is=67b884b8&hm=53c69c6e2afdcd3a0cc603084f4d6cdc78a11e339047bec649b9df076530e749&=&format=webp",
  },
];
export { productDummy };

