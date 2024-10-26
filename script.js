let skills = document.getElementById(`skills`);

function defMarco(classe, nombre, logo, nivel){
    const marco = document.createElement('div');
    marco.classList.add('marco-skill');
    marco.classList.add(classe);

    const titulo = document.createElement('p');
    titulo.innerHTML = nombre;

    marco.appendChild(titulo);
    marco.appendChild(logo);
    marco.appendChild(nivel);

    skills.appendChild(marco);
}


function defNivel(nivel){

    const bar = document.createElement('div');
    bar.classList.add("niv-bar")

    const innerBar = document.createElement('div');

    let texto =`${nivel}%`;
    innerBar.innerHTML = texto;
    innerBar.classList.add("inner-bar");
    innerBar.style.width = `${nivel}%`;

    //GPT
    innerBar.style.height = '100%';

    bar.appendChild(innerBar);

    return bar;
}

function defLogo(URL){
    const source = document.createElement('div');
    source.classList.add("logo-div");

    const image = document.createElement('img');
    image.classList.add("logo-img");
    image.setAttribute("src", URL);

    source.appendChild(image);

    return source;
}



defMarco("HTML", "HTML", defLogo("img/LP/HTML.webp"), defNivel(60));

defMarco("CSS", "CSS", defLogo("img/LP/CSS.webp"), defNivel(75));

defMarco("JS", "JavaScript", defLogo("img/LP/js.webp"), defNivel(35));

defMarco("JAVA", "Java", defLogo("img/LP/java.webp"), defNivel(60));

defMarco("CPP", "C++", defLogo("img/LP/cpp.webp"), defNivel(60));



const tamaño = window.innerWidth;
//document.write(tamaño);



//SCRIPT PARA COPIAR

const copiar = document.getElementById("copy-email");
const email = document.getElementById("email");
let emailVal = email.getAttribute("value");

copiar.addEventListener("click", ()=>copiarEM(emailVal))

function copiarEM(emailVal){
    navigator.clipboard.writeText(emailVal);
    alert("Successfully copied email");
}


//SCRIPT PARA MARCO DE PROYECTO.

const proyectos = document.getElementById('proy-div');

function defProyecto(image){
    const marcoImg = document.createElement('div');
    marcoImg.classList.add('proy-marco');

    marcoImg.appendChild(image);
    proyectos.appendChild(marcoImg)
}

function defImgProy(URL){
    const imagen = document.createElement('img');
    imagen.classList.add('proy-img');
    imagen.setAttribute('src', URL);
    return imagen;
}

defProyecto(defImgProy("img/projects/proy1.jpg"));
