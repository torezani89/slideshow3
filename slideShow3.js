
import {marcaBolinha} from "./marcaBolinha.js";

'use strict';

const containerBolinhas = document.getElementById('container-bolinhas');


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CARREGA IMAGENS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const images = [
    { 'name': 'chrono', 'url':'./img/chrono.jpg' },
    { 'name': 'inuyasha', 'url':'./img/inuyasha.jpg' },
    { 'name': 'tenchi', 'url':'./img/tenchi.jpg' },
    { 'name': 'tenjhotenge', 'url':'./img/tenjhotenge.jpg' },
    { 'name': 'yuyuhakusho', 'url':'./img/yuyuhakusho.jpg' },
    { 'name': 'ippo', 'url':'./img/ippo.png' },
]

const containerItems = document.querySelector('#container-items');
// const container = document.getElementById('container-items');

const loadImages = function (images, container) {
    images.forEach(image => {
        // Observe o operador (+=) para que ele acumule os conteúdos (image) e não substitua (caso colocássemos só ()=) )
        container.innerHTML += `
            <div class='item'>
                <img class='imagem' src='${image.url}'
            </div>
        `
        addBolinha(image);
    });
}


loadImages (images, containerItems);

marcaBolinha();

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CRIA BOLINHAS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Ao carregar uma imagem, quero criar uma bolinha:
// <div class="bolinha" id=""></div>
// A id da bolinha deve receber o valor da propriedade 'name' da imagem.

// Pegar o array das imagens, fazer um forEach nele e adicionar uma bolinha para cada item do array
// A bolinha deve ser adicionada dentro da div 'container-bolinhas'


function addBolinha(image) {
    let criaBolinha = document.createElement('div');
    criaBolinha.classList.add('bolinha');
    criaBolinha.id = image.name;
    containerBolinhas.appendChild(criaBolinha);
}

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