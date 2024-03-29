class Animal {
    constructor(name, lifespan, food, description, length, weight, location, smallimg, bigimg, group, index) {
      this.name = name;
      this.lifespan = lifespan;
      this.food = food;
      this.description = description;
      this.length = length;
      this.weight = weight;
      this.location = location;
      this.smallimg = smallimg;
      this.bigimg = bigimg;
      this.group = group;
      this.index = index; 
    }
  }
  const frillNeckedLizard = new Animal(
    "Frill-Necked Lizard",
    "20 years",
    "Small insects and spiders",
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    "90cm",
    "1kg",
    "Northern Australia",
    "./img/frilled-lizard-small.jpeg",
    "./img/frilled-lizard-big.jpeg",
    "reptiles",
    "1"
  );

  const blueTongued = new Animal(
    "Blue-tongued Skink",
    "15 years",
    "Insects, fruits, and small vertebrates",
    "The Blue-tongued Skink is known for its distinctive blue tongue, which it uses as a warning signal. When threatened, it may hiss, flatten its body, and display its colorful tongue to deter predators.",
    "50cm",
    "0.5kg",
    "Eastern Australia",
    "./img/blue-tongue-small.jpeg",
    "./img/blue-thong-big.jpeg",
    "reptiles",
    "2"
  );

  const taipanSnake = new Animal(
    "Taipan Snake",
    "15 years",
    "Small mammals and birds",
    "The Taipan is one of the world's most venomous snakes. Despite its potent venom, it is generally shy and prefers to avoid human encounters. It is known for its striking appearance and deadly bite.",
    "200cm",
    "3kg",
    "Central Australia",
    "./img/taipan-snake-small.jpeg",
    "./img/taipan-snake-big.jpeg",
    "reptiles",
    "3"
  );

  const frilledDragon = new Animal(
    "Frilled Dragon",
    "15 years",
    "Insects and small vertebrates",
    "The Frilled Dragon, similar to the Frill-necked Lizard, has a frill that it displays when threatened. It also has a unique way of moving, using its hind legs and tail to glide from tree to tree in search of prey.",
    "70cm",
    "0.7kg",
    "Northern Australia",
    "./img/frilled-dragon-small.jpeg",
    "./img/frilled-dragon-big.jpeg",
    "reptiles",
    "4"
  );

  const stimsonPython = new Animal(
    "Stimson's Python",
    "20 years",
    "Small mammals and birds",
    "Stimson's Python is a non-venomous snake with a calm disposition. It is known for its attractive coloration and is often kept as a pet. It constricts its prey before consuming it.",
    "120cm",
    "2kg",
    "Southern Australia",
    "./img/stimson-small.jpeg",
    "./img/stimson-big.jpeg",
    "reptiles",
    "5"
  );

  const goanna = new Animal(
    "Goanna",
    "25 years",
    "Birds, eggs, and small mammals",
    "The Goanna is a large monitor lizard found across Australia. It is an excellent climber and forager, using its keen sense of smell to locate food. Some species of Goannas can reach impressive sizes.",
    "150cm",
    "5kg",
    "Various regions in Australia",
    "./img/goana-small.jpeg",
    "./img/goanna-big.jpeg",
    "reptiles",
    "6"
  );


  const cassowary = new Animal(
    "Cassowary",
    "20 years",
    "Plants matter like fruit, insects and small animals like mice amd lizards",
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    "1.7 m",
    "44 kg",
    "./img/Cassowary.jpg",
    "./img/Cassowary.jpg",
    "birds",
    "7"

  );

  const echidna = new Animal(
    "Echidna",
    "50 years",
    "insects such as ants and termites, beetle larvae and worms",
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    "76 cm",
    "10 kg",
    "./img/Echidna.jpg",
    "./img/Echidna.jpg",
    "mammals",
    "8"
  );
  const wallabies = new Animal(
    "Wallabies",
    "9 years",
    "Herbivore",
    "The yellow-footed rock wallaby is a marsupial—a pouched mammal—belonging to the same family as the kangaroo. This rock wallaby lives in mountain habitats in isolated portions of Australia. The yellow-footed rock wallaby moves easily around mountaintops, jumping as far as 13 feet (four meters) from rock to rock and even scaling cliffs and climbing trees. In the hot Australian summers, the wallaby is active only at night, while in the winter it can sometimes be seen sunbathing on the rocks.",
    "12 to 41 inches; tail: 10 to 29 inches",
    "4 to 53 pounds",
    "mountain habitats in isolated portions of Australia.",
    "./img/Wallabies.jpg",
    "./img/Wallabies.jpg",
    "mammals",
    "9"
  );
  const tasmanian_Devil = new Animal(
    "Tasmanian-Devil",
    "Up to 5 years",
    "Carnivore",
    "If you watch cartoons, the first thing you think of when you hear the name Tasmanian devil is probably Taz, the whirling, maniacal, always hungry, angry cartoon character. But Tasmanian devils are real and are feisty like the cartoon Taz! Tasmanian devils are the largest carnivorous (meat-eating) marsupials in the world. Tasmanian devils live in Tasmania, a large island just south of Australia. In fact, Tasmania is the only place where they are found in the wild. Adult Tasmanian devils are usually about the size of a small dog. They have coarse brown or black fur and a pudgy appearance that makes them look like baby bears. But don't let their cuteness fool you. They have sharp teeth and strong, muscular jaws that can deliver one of the most powerful bites of any mammal on Earth.",
    "20 to 31 inches",
    "9 to 26pounds",
    'south of Australia.',
    "./img/Tasmanian-Devil.jpg",
    "./img/Tasmanian-Devil.jpg",
    "mammals",
    "10"
  );
  const koala = new Animal(
    "Koala",
    "20 years",
    "Herbivore",
    "The koala is an iconic Australian animal. Often called the koala “bear,” this tree-climbing animal is a marsupial—a mammal with a pouch for the development of offspring.Though koalas look fuzzy, their hair is more like the coarse wool of a sheep. They have two opposing thumbs on their hands, and both their feet and hands have rough pads and claws to grab onto branches. They have two toes, fused together, on their feet, which they use to comb their fur.",
    "23.5 to 33.5 inches",
    " 20 pounds",
    "the eucalyptus forests of southeastern and eastern Australia",
    "./img/koala.jpg",
    "./img/koala.jpg",
    "mammals",
    "11"
  );
        const kookaburra = new Animal(
  "Kookaburra",
  "15 years",
  "Insects, small mammals, and reptiless",
  "Known as the 'laughing kookaburra,' these birdss are famous for their distinctive vocalization that sounds like human laughter. They are carnivorous and often perch on high vantage points, waiting to swoop down on their prey. Kookaburras are social birds and are found in various habitats across Australia.",
  "45cm",
  "0.5kg",
  "Eastern Australia",
  "/img/kookaburra-small.jpeg",
  "/img/kookaburra-big.jpeg",
          "birds",
  "12"
);
    const lorikeet = new Animal(
  "Rainbow Lorikeet",
  "20 years",
  "Nectar, pollen, fruits, and seeds",
  "The Rainbow Lorikeet is a colorful and highly social birds. Their vibrant plumage features a spectrum of colors, and they are often found in flocks. Lorikeets have specialized brush-tipped tongues for feeding on nectar and pollen. They are common in coastal regions and urban areas of Australia.",
  "30cm",
  "0.15kg",
  "Various regions in Australia",
  "/img/lorikeet-small.jpeg",
  "/img/lorikeet-big.jpeg",
      "birds",
  "13"
);

const emu = new Animal(
  "Emu",
  "20 years",
  "Plants, insects, small vertebrates",
  "The Emu is the world's second-largest bird, known for its flightless nature. Emus have strong, long legs and are excellent runners. They are found in various habitats, including forests, savannas, and deserts. Emus are essential to Australian culture, often depicted in indigenous art and mythology.",
  "1.9m",
  "36kg",
  "Throughout Australia",
  "/img/emu-small.jpeg",
  "/img/emu-big.jpeg",
  "birds",
  "14"
);

let arrayOfAnimals = [frillNeckedLizard, blueTongued, taipanSnake, frilledDragon, stimsonPython, goanna, cassowary, echidna, wallabies, tasmanian_Devil, koala, kookaburra, lorikeet, emu];
  
export { Animal, arrayOfAnimals };