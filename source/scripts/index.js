/* в этот файл добавляет скрипты*/
const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.toggle');

nav.classList.add('nav--closed');
menuButton.addEventListener('click',() => {
  nav.classList.toggle('nav--opened');
  nav.classList.toggle('nav--closed');
  }
);
