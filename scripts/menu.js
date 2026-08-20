'use strict';

import { lockPage, scrollToBlock } from "./utiles/functions.js";
import { burger } from "./utiles/vars.js";

const menu = document.querySelector('nav.menu__body');
const navLinks = document.querySelectorAll('.menu__link');

burger.addEventListener('click', e => {
  lockPage();
  burger.classList.toggle('active');
  menu.classList.toggle('open');
})

export function initNavigation() {
  setActivePageLink();
  setActiveSectionLink();

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      handleAnchorNavigation(link, e);
      closeMenu();
    });
  });
}

function closeMenu() {
  if (!burger.classList.contains('active')) {
    return;
  }

  lockPage();
  burger.classList.remove('active');
  menu.classList.remove('open');
}
function handleAnchorNavigation(link, event) {
  if (!link.dataset.goto) return;

  event.preventDefault();
  scrollToBlock(link);
}
function setActivePageLink() {
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const url = new URL(link.href);

    link.classList.remove('active');

    if (!url.hash && url.pathname === currentPath) {
      link.classList.add('active');
    }
  });
}
function setActiveSectionLink() {
  const sections = document.querySelectorAll('section[id]');

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const hash = `#${entry.target.id}`;

        navLinks.forEach(link => {
          const url = new URL(link.href);

          if (
            url.pathname === window.location.pathname &&
            url.hash === hash
          ) {
            navLinks.forEach(item =>
              item.classList.remove('active')
            );

            link.classList.add('active');
          }
        });
      });
    },
  );

  sections.forEach(section => observer.observe(section));
}
// Якщо в меню в нас є посилання на сторінки та на окрему секцію на сторінці
// то в html файлі іншої сторінки до посилання не додаємо data атрибут і шлях починається з index.html
// ПРИКЛАД cookies це секція на головній сторінці а переходимо ми з іншої сторінки
// <a href="index.html#cookies" class="menu__link link"><span>Cookies</span></a>

// ПРИКЛАД для сторінки з навігацією на секцію яка є на цій же сторінці
/* <a
  href="#locations"
  class="menu__link link"
  data-goto="#locations"
  ><span>Locations</span></a
  > */