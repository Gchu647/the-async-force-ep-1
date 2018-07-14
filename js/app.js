/*
Get a list of all the films from the SWAPI
fill in filmList with a new <li> element for each film
fill in each film's filmTitle with the title of the film
create a new <li> in this film's filmPlanets for each planet that appeared in this film
fill in each planetTitle with the name of the planet
 */

// Get the ids
let person4Name = document.getElementById("person4Name");
let person4Home = document.getElementById("person4HomeWorld");
let person14Name = document.getElementById("person14Name");
let person14Species = document.getElementById("person14Species");
let filmList = document.getElementById("filmList");

// Create XHRs
let reqPerson4 = new XMLHttpRequest();
reqPerson4.addEventListener("load", getPerson4);
reqPerson4.open("GET", "https://swapi.co/api/people/4/");
reqPerson4.send();

let reqPlanet1 = new XMLHttpRequest();
reqPlanet1.addEventListener("load", getPlanet1);
reqPlanet1.open("GET", "https://swapi.co/api/planets/1/");
reqPlanet1.send();

let reqPerson14 = new XMLHttpRequest();
reqPerson14.addEventListener("load", getPerson14);
reqPerson14.open("GET", "https://swapi.co/api/people/14/");
reqPerson14.send();

let reqSpecies1 = new XMLHttpRequest();
reqSpecies1.addEventListener("load", getSpecie1);
reqSpecies1.open("GET", "https://swapi.co/api/species/1/");
reqSpecies1.send();

let reqFilms = new XMLHttpRequest();
reqFilms.addEventListener("load", getFilms);
reqFilms.open("GET", "https://swapi.co/api/films/");
reqFilms.send();

// Stores and uses person 4 info
// All the tasks has to happen in this function or not
function getPerson4() {
  let person4obj = {};
  person4obj = JSON.parse(this.responseText);
  person4Name.innerHTML = person4obj["name"];
}

// Stores and uses of planet 1 info
function getPlanet1() {
  let planet1obj = {};
  planet1obj = JSON.parse(this.responseText);
  person4Home.innerHTML = planet1obj.name;
}

function getPerson14() {
  let person14obj = {};
  person14obj = JSON.parse(this.responseText);
  person14Name.innerHTML = person14obj["name"];
}

function getSpecie1() {
  let specie1obj = {};
  specie1obj = JSON.parse(this.responseText);
  person14Species.innerHTML = specie1obj["name"];
}

function getFilms() {
  let filmsArr = [];
  filmsArr = JSON.parse(this.responseText)["results"];
  console.log(filmsArr);

  for (let i = 0; i < filmsArr.length; i++) {
    // Create a list of film <li> in the loop
    let film = document.createElement("li");
    film.className = "film";
    filmList.appendChild(film);

    // Add a title to each film in the loop
    let filmTitle = document.createElement("h2");
    filmTitle.className = "filmTitle";
    filmTitle.innerHTML = filmsArr[i]["title"];
    // console.log("Film name: ", filmsArr[i]["title"]);
    
    // Add a planets headline to each film in the loop
    let planetHeader = document.createElement("h3");
    planetHeader.innerHTML = "Planets";


    // Planets of each film
    for (let j = 0; j < filmsArr[i]["planets"].length; j++) {
      //Get the link of refered to a planet
      let planetLink = filmsArr[i]["planets"][j];
      
      //Send an XHR to the link
      let reqPlanet = new XMLHttpRequest();
      reqPlanet.addEventListener("load", getPlanet);
      reqPlanet.open("GET", filmsArr[i]["planets"][j]);
      reqPlanet.send();

      // Create three more appends, might have to move this into getPlanet()
      let filmPlanets = document.createElement("ul");
      filmPlanets.className = "filmPlanets";
      film.appendChild(filmPlanets);
    }

    // get planet name and attach it to the planetName h4
    function getPlanet() {
      let planetName = JSON.parse(this.responseText)["name"]; // Get planet name
      console.log("Film name: ", filmsArr[i]["title"]);
      console.log(planetName);
    }

    film.appendChild(filmTitle);
    film.appendChild(planetHeader);
    filmList.appendChild(film);
  }
}