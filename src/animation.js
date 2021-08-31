svg1 = document.getElementById("img-svg1");
svg2 = document.getElementById("img-svg2");
var pausa = true;

 function cambiarIcon(){
  
    if (pausa){
        pausa=true;
      
        svg1.style.display ="block";
        svg2.style.display ="none";
    } else {
        pausa=false;
        svg1.style.display ="none"; // desaparece
        svg2.style.display ="block";
     
    }
}  