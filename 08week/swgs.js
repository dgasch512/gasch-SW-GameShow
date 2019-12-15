// let arrSW = [];
let swPeople = [];
let swFilms = [];
let swStarships = [];
let swSpecies = [];
let swPlanets = [];

let playerTurn = 'player1';
window.onload(resetGame());
window.onload(getFilms());
window.onload(getStarships());
window.onload(getSpecies());
window.onload(getPlanets());

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

// arrays from APIs



// GAME
let player1 = {
  name: 'player1',
  numCorrect: 0,
  // numIncorrect = 0,
}
let player2 = {
  name: 'player2',
  numCorrect: 0,
}



function resetGame() {
 player1.numCorrect = 0;
 player2.numCorrect = 0;
 player1.name = 'player1';
 player2.name = 'player2';
}


const swags = 
  {

questions = {
  q1: `What is the name of Han Solo's starship?`,
  q2: `What planet does Luke Skywalker call home?`,
  q3: `What species is Chewbacca?`,
  q4: 'What character eventually turns into Darth Vader?',
  q5: "What is the name of the first movie in which Luke Skywalker meets Obi-Wan Kenobi?",
  q6: 'Which character would most likely star in a buddy comedy accross from C-3PO?',
  q7: "Which character does Princess Leia first kiss?"
},

answers = {
  q1: `${swPeople[14].starship}`,
  q2: `${swPeople[1].planet}`,
  q3: `${swPeople[13].species}`,
  q4: `${swPeople[11].name}`,
  q5: `${swFilm[1].name}`,
  q6: `${swPeople[3].name}`,
  q7: `${swPeople[1].name}`
},


  startGame = function() {
  player1.name = prompt("Player 1: What is your name?")
  player2.name = prompt("Player 2: What is your name?")  

  swags.currentSet = 0;
  swags.nextQuestion();
  },
  
// populate a question to be answered
  nextQuestion = function() {
    let questionContent = Object.values(trivia.questions[0]);
    triviaQuestions++
  },
// player chooses answer and submits
  if(guessResult === answer[i]) {
    document.getElementByClass("answer").color = 'green';
    
  }
// check if correct
// switch players
  if (playerTurn === 'player1') {
    playerTurn = 'player2';
  }
// same thing

let guessResult = function() {
    
  // increment to next question set
  trivia.currentSet++;
  
  // remove the options and results
  $('.option').remove();
  $('#results h3').remove();
  
  // begin next question
  trivia.nextQuestion();
   
}
}}