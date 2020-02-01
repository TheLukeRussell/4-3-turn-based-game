const charScorpian = document.querySelector('#scorpian')
const charSubZero = document.querySelector('#subZero')
const charFreddy = document.querySelector('#freddy')
const charErmac = document.querySelector('#ermac')

const logo = document.querySelector('.mk-logo');
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  btn.style.display = 'none';
  logo.style.width = '15%';
  logo.style.left = '41.8%';
  document.querySelector('#play').play(); //plays roar when selecting pick fighter button
}
document.querySelector('audio').volume = .05; // lowers volume of main audio
document.querySelector('#play').volume = .2;
document.querySelector('#char-hover').volume = .2
const fightPage = document.querySelector('.fight-page');
const enemy = document.querySelector('.enemy'); //selects the computer fighter
const fighter = document.querySelector('.fighter'); //selects the user fighter
const playerName = document.querySelector('.play-name'); //selects name above character
const comName = document.querySelector('.com-name'); //selects name above computer
let players = document.querySelectorAll('.pick-me');

const user = (x) => {
  fighter.src = x.image
  playerName.textContent = x.name
}
const computer = (x) => {
  enemy.src = x.image
  comName.textContent = x.name
}
players.forEach((player) => {
  player.addEventListener('mouseenter', function () {
    document.querySelector('#char-hover').play(); //plays sound on character hover
  });
});

players.forEach((player) => {
  player.addEventListener('click', function () {
    modal.style.display = 'none';

    logo.style.display = 'none';
    btn.style.display = 'none';
    fightPage.style.display = 'flex';
    document.querySelector('#char-play').play(); //audio when you choose character

    let randomNumber = Math.floor(Math.random() * 4) + 1;

    if (player.value == 1) {
      user(scorpion)
    }
    if (player.value == 2) {
      user(subZero)
    }
    if (player.value == 3) {
      user(freddy)
    }
    if (player.value == 4) {
      user(ermac)
    }
    if (player.value == 5) {
      user(quanChi)
    }
    if (player.value == 6) {
      user(kitana)
    }
    

    if (randomNumber == 1) {
      computer(scorpion)
    }
    if (randomNumber == 2) {
      computer(subZero)
    }
    if (randomNumber == 3) {
      computer(freddy)
    }
    if (randomNumber == 4) {
      computer(ermac)
    }
    if (randomNumber == 5) {
      computer(quanChi)
    }
    if (randomNumber == 6) {
      computer(kitana)
    }

  });
});

class Hero {
  constructor(options) {
    options = options || {};

    this.name = options.name;
    this.move = options.move;
    this.image = options.image
  }
}

class Enemy {
  constructor(options) {
    options = options || {};

    this.name = options.name;
    this.move = options.move;
    this.image = options.image;
  }
}
let enemyHealth = 100;
let heroHealth = 100;

const attack = () => {
  let opponentMove = document.querySelector('#opponent-move')
  let fightButton = document.querySelector('#attack-btn'); // identify fight button
  let restart = document.querySelector('#restart'); // identify reset button <button id='' onclick="restart()" hidden="true">FIGHT</button>
  let fightMessage = document.querySelector('#fight-message') // identifys whos turn it is or gives a move message
  let heroAttack = Math.floor(Math.random() * 20); // <button id='' onclick="attack()">FIGHT</button> for fight button to make it work
  enemyHealth = enemyHealth - heroAttack; //subtracts player attack from opponent health
  $('.health-right').css("width", enemyHealth + "%");
  // console.log(heroAttack)
  document.querySelector('#user-attack').play();
  opponentMove.hidden = false;
  fightButton.disabled = true; //disables fight button so user cant button mash

  if (heroHealth <= 0) {
    fightMessage.textContent = 'You Win!'
    endGame()
  }
  if (enemyHealth <= 0) {
    fightMessage.textContent = 'You Lose'
    endGame()
  }

  setTimeout(() => {
    let enemyAttack = Math.floor(Math.random() * 20);
    heroHealth = heroHealth - enemyAttack;
    $('.health-left').css("width", heroHealth + "%");
    // console.log(enemyAttack)
    fightButton.disabled = false; //disables fight button when opponent attacks
    opponentMove.hidden = true;
    document.querySelector('#opp-attack').play();
  }, 1500);
}

let audio = new Audio();
audio.src = "/music/fatality.mp3";

const endGame = () => {
  document.querySelector('#fatality').hidden = false;
  document.querySelector('#attack-btn').hidden = true; // identify fight button
  document.querySelector('#restart').hidden = false;
  audio.play();
}

const restartGame = () => {
  let attackButton = document.querySelector('#attack-btn')
  enemyHealth = 100;
  heroHealth = 100;
  document.querySelector('#restart-play').play();
  document.querySelector('#fight-message').textContent = ''
  attackButton.disabled = false;
  attackButton.hidden = false;
  document.querySelector('.health-left').style.width = '100%';
  document.querySelector('.health-right').style.width = '100%';
  document.querySelector('#fatality').hidden = true;
  document.querySelector('#restart').hidden = true;
}

let scorpion = new Hero({
  name: 'Scorpion',
  move: 'sting',
  image: '/images/yellow-guy-resize.png',
  value: 1
});

let subZero = new Hero({
  name: 'Sub Zero',
  move: 'frostbite',
  image: '/images/sub-zero.png',
  value: 2
});

let freddy = new Enemy({
  name: 'Freddy',
  move: 'nightmare',
  image: '/images/freddy.png',
  value: 3
});

let ermac = new Enemy({
  name: 'Ermac',
  move: 'crush',
  image: '/images/green-guy.png',
  value: 4
});

let quanChi = new Enemy({
  name: 'Quan Chi',
  move: 'glowing-hands',
  image: '/images/quan-chi.png',
  value: 5
})

let kitana = new Hero({
  name: 'Kitana Rain',
  move: 'whiplash',
  image: '/images/kitana.png',
  value: 6
})
// var characters = ['scorpian', 'subZero', 'freddy', 'ermac'];