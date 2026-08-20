'use strict';

const buttons = document.querySelectorAll('button');

buttons.forEach(elem => {
  elem.addEventListener('click', e => {
    elem.classList.toggle('active');
  });
})