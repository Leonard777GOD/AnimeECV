const h2 = document.getElementById("h2"); 
const h2two = document.getElementById("h2two");
const recien = document.getElementById("recien"); //recien agg
const recien2 = document.getElementById("recien2");
const inicio = document.getElementById("inicio"); // boton inicio seccion
const SA = document.getElementById("SA");    // boton series animadas
const peliculasbtn = document.getElementById("peliculas"); //boton seccion peliculas
const Hentai = document.getElementById("H18");  // boton hentai
const manhwa = document.getElementById("manhwa"); // boton manhwa
const seriesC = document.getElementById("seriesC"); // conteneor series
const cpeli = document.getElementById("cpeli"); // contenedor pelicula
const hentais  = document.getElementById("hentais"); // contenedor hentai
const cmanhwa = document.getElementById("cmanhwa");
const buscador = document.getElementById("buscadorid");//buscador
const cajasuperior = document.getElementById("cajota");


// Ocultar todas las secciones al inicio (buena práctica)
const secciones = [cpeli, seriesC, hentais, cmanhwa];
secciones.forEach(seccion => {
  if (seccion) { // Verifica si el elemento existe
    seccion.style.display = "none";
  }
});


peliculasbtn.addEventListener('click', function() {  // No pasar argumentos aquí
    peliculasbtn.style.color = "red";
    h2.innerText = "Peliculas Anime";
    let botones = [inicio,SA,Hentai,manhwa];
    botones.forEach(boton => {
     if (boton) {
      boton.style.color = " white";
     }
    })
    let cajones = [recien,seriesC,hentais,cmanhwa,h2two,recien2];
    cajones.forEach(cajon => {
      if (cajon) {
        cajon.style.display = "none";
      }
    })
    cpeli.style.display = "flex";
});


SA.addEventListener('click', function() {  // No pasar argumentos aquí
  SA.style.color = "red";
  h2.innerText = "Series Anime";
  let botones = [inicio,peliculasbtn,Hentai,manhwa];
  botones.forEach(boton => {
   if (boton) {
    boton.style.color = " white";
   }
  })
  let cajones = [recien,cpeli,hentais,cmanhwa,h2two,recien2];
  cajones.forEach(cajon => {
    if (cajon) {
      cajon.style.display = "none";
    }
  })
  seriesC.style.display = "flex";
});

Hentai.addEventListener('click', function() {  // No pasar argumentos aquí
  Hentai.style.color = "red";
  h2.innerText = "Hentai +18";
  let botones = [inicio,peliculasbtn,SA,manhwa];
  botones.forEach(boton => {
   if (boton) {
    boton.style.color = " white";
   }
  })
  let cajones = [recien,cpeli,seriesC,cmanhwa,h2two,recien2];
  cajones.forEach(cajon => {
    if (cajon) {
      cajon.style.display = "none";
    }
  })
  hentais.style.display = "flex";
});


manhwa.addEventListener('click', function() {  // No pasar argumentos aquí
  manhwa.style.color = "red";
  h2.innerText = "Manhwa +18";
  let botones = [inicio,peliculasbtn,SA,Hentai];
  botones.forEach(boton => {
   if (boton) {
    boton.style.color = " white";
   }
  })
  let cajones = [recien,cpeli,seriesC,hentais,h2two,recien2];
  cajones.forEach(cajon => {
    if (cajon) {
      cajon.style.display = "none";
    }
  })
  cmanhwa.style.display = "flex";
});



