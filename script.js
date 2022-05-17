var hb = document.querySelector("nav");
var menuAtv = 1;


function menu() {
  menuAtv++;
  if (menuAtv == 2) {
    
    hb.style.display = "block"
  } else if (menuAtv >= 3) {
    hb.style.display = "none"
    menuAtv = 1;
  }
}



console.log(menuAtv)