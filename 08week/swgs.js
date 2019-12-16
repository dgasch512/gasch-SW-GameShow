// let arrSW = [];
let millFal = [];
let luke = [];
let chewie = [];
let lilAS = [];
let newHope = [];
let r2 = [];

// let playerTurn = 'player1';
// window.onload(resetGame());

// arrays from APIs
const getFal = () => {
  fetch('https://swapi.co/api/starships/10/')
  .then(res => res.json())
  .then(jsonRes => millFal.push(jsonRes))
}
const getLuke = () => {
  fetch('https://swapi.co/api/people/1/')
  .then(res => res.json())
  .then(jsonRes => luke.push(jsonRes))
}
const getChewie = () => {
  fetch('https://swapi.co/api/people/13/')
  .then(res => res.json())
  .then(jsonRes => chewie.push(jsonRes))
}
const getAS = () => {
  fetch('https://swapi.co/api/people/11/')
  .then(res => res.json())
  .then(jsonRes => lilAS.push(jsonRes))
}
const getNH = () => {
  fetch('https://swapi.co/api/films/1/')
  .then(res => res.json())
  .then(jsonRes => newHope.push(jsonRes))
}
const getR2 = () => {
  fetch('https://swapi.co/api/people/3/')
  .then(res => res.json())
  .then(jsonRes => r2.push(jsonRes))
}

// getFal();
// getLuke();
// getChewie();
// getAS();
// getNH();
// getR2();



// GAME
// let player1 = {
//   name: 'player1',
//   score: 0,
//   // numIncorrect = 0,
// }
// let player2 = {
//   name: 'player2',
//   score: 0,
// }


const swags = function()
  {
    let player1 = {
      name: 'player1',
      score: 0,
      // numIncorrect = 0,
    }
    let player2 = {
      name: 'player2',
      score: 0,
    }
    let playerTurn = player2;
    let answer = [];

    // let questions = 
    // [
    //   {
    //     q: `What is the name of Han Solo's starship?`,
    //     a: `${millFal.name}`
    //   },
    //   {
    //     q: `What planet does Luke Skywalker call home?,`,
    //     a: `${luke.homeworld}`
    //   },
    //   {
    //     q: `What species is Chewbacca?`,
    //     a: `${chewie.species}`
    //   },
    //   {
    //     q: 'What character eventually turns into Darth Vader?',
    //     a: `${lilAS.name}`,
    //   },
    //   {
    //     q: "What is the name of the first movie in which Luke Skywalker meets Obi-Wan Kenobi?",
    //     a: `${newHope.title}`
    //   },
    //   {
    //     q: 'Which character would most likely star in a buddy comedy accross from C-3PO?',
    //     a: `${r2.name}`
    //   },
    //   {
    //     q: "Which character does Princess Leia first kiss?",
    //     a: `${luke.name}`
    //   },
    // ];

// begin = document.getElementsByClassName('new-game');
//     for (let k = 0; k < begin.length; k++) {
//     begin[k].addEventListener('click', swags);  
//     }

  // document.getElementById('new-game').onclick = swags.startGame;
  startGame = function() {
  

  player1.name = prompt('Player 1: What is your name?', '');
  document.getElementsByClassName('name-1').innerHTML = player1.name;
  player2.name = prompt('Player 2: What is your name?', '');  
  document.getElementsByClassName('name-2').innerHTML = player2.name;

  // swags.currentQuestion = 0;
  return nextQuestion();
  },
  
  
// document.getElementById('reset').onclick = swags.nextQuestion;
// allow move to next question
  nextQuestion = function() {
    let questions = 
    [
      {
        q: `What is the name of Han Solo's starship?`,
        a: `${millFal.name}`
      },
      {
        q: `What planet does Luke Skywalker call home?,`,
        a: `${luke.homeworld}`
      },
      {
        q: `What species is Chewbacca?`,
        a: `${chewie.species}`
      },
      {
        q: 'What character eventually turns into Darth Vader?',
        a: `${lilAS.name}`,
      },
      {
        q: "What is the name of the first movie in which Luke Skywalker meets Obi-Wan Kenobi?",
        a: `${newHope.title}`
      },
      {
        q: 'Which character would most likely star in a buddy comedy accross from C-3PO?',
        a: `${r2.name}`
      },
      {
        q: "Which character does Princess Leia first kiss?",
        a: `${luke.name}`
      },
    ];
    if (playerTurn === player2) {
      playerTurn = player1;
    } else {
      playerTurn = player2;
    };
    for (let i = 0; i < questions.length; i++) {
      if (questions[i]) {
        // questions[i] = questions[i++]; 
        let currentQuestion = questions[i].q;
        answer.pop();
        answer.push(questions[i].a)
        return questionReset(currentQuestion)
      } else {
        return checkForWin()
      }
    }
  },

  questionReset = function(question){
    document.getElementById('question').innerHTML = `Question: ${question}`;
    document.getElementById('answer').innerHTML = 
    ` Answer: <input type="text" class="input">
    <br>
    <input type="submit" value="Submit">`;
    return
  }
// player chooses answer and submits

  // guessResult = document.getElementById("answer").addEventListener("submit", playerGuess); 
  playerGuess = function() {
    let guess = document.getElementById('answer').value;
    if(guess === answer) {
      alert('The Force is strong with you, padawan')
      // document.getElementById("answer").color = 'green';
      // document.getElementById("board").innerHTML = 'The Force is strong with you, padawan';
    } else {
      alert('The Force eludes you')
      // document.getElementById("answer").color = 'green';
      // document.getElementById("board").innerHTML = 'The Force eludes you'; 
    }
     nextQuestion()
  };
  checkForWin = function() {
    if (player1.score > player2.score) {
      alert(`${player1.name} is the real jedi here!`)
    } else {
      alert(`${player2.name} is the real jedi here!`)
    }
  };
  reset = document.getElementsByClassName('reset');
  resetGame = function() {
    
    player1.score = 0;
    player2.score = 0;
    player1.name = 'player1';
    player2.name = 'player2';
    for (j = 0; j < reset.length; reset++) {
    reset[j].addEventListener('click', resetGame);
    }
    return questionReset()
   }
   
   
   
  }
  window.onload = swags();
  window.onload = getFal();
  window.onload = getLuke();
  window.onload = getChewie();
  window.onload = getAS();
  window.onload = getNH();
  window.onload = getR2();
  window.onload = swags();
// check if correct
// switch players
  
// same thing

// let guessResult = function() {
    
//   // increment to next question set
//   trivia.currentSet++;
  
//   // remove the options and results
//   $('.option').remove();
//   $('#results h3').remove();
  
  // begin next question


