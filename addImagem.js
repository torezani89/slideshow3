import { addBolinha } from "./addBolinha.js";
import {images, loadImages} from "./carregaImagens.js"

// Pegar o value (path) do arquivo input-file. Construir classe abstrata com as propriedades:
// name: valor digitado em input de texto;
// url = path do arquivo.
// colocar dentro do array 'images'.
// Chamar novamente loadImages após colocar dentro do array.

const inputPath = document.getElementById('input-file');
// console.log(inputImagem);
const inputName = document.getElementById('input-name');
// console.log(inputName);
const inputSubmit = document.getElementById('input-submit');
// console.log(inputSubmit);
let containerItems = document.querySelector('#container-items');

class Image {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    } 

}

// let newImage;


inputSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    // let newImage = new Image (inputName.value, inputPath.value);
    // console.log(newImage);
    // return newImage;
    images.push(new Image (inputName.value, inputPath.value));
    console.log(images);
    loadImages(images,containerItems);
    
})

/*
document.getElementById('botao').addEventListener('click', () => {
    console.log(images);
})
*/

// export {newImage}
