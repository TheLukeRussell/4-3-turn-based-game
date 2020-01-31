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
}
document.querySelector('audio').volume = .1; // lowers volume of main audio

// const fightPage = document.querySelector('.fight-page')
// const choseFighter = document.getElementByClassName('.pick-me');

// choseFighter.onclick = function() {
//   modal.style.display = 'none';
//   logo.style.display = 'none';
//   btn.style.display = 'none';
//   fightPage.style.display = 'flex';
// }
const fightPage = document.querySelector('.fight-page');

let players = document.querySelectorAll('.pick-me');

players.forEach((player) => {
  player.addEventListener('click', function () {
    modal.style.display = 'none';
    logo.style.display = 'none';
    btn.style.display = 'none';
    fightPage.style.display = 'flex';
  });
});

class Hero {
  constructor(options) {
    options = options || {};

    this.name = options.name;
    this.move = options.move;
  }
}

class Enemy {
  constructor(options) {
    options = options || {};

    this.name = options.name;
    this.move = options.move;
  }
}
let enemyHealth = 100;
let heroHealth = 100;

const attack = () => {
  let fightButton = document.querySelector('#attack-btn'); // identify fight button
  let restart = document.querySelector('#restart'); // identify reset button <button id='' onclick="restart()" hidden="true">FIGHT</button>
  let fightMessage = document.querySelector('#fight-message') // identifys whos turn it is or gives a move message
  let heroAttack = Math.floor(Math.random() * 20); // <button id='' onclick="attack()">FIGHT</button> for fight button to make it work
  enemyHealth = enemyHealth - heroAttack; //subtracts player attack from opponent health
  $('.health-right').css("width", enemyHealth + "%");
  // console.log(heroAttack)

  fightButton.disabled = true; //disables fight button so user cant button mash

  if (heroHealth <= 0) {
    fightMessage.textContent = "You Lose"
    endGame()
  }
  if (enemyHealth <= 0) {
    fightMessage.textContent = "You Win!"
    endGame()
  }

  setTimeout(() => {
    let enemyAttack = Math.floor(Math.random() * 20);
    heroHealth = heroHealth - enemyAttack;
    $('.health-left').css("width", heroHealth + "%");
    // console.log(enemyAttack)

    fightButton.disabled = false; //disables fight button when opponent attacks
  }, 100);
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
  document.querySelector('#fight-message').textContent = ''
  attackButton.disabled = false;
  attackButton.hidden = false;
  document.querySelector('.health-left').style.width = '100%';
  document.querySelector('.health-right').style.width = '100%';
  document.querySelector('#fatality').hidden = true;
  document.querySelector('#restart').hidden = true;
}

let scorpian = new Hero({
  name: 'Scorpian',
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

var characters = ['scorpian', 'subZero', 'freddy', 'ermac'];