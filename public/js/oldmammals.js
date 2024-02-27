$(() => {
  console.log("connected");
  let currentAnimal = null;

  class Animal {
    constructor(name, lifespan, food, description, length, weight, found) {
      this.name = name;
      this.lifespan = lifespan;
      this.food = food;
      this.description = description;
      this.length = length;
      this.weight = weight;
      this.found = found;
    }
  }

  const Wallabies = new Animal(
    'Wallabies',
    '9 years',
    'Mammals',
    'Herbivore',
    'The yellow-footed rock wallaby is a marsupial...',
    '12 to 41 inches; tail: 10 to 29 inches',
    '4 to 53 pounds',
    'in mountain habitats in isolated portions of Australia.'
  );

  const Tasmanian_Devil = new Animal(
    'Tasmanian-Devil',
    'Up to 5 years',
    'Mammals',
    'Carnivore',
    "If you watch cartoons, the first thing you think of...",
    '20 to 31 inches',
    '9 to 26 pounds',
    'south of Australia.'
  );

  const Koala = new Animal(
    'Koala',
    '20 years',
    'Mammals',
    'Herbivore',
    'The koala is an iconic Australian animal. Often called...',
    '23.5 to 33.5 inches',
    '20 pounds',
    'the eucalyptus forests of southeastern and eastern Australia'
  );

  const arrayOfAnimals = [Wallabies, Tasmanian_Devil, Koala];

  const showAnimalInfo = (animal) => {
    $(".welcome").addClass("inactive");
    $(".main-content")
      .empty()
      .append(`
        <img src="./img/${animal.name}.jpg" class="animal-img" alt="">
        <h3>Name: ${animal.name}</h3>
        <p>Average life span: ${animal.lifespan}</p>
        <p>Type: ${animal.group}</p>
        <p>Diet: ${animal.food}</p>
        <p>Description: ${animal.description}</p>
        <p>Size: ${animal.length}</p>
        <p>Weight: ${animal.weight}</p>
        <p>Found: ${animal.found}</p>
      `)
      .hide()
      .fadeIn(500);
  };

  const resetWelcome = () => {
    $(".main-content").empty().append(`<p class="welcome">Welcome to the Mammals Section!</p>`);
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

  const registerClick = (animal) => {
    $(`.sidebar .animal.${animal.name}`).on('click', () => handleAnimalClick(animal));
  };

  const renderNames = (animals) => {
    $(".sidebar").empty();

    animals.forEach((animal) => {
      $(".sidebar").append(`
      <p class="animal ${animal.name}">
        ${animal.name}
      </p>
    `);

      registerClick(animal);
    });
  };

  renderNames(arrayOfAnimals);
  resetWelcome();
});
