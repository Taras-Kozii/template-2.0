// ІНІЦІАЛІЗАЦІЯ Swiper
let myImageSlider = new Swiper('.image-slider', {
// СТРІЛКИ
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev'
},
// НАВІГАЦІЯ
// Буллети, поточне положення, прогрессбар(потрібно вибирати щось одне булети/фракція/прогресбар)
pagination: {
el: '.swiper-pagination',
// Буллети
type: 'bullets',
clickable: true,
// Динамические буллети
dynamicBullets: true,
// Кастомні буллети
renderBullet: function (index, className) {
return '<span class="' + className + '">' + (index + 1) + '</span>';
},
// Фракція
type: 'fraction',
// Кастомний вивід фракції
renderFraction: function (currentClass, totalClass) {
return 'Фото <span class="' + currentClass + '"></span>' +
' із ' +
'<span class="' + totalClass + '"></span>';
},
// Прогрессбар
//type: 'progressbar'
},
// Скроллбар
scrollbar: {
el: '.swiper-scrollbar',
// Перетягування скроллом
draggable: true
},
\*/

// Вкл/Викл перетягування на ПК
simulateTouch: true,
// Чутливість свайпа
touchRatio: 1,
// Кут спрацювання свайпа/перетягування
touchAngle: 45,
// Курсор перетягування
grabCursor: true,
// Перемикання при кліку на слайд
slideToClickedSlide: false,
// Навигація по хешу
hashNavigation: {
// Відстежування стану
watchState: true,
},

// КЕРУВАННЯ КЛАВІАТУРОЮ
keyboard: {
// Вкл\викл
enabled: true,
// Вкл\викл тільки коли слайдер в межах вьюпорта
onlyInViewport: true,
// Вкл\викл керування клавішами pageUp, pageDown
pageUpDown: true,
},

// КЕРУВАННЯ КОЛЕСОМ МИШІ
mousewheel: {
// Чутливісь колеса миші
sensitivity: 1,
// Клас обєкта на якому будет спрацьовувати прокрутка мишою.
//eventsTarget: ".image-slider"
},

// АВТОВИСОТА
autoHeight: false,

// К-СТЬ СЛАЙДІВ ДЛЯ ПОКАЗУ
slidesPerView: 3,

// Відключаємо слайдер якщо кадрів менше ніж потрібно
watchOverflow: true,

// Відступ між слайдами
spaceBetween: 30,

// К-сть слайдів які прогартуються за раз
slidesPerGroup: 1,

// Активний слайд по центру
centeredSlides: false,

// Стартовий слайд.
initialSlide: 0,

// Мультирядность
slidesPerColumn: 1,

// Безкінечний слайдер
loop: false,
// К-сть слайдів що дублюється
loopedSlides: 0,

// Вільний режим
freeMode: true,

// АВТОПРОКРУТКА
autoplay: {
// Пауза між прокрутками
delay: 1000,
// Закінчити на останньому слайді
stopOnLastSlide: true,
// Відключити після ручного перемикання
disableOnInteraction: false
},
\*/
// Швидкість
speed: 800,
// ВЕРТИКАЛЬНИЙ СЛАЙДЕР
direction: 'horizontal',

// ЕФЕКТИ ПЕРЕМИКАННЯ СЛАЙДІВ
// Листання
effect: 'slide',

// Зміна прозорості
effect: 'fade',
fadeEffect: {
// Параллельна зміна прозорості
crossFade: true
},

// Переворот
effect: 'flip',
flipEffect: {
// Тінь
slideShadows: true,
// Показ тільки активного слайда
limitRotation: true
},

// Куб
effect: 'cube',

    cubeEffect: {
    	// Тінь
    	slideShadows: true,
    	shadow: true,
    	shadowOffset: 20,
    	shadowScale: 0.94
    },

// Ефект потоку
effect: 'coverflow',
coverflowEffect: {
// Кут
rotate: 20,
// Накладення
stretch: 50,
// Тінь
slideShadows: true,
},

// БРЕЙК ПОІНТИ (АДАПТИВ)
// Ширина екрана
breakpoints: {
320: {
slidesPerView: 1,
},
480: {
slidesPerView: 2,
},
992: {
slidesPerView: 3,
}
},

    // Брейк поінти (адаптив)
    // Співвідношення сторін
    breakpoints: {
    	'@0.75': {
    		slidesPerView: 1,
    	},
    	'@1.00': {
    		slidesPerView: 2,
    	},
    	'@1.50': {
    		slidesPerView: 3,
    	}
    },

    // Викл предзагрузка картинок
    preloadImages: false,
    // Lazy Loading (підгрузка картинок)
    lazy: {
    	// Підвантаження на старті перемикання слайда
    	loadOnTransitionStart: false,
    	// Підвантажити попередню і наступну картинку
    	loadPrevNext: false,
    },
    // Споглядання за видимими слайдами
    watchSlidesProgress: true,
    // Додавання класу видимому слайду
    watchSlidesVisibility: true,

// ЗУМ КАРТИНКИ
zoom: {
maxRatio: 5,
minRatio: 1,
},

// МІНІАТЮРИ (превью)
thumbs: {
swiper: {
el: '.image-mini-slider',
slidesPerView: 5,
}
},

// Передача керування
controller: {
control: myTextSlider
},
\*/

// ОНОВЛЕННЯ СВАЙПЕРА
observer: true,

    // Оновити свайпер при зміні батьківських елементів слайдера
    observeParents: true,

    // при зміні дочірніх елементів слайдера
    observeSlideChildren: true,

// ВІРТУАЛЬНІ СЛАЙДИ
// формування слайдера
virtual: {
slides: (function () {
let slide = []
for (let i = 0; i < 500; i++) {
slide.push(`<div class="image-slider__text">Слайд №${i}</div>`);
}
return slide;
}()),
},
_/
/_
// Доступність
a11y: {
// Вкл/викл
enabled: true,
// Сообщения
prevSlideMessage: 'Previous slide',
nextSlideMessage: 'Next slide',
firstSlideMessage: 'This is the first slide',
lastSlideMessage: 'This is the last slide',
paginationBulletMessage: 'Go to slide {{index}}',
notificationClass: 'swiper-notification',
containerMessage: '',
containerRoleDescriptionMessage: '',
itemRoleDescriptionMessage: '',
// и т.д.
},

// СЛАЙДЕР В СЛАЙДЕРІ
new Swiper('.image-in-slider', {
// Курсор перетягування
grabCursor: true,
// Навигація
// пагінація, прогрессбар
pagination: {
el: '.swiper-pagination',
// Буллети
clickable: true,
},
// Коректна работа перетягування\свайпа для дочірного слайдера
nested: true,
});
_/
/_
// Еще один слайдер
let myTextSlider = new Swiper('.text-slider', {
// К-сть слайдів для показу
slidesPerView: 3,
// Відступ між слайдами
spaceBetween: 30,
});

// Передача керування
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;
\*/

/_
//ПАРАЛАКС СЛАЙДЕР
new Swiper('.parallax-slider', {
// Вкл параллакс
parallax: true,
// швидкість перемикання
speed: 2000,
// Стрілки
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev'
},
});
_/
/\*
// ПАРАМЕТРИ
let qSlides = myImageSlider.slides.length;

myImageSlider.params.speed = 3000;

// МЕТОДИ
// Оновити слайдер
myImageSlider.update();

// Перейти на слайд 2, швидкість 800
myImageSlider.slideTo(2, 800);

// ПОДІЇ
// Події зміни слайда
myImageSlider.on('slideChange', function () {
console.log('Слайд переключен');
});
\*/

/\*
// Запуск автоппрокрутки при наведені
let sliderBlock = document.querySelector('.image-slider');

// myImageSlider - змінна якій присвоєний слайдер

sliderBlock.addEventListener("mouseenter", function (e) {
myImageSlider.params.autoplay.disableOnInteraction = false;
myImageSlider.params.autoplay.delay = 500;
myImageSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
myImageSlider.autoplay.stop();
});

\*/

/\*
// Фракція
let mySliderAllSlides = document.querySelector('.image-slider**total');
let mySliderCurrentSlide = document.querySelector('.image-slider**current');

mySliderAllSlides.innerHTML = myImageSlider.slides.length;

myImageSlider.on('slideChange', function () {
let currentSlide = ++myImageSlider.realIndex;
mySliderCurrentSlide.innerHTML = currentSlide;
});
\*/
