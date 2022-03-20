window.onload = function(){
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event)
{
event.preventDefault();

const cartao = document.createElement('div');
const img = document.createElement('img');
const h4 = document.createElement('h4');
const b = document.createElement('b');
const p = document.createElement('p');


const chassiValor = document.querySelector('input#chassis').value
const imgLink = document.querySelector('input#imagem').value
const defeito = document.querySelector('textarea').value


img.setAttribute('src',imgLink);

const btexto = document.createTextNode(chassiValor);
b.appendChild(btexto);

const ptext =document.createTextNode(defeito);
p.appendChild(ptext);


cartao.classList.add('cartao');
img.classList.add('cartao-img');



p.classList.add('cartao-texto');


h4.appendChild(b);
cartao.appendChild(img);
cartao.appendChild(h4);
cartao.appendChild(p);

document.querySelector('.cartoes').appendChild(cartao);
form.reset();
});

}