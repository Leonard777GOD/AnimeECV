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
    h2.style.display = "block";
    cpeli.style.display = "flex";
    h3.style.display = "none";
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
  h2.style.display = "block";
  seriesC.style.display = "flex";
  h3.style.display = "none";
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
  h2.style.display = "block";
  hentais.style.display = "flex";
  h3.style.display = "none";
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
  h2.style.display = "block";
  cmanhwa.style.display = "flex";
  h3.style.display = "none";
});


//logica pa modificar portada

const h3 = document.getElementById("h3");
const portada = document.getElementById("portada2");
const titulo = document.getElementById("tituloA");
const descripcion = document.getElementById("descripcion");
document.querySelectorAll('figure').forEach(div => {
  div.addEventListener('click', () => {
      const figcaption = div.querySelector('figcaption');

      if (figcaption) {
          const textoFigcaption = figcaption.textContent;

          if (textoFigcaption === 'Me follo a mi sobrina') {
            const secciones = [cpeli, seriesC, hentais, cmanhwa];
            secciones.forEach(seccion => {
              if (seccion) { // Verifica si el elemento existe
                seccion.style.display  = "none";
             
              }
            });
            titulo.textContent = textoFigcaption;
            descripcion.innerText = "Follando a mi sobrina en su fiesta de pijamas¡¿Un chico en una fiesta de pijamas para chicas?! ¡Cuando el cuerpo apenas vestido de su sobrina duerme indefenso en la cama, la emoción simplemente no se detiene, incluso mientras las demás chicas duermen...! ";
            h2.style.display = "none";
            cajasuperior.style.display = "flex";
            portada.src = "/portadasmanhwa/mfams2.jpg";
            h3.style.display = "block";
            h3.textContent = textoFigcaption  + " " + "Temporadas y capitulos";
          
          } else if (textoFigcaption === 'Overflow') {
            const secciones = [cpeli, seriesC, hentais, cmanhwa];
            secciones.forEach(seccion => {
              if (seccion) { // Verifica si el elemento existe
                seccion.style.display  = "none";
             
              }
            });
            titulo.textContent = textoFigcaption;
            descripcion.innerText = "Un día, Kazushi Sudou recibe la visita de las hermanas Ayane y Kotone Shirakawa, sus dos hermosas amigas de la infancia. Aunque no tienen relación sanguínea, ambas lo llaman con cariño como «hermano». De la nada, y por venganza de Ayane, ambas hermanas deciden unirse a Kazushi en su pequeño baño, y terminan bañándose juntos. Entre el dulce aroma y espuma de baño, Kotone tiene un pequeño accidente con Kazushi y ambos terminan «conectados». ¿Podrá el pervertido Kazushi resistir a los encantos de estas hermosas hermanas?";
            h2.style.display = "none";
            cajasuperior.style.display = "flex";
            portada.src = "/portadas/overflowportada2.jpg";
            h3.style.display = "block";
            h3.textContent = textoFigcaption  + " " + "Temporadas y capitulos";
            
          }
      }
  });
});