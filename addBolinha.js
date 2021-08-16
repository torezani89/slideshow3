// Ao carregar uma imagem, quero criar uma bolinha:
// <div class="bolinha" id=""></div>
// A id da bolinha deve receber o valor da propriedade 'name' da imagem.

// Pegar o array das imagens, fazer um forEach nele e adicionar uma bolinha para cada item do array
// A bolinha deve ser adicionada dentro da div 'container-bolinhas'

let containerBolinhas = document.getElementById('container-bolinhas');

function resetBolinhas() {
    containerBolinhas.textContent = "";
}

function addBolinha(image) {
    let criaBolinha = document.createElement('div');
    criaBolinha.classList.add('bolinha');
    criaBolinha.id = image.name;
    containerBolinhas.appendChild(criaBolinha);
}

export {addBolinha, resetBolinhas};