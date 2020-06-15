var Borde_1 = document.getElementById("borde-bottom-1");
var Borde_2 = document.getElementById("borde-bottom-2");
var Borde_3 = document.getElementById("borde-bottom-3");
var Borde_4 = document.getElementById("borde-bottom-4");
var img_seccion1 = document.getElementById("img-box1-seccion1");
var box2_seccion1 = document.getElementById("box2-seccion1-id");
var box1_seccion2 = document.getElementById("box1-seccion2");
var box2_seccion2 = document.getElementById("box2-seccion2");
var box3_seccion2 = document.getElementById("box3-seccion2");
var box4_seccion2 = document.getElementById("box4-seccion2");
var parrafo_seccion3 = document.getElementById("parrafo-seccion3");
var parrafo_seccion5 = document.getElementById("parrafo-seccion5");
var box1_seccion4 = document.getElementById("box1-seccion4");
var box2_seccion4 = document.getElementById("box2-seccion4");
var lista_seccion6 = document.getElementById("lista-seccion6");
var img_seccion6 = document.getElementById("img-seccion6");

function border() {
	var mover = window.pageYOffset;
	console.log(mover);
	if (mover >= 47) {
		img_seccion1.classList.add("img-animacion");
		box2_seccion1.classList.add("box2-seccion1-animacion");
	}
	if (mover >= 477) {
		Borde_1.classList.add("borde-bottom-animacion");
	}
	if (mover >= 528) {
		box1_seccion2.classList.add("box-animacionx");
		box2_seccion2.classList.add("box-animacion1");
	}
	if (mover >= 827) {
		box3_seccion2.classList.add("box-animacionx");
		box4_seccion2.classList.add("box-animacion1");
	}
	if (mover >= 477) {
		Borde_1.classList.add("borde-bottom-animacion");
	}
	if (mover >= 1258) {
		Borde_2.classList.add("borde-bottom-animacion");
	}
	if (mover >= 1333) {
		parrafo_seccion3.classList.add("parrafo-animacion");
	}
	if (mover >= 1747) {
		box1_seccion4.classList.add("box1-seccion4-animacion");
		box2_seccion4.classList.add("box2-seccion4-animacion");
	}
	if (mover >= 2180) {
		Borde_3.classList.add("borde-bottom-animacion");
	}
	if (mover >= 2253) {
		parrafo_seccion5.classList.add("parrafo-animacion");
	}
	if (mover >= 2477) {
		Borde_4.classList.add("borde-bottom-animacion");
		lista_seccion6.classList.add("lista-seccion6-animacion");
		img_seccion6.classList.add("img-animacion");
	}
}
window.addEventListener('scroll', function () {
	border();
})
let ubicacion = window.pageYOffset;
window.onscroll = function () {
	let desplazamiento = window.pageYOffset;
	if (ubicacion >= desplazamiento) {
		document.getElementById("real-menu").style.top = "0";
	} else {
		document.getElementById("real-menu").style.top = "-100px";
	}
	ubicacion = desplazamiento;
}
particlesJS.load('particles-js','assets/particles.json',function(){console.log('callback - particles.js config loaded');});particlesJS('particles-js',{"particles":{"number":{"value":15,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffff00"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true,"config_demo":{"hide_card":false,"background_color":"#b61924","background_image":"","background_position":"50% 50%","background_repeat":"no-repeat","background_size":"cover"}});
  