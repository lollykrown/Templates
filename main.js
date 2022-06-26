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

const linkContainer = document.getElementById("linkCont");
const links = linkContainer.getElementsByClassName("nav-link");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}