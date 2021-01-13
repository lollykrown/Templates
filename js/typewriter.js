
document.addEventListener("DOMContentLoaded", typeWriter);

let i = 0;
const myName = 'Olúwakáyòdé.'
const speed = 250; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < myName.length) {
    document.getElementById("name").innerHTML += myName.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}