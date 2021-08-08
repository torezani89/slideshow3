// import {  } from "./slideShow3";
"strict mode";

// Pegar todas as <div class='item'> <img class='imagem' src='${image.url}'</div>
let imagens = document.querySelectorAll('.imagem');
// Pegar todas as <div class="bolinha" id=""></div>
const bolinhas = document.querySelectorAll('.bolinha');

let bolinha;

function achaBolinha() {

    /* Pega o valor atual de bolinha (antes de atribuir o novo valor) e deleta a classe de marcação.
    Na primeira chamada o valor de bolinha não está definido e vai dar erro se tentarmos chamar classList 
    sobre um objeto undefined. Por isso a verificação abaixo. */
    if (bolinha != undefined) {
        bolinha.classList.remove('bolinha-mark'); 
    }

    imagens = document.querySelectorAll('.imagem');
    bolinhas.forEach(element => {
        if (imagens[1].src.indexOf(element.id) > -1) {
            bolinha = element;
            return bolinha;

        }
    })
}

// Já está sendo executado dentro de achaBolinha(), para não precisar fazer o forEach toda vez sobre o array
// de bolinhas e assim otimizar o programa.
// function resetaBolinhas() {
//     bolinhas.forEach(element => {
//         element.classList.remove('bolinha-mark');
//     });
// }

function marcaBolinha() {
    // resetaBolinhas();
    achaBolinha();
    bolinha.classList.add('bolinha-mark');
}

export {marcaBolinha, achaBolinha, bolinha};

