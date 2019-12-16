
let swPeople = [];
let swFilms = [];
let swStarships = [];
let swVehicles = [];
let swSpecies = [];
let swPlanets = [];

getPeople = () => {
  fetch('https://swapi.co/api/people')
  .then(res => res.json())
  .then(people => swPeople = people)
}
getFilms = () => {
  fetch('https://swapi.co/api/films')
  .then(res => res.json())
  .then(films => swFilms = films)
}
getStarships = () => {
  fetch('https://swapi.co/api/starships')
  .then(res => res.json())
  .then(starships => swStarships = starships)
}
getVehicles = () => {
  fetch('https://swapi.co/api/vehicles')
  .then(res => res.json())
  .then(vehicles => swVehicles = vehicles)
}
getSpecies = () => {
  fetch('https://swapi.co/api/species')
  .then(res => res.json())
  .then(species => swSpecies = species)
}
getPlanets = () => {
  fetch('https://swapi.co/api/planets')
  .then(res => res.json())
  .then(planets => swPlanets = planets)
}

function generateAnswers(answer, allPossible) {
  let wrongAnswers = allPossoble.filter(possible => country.alpha3Code !== answer.alpha3Code); 

  const countOfAnswers = 4;
  const positionOfCorrectAnswer = Math.floor(Math.random() * (countOfAnswers + 1));
  const answers = []; 
  for(let i=0; i< countOfAnswers; i++) {
     if (i === positionOfCorrectAnswer) {
        answers.push(answer);
     } else {
       let randomAnswer = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]; 
        wrongAnswers = wrongAnswers.filter(country => country.alpha3Code !== randomAnswer.alpha3Code); 
        answers.push({ name: randomAnswer.name, alpha3Code: randomAnswer.alpha3Code } );
     } 
  }
  return answers;
};