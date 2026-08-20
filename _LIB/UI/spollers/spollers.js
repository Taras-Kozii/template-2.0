'use strict';

export function initSpollers() {
  const spollersBlock = document.querySelector('.spollers');
  if (!spollersBlock) {
    return null;
  }
  const spollersTitle = spollersBlock.querySelectorAll('.spoller__title');

  if (spollersTitle.length) {
    for (const title of spollersTitle) {
      title.addEventListener('click', e => {
        setActionSpoller(e);
      });
    }
  }

function setActionSpoller(e) {
  const isAccordion = spollersBlock.hasAttribute('data-accordion');
  
  if (isAccordion) {
    const prevSpoller = document.querySelector('.spoller.active');
    toggleSpoller(e);
    prevSpoller ? prevSpoller.classList.remove('active') : null;  
  } else {
    toggleSpoller(e);
  }
}

function toggleSpoller(e) {
  const spoller = e.target.closest('.spoller');
  spoller.classList.toggle('active');
}
}

initSpollers();