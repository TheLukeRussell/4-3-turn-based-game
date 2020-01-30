
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
    this.attack = options.attack;

    this.heroDamage = function(){
      let hit = Math.floor(Math.random() * 15) + 5;
      // console.log(hit);
  }
}
}

class Enemy{
  constructor(options) {
    options = options || {};

    this.name = options.name;
    this.attack = options.attack;

    this.enemyDamage = function(){
      let hit = Math.floor(Math.random() * 15) + 5;
      console.log(hit);
  }
}
}

let scorpian = new Hero({
  name: 'Scorpian',
  attack: 'sting',
  health: 100,

  image: '/images/yellow-guy-resize.png'
});

let subZero = new Hero({
  name: 'Sub Zero',
  attack: 'frostbite',
  health: 100,

  image: '/images/sub-zero.png'
});

let freddy = new Enemy({
  name: 'Freddy',
  attack: 'nightmare',
  health: 100,

  image: '/images/freddy.png'
})

let ermac = new Enemy({
  name: 'Ermac',
  attack: 'crush',
  health: 100,

  image: '/images/green-guy.png'
})

let heros = [scorpian, subZero];
let enemies = [freddy, ermac];