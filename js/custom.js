const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
// const button = document.getElementById('btn')

// button.addEventListener('click', function(e){
//   let x = e.clientX - e.target.offsetLeft;
//   let y = e.clientY - e.target.offsetTop;

//   let ripples = document.createElement('span');
//   ripples.classList.add('ripples')
//   ripples.style.left = x + 'px';
//   ripples.style.top = y + 'px';
//   this.appendChild(ripples)

//   setTimeout(() => {
//     ripples.remove()
//   },1000)
// })
