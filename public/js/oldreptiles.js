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

  let arrayOfAnimals = [frillNeckedLizard, blueTongued, taipanSnake, frilledDragon, stimsonPython, goanna];

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
      <p class="animal-p link"><a href="./reptiles.html">This animal belongs to the ${animal.group} group!</a></p>
    `
      )
      .hide()
      .fadeIn(500);
  };

  const resetWelcome = () => {
    $(".main-content").empty().append(`<p class="welcome">Welcome to the Reptile Hood my dude!</p>`);
    currentAnimal = null;
  };

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
  resetWelcome();
});
