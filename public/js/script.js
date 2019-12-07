function randombg(){
    var random= Math.floor(Math.random() * 6) + 0;
    var bigSize = ["linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url('../img/fondo-cabecera_01.jpg')",
                   "linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url('../img/fondo-cabecera_02.jpg')",
                   "linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url('../img/fondo-cabecera_03.jpg')",
                   "linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url('../img/fondo-cabecera_04.jpg')"];
    document.getElementById("cabecera").style.backgroundImage=bigSize[random];
}