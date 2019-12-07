function randombg(){
    var random= Math.floor(Math.random() * 6) + 0;
    var bigSize = ["linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url('../img/fondo-cabecera_01.jpg')",
                   "linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url('../img/fondo-cabecera_02.jpg')",
                   "linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url('../img/fondo-cabecera_03.jpg')",
                   "linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url('../img/fondo-cabecera_04.jpg')"];
    document.getElementById("cabecera").style.backgroundImage=bigSize[random];
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("mainNav").style.top = "0";
    document.getElementById("mainNav").style.backgroundColor = "rgba(229, 107, 71)"
  } else {
    document.getElementById("mainNav").style.top = "-80px";
    
  }
  prevScrollpos = currentScrollPos;
}

// window.onscroll = function() {
//     if (window.pageYOffset > 6) {
//         document.getElementById("mainNav").style.color = '#black'
//     }
// }