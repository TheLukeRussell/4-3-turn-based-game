const logo = document.querySelector('.mk-logo');
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  btn.style.display = 'none';
  logo.style.width = '15%';
  logo.style.left = '41.8%';
}


// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



class Hero {
  constructor(options) {
    options = options || {};

    
    this.damage = options.damage;
    this.name = options.name;
    this.move = options.move;
    Hero.health = 100;
  }
}

class Enemy {
  constructor(options) {
    options = options || {};

    this.damage = options.damage;
    this.name = options.name;
    this.move = options.move;
    Enemy.health = 100;
  }
}
const attack = () => {
  let fightButton = document.querySelector(''); // identify fight button
  let restart = document.querySelector(''); // identify reset button <button id='' onclick="restart()" hidden="true">FIGHT</button>
  let fightMessage = document.querySelector('') // identifys whos turn it is or gives a move message
  let heroAttack = Math.floor(Math.random() * 20); // <button id='' onclick="attack()">FIGHT</button> for fight button to make it work
  Enemy.health = Enemy.health - heroAttack; //subtracts player attack from opponent health
  // insert code that makes health bar change width when opponent loses health
  // console.log(heroAttack)

if (gameFinish(Enemy.health)) { //shows win message 
    endGame('Hero won fight');
    return;
}

  fightButton.disabled = true; //disables fight button so user cant button mash
  fightMessage.textContent = "Opponent is about to use a move"


  setTimeout(() => {
    let enemyAttack = Math.floor(Math.random() * 20);
    Hero.health = Hero.health - enemyAttack;
    // insert code that makes health bar change width when opponent loses health

    if (gameFinish(Hero.health)) { //shows loss message
      endGame('Opponent won fight');
    return
    }

    fightButton.disabled = false; //disables fight button when opponent attacks
  }, 500);
}

const endGame = (message) => {
  document.querySelector('fightmessage').textContent = message
  document.querySelector('fightButton').hidden = true; // identify fight button
  document.querySelector('restart').hidden = false; //identify restart button
}

const gameFinish = (health) => { //gameFinishes when any health is 0 or below
  return health <= 0;
}

const restartGame = () => {
  let attackButton = document.querySelector('fightbutton')
  Hero.health = 100;
  Enemy.health = 100;
  document.querySelector('fightmessage').textContent = ''
  attackButton.disabled = false;
  attackButton.hidden = false;
  document.querySelector('restart').hidden = true; 
}



let scorpian = new Hero({
  name: 'Scorpian',
  move: 'sting',
  health: 100,
  damage: 20,
  image: '/images/yellow-guy-resize.png'
});

let subZero = new Hero({
  name: 'Sub Zero',
  move: 'frostbite',
  health: 100,
  damage: 20,

  image: '/images/sub-zero.png'
});

let freddy = new Enemy({
  name: 'Freddy',
  move: 'nightmare',
  health: 100,
  damage: 20,

  image: '/images/freddy.png'
})

let ermac = new Enemy({
  name: 'Ermac',
  move: 'crush',
  health: 100,
  damage: 20,

  image: '/images/green-guy.png'
})

let heros = [scorpian, subZero];
let enemies = [freddy, ermac];