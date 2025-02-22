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
const secciones = [cpeli, seriesC, hentais, cmanhwa,cajasuperior];
secciones.forEach(seccion => {
  if (seccion) { // Verifica si el elemento existe
    seccion.style.display = "none";
  }
});


peliculasbtn.addEventListener('click', function() {  // No pasar argumentos aquí
    peliculasbtn.style.color = "black";
    peliculasbtn.style.backgroundColor = "white";
    h2.innerText = "Peliculas Anime";
    let botones = [inicio,SA,Hentai,manhwa];
    botones.forEach(boton => {
     if (boton) {
      boton.style.color = " white";
      boton.style.background = "black";
     }
    })
    let cajones = [recien,seriesC,hentais,cmanhwa,h2two,recien2,cajasuperior];
    cajones.forEach(cajon => {
      if (cajon) {
        cajon.style.display = "none";
      }
    })
    cpeli.style.display = "flex";
});


SA.addEventListener('click', function() {  // No pasar argumentos aquí
  SA.style.color = "black";
  SA.style.backgroundColor = "white";
  h2.innerText = "Series Anime";
  let botones = [inicio,peliculasbtn,Hentai,manhwa];
  botones.forEach(boton => {
   if (boton) {
    boton.style.color = " white";
    boton.style.background = "black";
   }
  })
  let cajones = [recien,cpeli,hentais,cmanhwa,h2two,recien2,cajasuperior];
  cajones.forEach(cajon => {
    if (cajon) {
      cajon.style.display = "none";
    }
  })
  seriesC.style.display = "flex";
});

Hentai.addEventListener('click', function() {  // No pasar argumentos aquí
  Hentai.style.color = "black";
  Hentai.style.backgroundColor = "white";
  h2.innerText = "Hentai +18";
  let botones = [inicio,peliculasbtn,SA,manhwa];
  botones.forEach(boton => {
   if (boton) {
    boton.style.color = " white";
    boton.style.background = "black";
   }
  })
  let cajones = [recien,cpeli,seriesC,cmanhwa,h2two,recien2,cajasuperior];
  cajones.forEach(cajon => {
    if (cajon) {
      cajon.style.display = "none";
    }
  })
  hentais.style.display = "flex";
});


manhwa.addEventListener('click', function() {  // No pasar argumentos aquí
  manhwa.style.color = "black";
  manhwa.style.backgroundColor = "white";
  h2.innerText = "Manhwa +18";
  let botones = [inicio,peliculasbtn,SA,Hentai];
  botones.forEach(boton => {
   if (boton) {
    boton.style.color = " white";
    boton.style.background = "black";
   }
  })
  let cajones = [recien,cpeli,seriesC,hentais,h2two,recien2,cajasuperior];
  cajones.forEach(cajon => {
    if (cajon) {
      cajon.style.display = "none";
    }
  })
  cmanhwa.style.display = "flex";
});


//logica pa modificar portada

const h3 = document.getElementById("h3");
const portada = document.getElementById("portada2");
const titulo = document.getElementById("tituloA");
document.querySelectorAll('.peli').forEach(div => {
  div.addEventListener('click', () => {
      const figcaption = div.querySelector('figcaption');

      if (figcaption) {
          const textoFigcaption = figcaption.textContent;

          if (textoFigcaption === 'Me follo a mi sobrina') {
            titulo.textContent = textoFigcaption;
            const secciones = [cpeli, seriesC, hentais, cmanhwa];
            secciones.forEach(seccion => {
              if (seccion) { // Verifica si el elemento existe
                seccion.style.display  = "none";
                h2.style.display = "none";
                cajasuperior.style.display = "flex";
                portada.src = "/portadasmanhwa/mfams2.jpg";
                h3.textContent = textoFigcaption  + " " + "Temporadas y capitulos";
              }
            });
          } else if (textoFigcaption === 'Otro texto 2') {
              figcaption.textContent = 'Texto modificado 2';
              figcaption.style.fontSize = '1.2em';
          }
      }
  });
});