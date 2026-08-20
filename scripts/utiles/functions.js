'use strict';

import { page } from "./vars.js";

export function getScrollValue(link) {
  const block = document.querySelector(link.dataset.goto);
  const scrollValue = block.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
  return scrollValue || 0;
}
export function scrollToBlock(link) {
  const scrollValue = getScrollValue(link);
  window.scrollTo({
    behavior: "smooth",
    top: scrollValue,
  });
}
export function lockPage() {
  const rightPaddingValue = window.innerWidth - document.documentElement.clientWidth + 'px';
  setFixPadding(rightPaddingValue);
  page.classList.toggle('lock');

  function setFixPadding(paddingRight) {
  const fixItems = document.querySelectorAll('.right-fix-padding');

  for (const item of fixItems) {
    item.style.paddingRight = paddingRight;
  }
}
}
export function watcherToggle(selector = '.scroll-anim', percent = 0.1) {
  const animItems = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    root: null,
    threshold: percent,
  });

  animItems.forEach(el => {
    if (el instanceof Element) {
      observer.observe(el);
    }
  });
}
export function watcherAnim(selector = '.scroll-anim', percent = 0.1, callback = (el) => {}, once = false) {
  const animItems = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        if (once) {
          observerInstance.unobserve(entry.target);
        }
      }
    });
  }, {
    root: null,
    threshold: percent,
  });

  animItems.forEach(el => {
    if (el instanceof Element) {
      observer.observe(el);
    }
  });
}
export function getDigFromString(item) {
  return parseInt(item.replace(/[^\d]/g, ''))
}
export function getDigFormat(item, sepp = ' ') {
  return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${sepp}`);
}
export function setCSSProperty(item, property, value) {
  item.style.setProperty(property, value);
}
export function scrollAnimProperty(selector, percent, property, scrollValue) {
  const items = document.querySelectorAll(selector);
  for (const elem of [...items]) {
    if (isInView(elem, percent)) {
      elem.style[property] = scrollValue;
    }
  }
  function isInView(elem, persent=0.35) {
  const rect = elem.getBoundingClientRect();
  const elemHeight = elem.offsetHeight;
  const visiblePart = elemHeight * persent;
  
  return rect.bottom > 0 && rect.top < (
    window.innerHeight - visiblePart || document.documentElement.clientHeight - visiblePart);
  }
}