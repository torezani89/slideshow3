import {marcaBolinha} from "./marcaBolinha.js";
import {images, loadImages} from "./carregaImagens.js";

'use strict';

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ADD IMAGEM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CARREGA IMAGENS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let containerItems = document.querySelector('#container-items');

loadImages (images, containerItems);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CRIA BOLINHAS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Transferido para addBolinha.js

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MARCA BOLINHA >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Transferido para marcaBolinha.js

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< PASSA IMAGENS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let items = document.querySelectorAll('.item');
// Se colocar antes de loadImagens, não funciona, pois ainda não terá lido as imagens para jogar no array 'items'.

function next () {
    containerItems.appendChild(items[0]);
    // appendChild pega insere o elemento na última posição do array. Assim, o elemento 0 vai para a última posição.
    items = document.querySelectorAll('.item');
    /*  Precisamos atualizar o array de items para quando chamarmos novamente a função 'previous', ela continuar
    girando as imagens de onde parou. */
    marcaBolinha();
}

function previous () {
    let lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
    marcaBolinha();
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< EVETLISTENERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.getElementById('previous').addEventListener('click', previous);
document.getElementById('next').addEventListener('click', next);