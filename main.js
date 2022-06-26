const header = document.getElementById("header");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");

  } else {
    header.classList.remove("sticky");
  }
}

window.addEventListener('scroll', myFunction)

// console.log('sticky: ', sticky, 'body: ', document.body.scrollTop, window.pageYOffset )

const linkContainer = document.getElementById("linkCont");
const links = linkContainer.getElementsByClassName("nav-link");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// exclude helpline from the list
// while (i<links.length-1){
//   links[i].addEventListener("click", function() {
//   let current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   // if (i === 5){
//   // this.className += " ";
//   // } else {
//     this.className += " active";
  
//   // }
//   });
//   i++;
// }