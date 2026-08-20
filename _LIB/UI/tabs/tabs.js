function initTabs(selector) {
  const tabs = document.querySelector(selector);

  if (!tabs) return;

  const tabLinks = tabs.querySelector('.tabs__links');
  const tabContent = tabs.querySelector('.tabs__items');
  const tabItems = tabs.querySelectorAll('.tabs__item');

  if (!tabLinks || !tabContent || !tabItems.length) return;

  const activeItem = tabContent.querySelector('.tabs__item.active');

  if (activeItem) {
    tabContent.style.height = `${activeItem.offsetHeight}px`;
  }

  tabLinks.addEventListener('click', (e) => {
    const link = e.target.closest('.tabs__link');

    if (!link || !tabLinks.contains(link)) return;

    const activeItem = document.getElementById(link.dataset.targettab);
    const currentItem = tabContent.querySelector('.tabs__item.active');

    if (!activeItem || activeItem === currentItem) return;

    // Перемикаємо активний tab
    tabLinks
      .querySelector('.tabs__link.active')
      ?.classList.remove('active');

    link.classList.add('active');

    // Перемикаємо контент
    currentItem?.classList.remove('active');
    activeItem.classList.add('active');

    // Анімуємо висоту
    animateHeight(tabContent, activeItem.offsetHeight);
  });
}

function animateHeight(element, height) {
  element.style.height = `${element.offsetHeight}px`;

  requestAnimationFrame(() => {
    element.style.height = `${height}px`;
  });
}

initTabs('.tabs');
