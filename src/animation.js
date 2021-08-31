svg1 = document.getElementById("img-svg1");
svg2 = document.getElementById("img-svg2");
var pausa = true;

 function cambiarIcon(){
  
    if (pausa){
        pausa=false;
        svg1.style.display ="none"; // desaparece
        svg2.style.display ="block";
        
    } else {
        pausa=true;
        svg2.style.display ="none";
        svg1.style.display ="block";
       
     
    }
}  