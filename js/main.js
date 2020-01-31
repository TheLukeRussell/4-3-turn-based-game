
const logo = document.querySelector('.mk-logo');
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
btn.onclick = function() {
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

    this.name = options.name;
    this.move = options.move;
    this.health = options.health;
}
}

class Enemy{
  constructor(options) {
    options = options || {};

    this.name = options.name;
    this.move = options.move;
    this.health = options.health;
}
}
const attack = () => {
  let fightButton = document.querySelector(''); //identify fight button
  let heroAttack = Math.floor(Math.random() * 15); // <button id='' onclick="attack()">FIGHT</button> for fight button to make it work
  Enemy.health = Enemy.health - heroAttack //subtracts player attack from opponent health
  // insert code that makes health bar change width when opponent loses health
  // console.log(heroAttack)

  fightButton.disabled = true; //disables fight button so user cant button mash
}


let scorpian = new Hero({
  name: 'Scorpian',
  move: 'sting',
  health: 100,

  image: '/images/yellow-guy-resize.png'
});

let subZero = new Hero({
  name: 'Sub Zero',
  move: 'frostbite',
  health: 100,

  image: '/images/sub-zero.png'
});

let freddy = new Enemy({
  name: 'Freddy',
  move: 'nightmare',
  health: 100,

  image: '/images/freddy.png'
})

let ermac = new Enemy({
  name: 'Ermac',
  move: 'crush',
  health: 100,

  image: '/images/green-guy.png'
})

let heros = [scorpian, subZero];
let enemies = [freddy, ermac];