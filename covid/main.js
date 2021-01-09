// function hideIcon(self) {
//     self.style.backgroundImage = 'none';
// }

// window.onscroll = function() {myFunction()};

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

console.log('sticky: ', sticky, 'body: ', document.body.scrollTop, window.pageYOffset )
