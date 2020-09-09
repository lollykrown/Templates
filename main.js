document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
          "body").style.visibility = "hidden"; 
        document.querySelector( 
          "#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector( 
          "#loader").style.display = "none"; 
        document.querySelector( 
          "body").style.visibility = "visible"; 

    } 
};


// const icons = document.getElementsByTagName("i");

// for (let i = 0; i < icons.length; i++) {
//   let icon = icons[i];
//   icon.addEventListener("mouseover", function() {
//     // this.style.color = "#000fff";
//     icon.classList.add('blue')
//   });
// }

// const logo = document.querySelectorAll('#logo path');
// console.log(logo);

// for (let i =0; i<logo.length; i++) {
//     console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
// }