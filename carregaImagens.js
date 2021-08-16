import {addBolinha, resetBolinhas} from "./addBolinha.js";
import { marcaBolinha } from "./marcaBolinha.js";
// import { newImage } from "./addImagem.js";


const images = [
    { 'name': 'chrono', 'url':'./img/chrono.jpg' },
    { 'name': 'inuyasha', 'url':'./img/inuyasha.jpg' },
    { 'name': 'tenchi', 'url':'./img/tenchi.jpg' },
    { 'name': 'tenjhotenge', 'url':'./img/tenjhotenge.jpg' },
    { 'name': 'yuyuhakusho', 'url':'./img/yuyuhakusho.jpg' },
    { 'name': 'ippo', 'url':'./img/ippo.png' },
]

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ADD IMAGE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< LOADIMAGES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const containerItems = document.querySelector('#container-items');
/* containerItems é passado para loadImages como parametro (container). Ele é passado no momento de chamar loadImages.
loadImages é chamado em slideShow3.js. Portanto, containerItems deve ser declarado lá. */

const loadImages = function (images, container) {

    resetBolinhas();

    images.forEach(image => {
        // Observe o operador (+=) para que ele acumule os conteúdos (image) e não substitua (caso colocássemos só ()=) )
        container.innerHTML += `
            <div class='item'>
                <img class='imagem' src='${image.url}'
            </div>
        `

        addBolinha(image);
    });

    marcaBolinha();
}


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CRIA IMAGEM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXPORT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export {images, loadImages}