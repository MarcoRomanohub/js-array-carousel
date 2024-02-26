const itemsWrapper = document.querySelector('.items-wrapper');
const up = document.querySelector('.top');
const down = document.querySelector('.bottom');

up.classList.add('hide');

let counterImg = 0;

const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
]

for(let i=0; i < images.length; i++){
  const img = images[i];
  itemsWrapper.innerHTML += `<img class="img hide" src="${img}" >`;
}

const itemsCollection = document.getElementsByClassName('img');

itemsCollection[counterImg].classList.remove('hide');

up.addEventListener('click', function(){
  down.classList.remove('hide');

  itemsCollection[counterImg].classList.add('hide');

  counterImg--;

  if(counterImg === 0){
    up.classList.add('hide');
  }

  itemsCollection[counterImg].classList.remove('hide');
})

down.addEventListener('click', function(){
  up.classList.remove('hide');

  itemsCollection[counterImg].classList.add('hide')

  counterImg++;

  itemsCollection[counterImg].classList.remove('hide')

  if(counterImg === images.length -1){
    down.classList.add('hide');
  }
})