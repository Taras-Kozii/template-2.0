'use strict';

export function initSearch() {
const btn = document.querySelector('.header-button')
const input = document.querySelector('.header-input')
const label = document.querySelector('.header-label')

btn.addEventListener('click', () => {
  label.classList.add('open')
  input.focus()
})

input.addEventListener('blur', e => {
  label.classList.remove('open')
})
}
initSearch();