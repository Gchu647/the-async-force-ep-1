/*
 Get a Person object from the SWAPI
fill in person4Name with the value of Person's name
fill in person4HomeWorld with the value of Person's homeworld (name)
 */

// Get the ids
let person4Name = document.getElementById("person4Name");
let person4Home = document.getElementById("person4HomeWorld");

// Create XHRs
let reqPerson4 = new XMLHttpRequest();
reqPerson4.addEventListener("load", getPerson4);
reqPerson4.open("GET", "https://swapi.co/api/people/4/")
reqPerson4.send();

let reqPlanet1 = new XMLHttpRequest();
reqPlanet1.addEventListener("load", getPlanet1);
reqPlanet1.open("GET", "https://swapi.co/api/planets/1/");
reqPlanet1.send();

// Stores the response of people 4 api
// All the tasks has to happen in this function or not
function getPerson4() {
  let person4obj = {};
  person4obj = JSON.parse(this.responseText);
  person4Name.innerHTML = person4obj["name"];
  // person4Home.innerHTML = a different api
}

function getPlanet1() {
  let planet1obj = {};
  planet1obj = JSON.parse(this.responseText);
  person4Home.innerHTML = planet1obj.name;
}