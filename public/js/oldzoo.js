$(() => {
  console.log("connected");

  let currentAnimal = null;

  //constructor by Edwin
  class Animal {
    constructor(name, lifespan, food, description, length, weight, location, smallimg, bigimg, group) {
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
    "reptile"
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
    "reptile"
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
    "reptile"
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
    "reptile"
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
    "reptile"
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
    "reptile"
  );


  const cassowary = new Animal(
    "Cassowary",
    "20 years",
    "bird",
    "Plants matter like fruit, insects and small animals like mice amd lizards",
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    "1.7 m",
    "44 kg",
    "./img/Cassowary.jpg",
    "./img/Cassowary.jpg",
    "bird"
  );

  const echidna = new Animal(
    "Echidna",
    "50 years",
    "mammals",
    "insects such as ants and termites, beetle larvae and worms",
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    "76 cm",
    "10 kg",
    "./img/Echidna.jpg",
    "./img/Echidna.jpg",
    "mammals"
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
    "mammals"
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
    "Mammals"
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
    "mammals"
  );

  let arrayOfAnimals = [frillNeckedLizard, blueTongued, taipanSnake, frilledDragon, stimsonPython, goanna, cassowary, echidna, wallabies, tasmanian_Devil, koala];

  const showAnimalInfo = (animal) => {
    $(".welcome").addClass("inactive");
    $(".main-content")
      .empty()
      .append(
        `
        <img class="animal-img" src="${animal.smallimg}">
      <h4>${animal.name}</h4>
      <p class="animal-p description">${animal.description}</p>
      <p class="animal-p menu">Favorite food: ${animal.food}</p>
      <p class="animal-p lifespan">This animal can live for ${animal.lifespan} years</p>
      <p class="animal-p length">This animal is usually ${animal.length}</p>
      <p class="animal-p weight">This animal usually weighs ${animal.weight}</p>
      <p class="animal-p location">This animal usually lives in ${animal.location}</p>
      <p class="animal-p link"><a href="./${animal.group}.html">This animal belongs to the ${animal.group} group!</a></p>
    `
      )
      .hide()
      .fadeIn(500);
  };

  const resetWelcome = () => {
    $(".main-content").empty().append(`<p class="welcome">Welcome to Changemaker´s Australian Animal Portal!</p>`);
    currentAnimal = null; // Återställ den aktuella animalen
  };

  // Hantera klick på animal
  const handleAnimalClick = (animal) => {
    if (currentAnimal === animal) {
      resetWelcome();
    } else {
      showAnimalInfo(animal);
      currentAnimal = animal;
    }
  };

  const registerClick = (index) => {
    $(`.sidebar .animal.${index}`).on("click", () => handleAnimalClick(arrayOfAnimals[index]));
  };

  const renderNames = (animal) => {
    $(".sidebar").empty();

    animal.forEach((animal, index) => {
      $(".sidebar").append(`
      <p class="animal ${index}">
        ${animal.name}
      </p>
    `);

      registerClick(index);
    });
  };
  renderNames(arrayOfAnimals);
});
