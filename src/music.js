 

var pathMusic = new Audio("./assets/syn-nr.mp3");


music_progress = document.querySelector("#barra_progreso");
label_actualT = document.querySelector("#tiempo_recorrido");
label_finalT = document.querySelector("#tiempo_final");
range_progreso =  document.querySelector("#range_progreso");
range_vol = document.querySelector("#range_volumen");


var actually_time  = pathMusic.currentTime ;
let duration_music = pathMusic.duration;
 

function play_music(){

    if(!pathMusic.paused){
        pathMusic.pause();
    } else {
        pathMusic.play();
        progress_time();
    }
    cambiarIcon();
  
}

function time_pass(option_pass){
    if (option_pass == 0  && pathMusic.currentTime <= pathMusic.duration - 3) {
        pathMusic.currentTime += 3;
    } else if( option_pass == 1 && pathMusic.currentTime < 2 ) {
        pathMusic.currentTime = 0;  
    } else if(option_pass == 1 && pathMusic.currentTime >= 3){
        pathMusic.currentTime -=  3;
    }
}


function song_previous(option_anext){

}

function progress_time(){

        // Actualizacion de tiempo en los campos
        label_finalT.innerText = pathMusic.duration;
      
        setTimeout(function () {
            label_actualT.innerText = pathMusic.currentTime  + "  ";   
        }, 1000);     

        setInterval(function () {
            range_progreso.value =  (pathMusic.currentTime);
            label_actualT.innerText = pathMusic.currentTime  + " ";
            range_progreso.max   = pathMusic.duration;
        },1200);
}


function change_rangeMusic(){
    pathMusic.currentTime = range_progreso.value;
    label_actualT.innerText = pathMusic.currentTime  + " : ";
}


function change_rangeVolumen(){
    pathMusic.volume = range_vol.value;
}