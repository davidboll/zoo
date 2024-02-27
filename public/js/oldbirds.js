$(() => {
  console.log("connected");
  let currentAnimal = null;

  // Constructor by Davide
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

  // Creating single bird objects
  const cassowary = new Animal(
    "Cassowary",
    "20 years",
    "Plants matter like fruit, insects and small animals like mice and lizards",
    "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    "1.7 m",
    "44 kg",
      "Queensland",
      "/img/Cassowary.jpg",
      "/img/Cassowary.jpg",
            "bird"
  );
    
    const kookaburra = new Animal(
  "Kookaburra",
  "15 years",
  "Insects, small mammals, and reptiles",
  "Known as the 'laughing kookaburra,' these birds are famous for their distinctive vocalization that sounds like human laughter. They are carnivorous and often perch on high vantage points, waiting to swoop down on their prey. Kookaburras are social birds and are found in various habitats across Australia.",
  "45cm",
  "0.5kg",
  "Eastern Australia",
  "/img/kookaburra-small.jpeg",
  "/img/kookaburra-big.jpeg",
  "bird"
);

const lorikeet = new Animal(
  "Rainbow Lorikeet",
  "20 years",
  "Nectar, pollen, fruits, and seeds",
  "The Rainbow Lorikeet is a colorful and highly social bird. Their vibrant plumage features a spectrum of colors, and they are often found in flocks. Lorikeets have specialized brush-tipped tongues for feeding on nectar and pollen. They are common in coastal regions and urban areas of Australia.",
  "30cm",
  "0.15kg",
  "Various regions in Australia",
  "/img/lorikeet-small.jpeg",
  "/img/lorikeet-big.jpeg",
  "bird"
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
  "bird"
);


  const showAnimalInfo = (animal) => {
    $(".welcome").addClass("inactive");
    $(".main-content")
      .empty()
      .append(
        `<img class="animal-img" src="${animal.smallimg}">
         <h4>${animal.name}</h4>
         <p class="animal-p description">${animal.description}</p>
         <p class="animal-p menu">Favorite food: ${animal.food}</p>
         <p class="animal-p lifespan">This animal can live for ${animal.lifespan} years</p>
         <p class="animal-p length">This animal is usually ${animal.length}</p>
         <p class="animal-p weight">This animal usually weighs ${animal.weight}</p>
         <p class="animal-p location">This animal usually lives in ${animal.location}</p>
         <p class="animal-p link"><a href="#">This animal belongs to the ${animal.group} group!</a></p>`
      )
      .hide()
      .fadeIn(500);
  };

  const resetWelcome = () => {
    $(".main-content").empty().append(`<p class="welcome">Welcome to the Bird Heaven my dude!</p>`);
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
        </p>`
      );

      registerClick(index);
    });
  };

const arrayOfAnimals = [cassowary, kookaburra, lorikeet, emu];

  renderNames(arrayOfAnimals);
  resetWelcome();
});
