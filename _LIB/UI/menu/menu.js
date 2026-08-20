'use strict';

const menu = document.querySelector('nav.menu__body');
const burger = document.querySelector('.burger');

burger.addEventListener('click', e => {
  burger.classList.toggle('active');
  menu.classList.toggle('open');
})