var TextSec1= document.getElementById("text-sec1");
var TextSec2= document.getElementById("text-sec2");
var BarraSec1= document.getElementById("barra-sec1");
var BarraSec2= document.getElementById("barra-sec2");


function border(){
    
    var mover = window.pageYOffset;
    if(mover >= 110){
        TextSec1.classList.add("text-sec1-animacion");
        BarraSec1.classList.add("barra-sec1-animacion");
        console.log("do it");
    }
    if(mover >= 235){
        TextSec2.classList.add("text-sec2-animacion");
        BarraSec2.classList.add("barra-sec2-animacion");
        console.log("do it 2");
       
    }

    

   

  
}

window.addEventListener('scroll', function(){
    border();
})