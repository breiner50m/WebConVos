var Borde_1= document.getElementById("borde-bottom-1");
var Borde_2= document.getElementById("borde-bottom-2");
var Borde_3= document.getElementById("borde-bottom-3");
var Borde_4= document.getElementById("borde-bottom-4");
var img_seccion1= document.getElementById("img-box1-seccion1");
var box2_seccion1= document.getElementById("box2-seccion1-id");
var box1_seccion2= document.getElementById("box1-seccion2");
var box2_seccion2= document.getElementById("box2-seccion2");
var box3_seccion2= document.getElementById("box3-seccion2");
var box4_seccion2= document.getElementById("box4-seccion2");
var parrafo_seccion3= document.getElementById("parrafo-seccion3");
var parrafo_seccion5= document.getElementById("parrafo-seccion5");
var box1_seccion4= document.getElementById("box1-seccion4");
var box2_seccion4= document.getElementById("box2-seccion4");
var lista_seccion6= document.getElementById("lista-seccion6");
var img_seccion6= document.getElementById("img-seccion6");



function border(){

/*     var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    
    limit = limit - 657;
    

    
    var ResultadoBarra = (mover*100)/limit;
    
    var Barra = parseInt(ResultadoBarra);


    BarraProgreso.style.width=(Barra+"%"); */
    var mover = window.pageYOffset;
    console.log(mover);
    
    
    if(mover >= 47){
        img_seccion1.classList.add("img-animacion");
        box2_seccion1.classList.add("box2-seccion1-animacion");

    }
    if(mover >= 477){
        Borde_1.classList.add("borde-bottom-animacion");
    }
    if(mover >= 528){
        box1_seccion2.classList.add("box-animacionx");
        box2_seccion2.classList.add("box-animacion1");
    }
    if(mover >= 827){
        box3_seccion2.classList.add("box-animacionx");
        box4_seccion2.classList.add("box-animacion1");
    }
    if(mover >= 477){
        Borde_1.classList.add("borde-bottom-animacion");
    }
    if(mover >= 1258){
        Borde_2.classList.add("borde-bottom-animacion");
    }
    if(mover >= 1333){
        parrafo_seccion3.classList.add("parrafo-animacion");        
    }
    if(mover >= 1747){
        box1_seccion4.classList.add("box1-seccion4-animacion");
        box2_seccion4.classList.add("box2-seccion4-animacion");        
    }
    if(mover >= 2180){
        Borde_3.classList.add("borde-bottom-animacion");        
    }
    if(mover >= 2253){
        parrafo_seccion5.classList.add("parrafo-animacion");        
    }
    if(mover >= 2477){
        Borde_4.classList.add("borde-bottom-animacion"); 
        lista_seccion6.classList.add("lista-seccion6-animacion");        
        img_seccion6.classList.add("img-animacion");        

    }
}

window.addEventListener('scroll', function(){
    border();
})

let ubicacion = window.pageYOffset;
window.onscroll = function(){
    let desplazamiento = window.pageYOffset;
    if(ubicacion>=desplazamiento){
        document.getElementById("real-menu").style.top="0";
    }
    else{
        document.getElementById("real-menu").style.top="-100px";
    }
    ubicacion=desplazamiento;
}