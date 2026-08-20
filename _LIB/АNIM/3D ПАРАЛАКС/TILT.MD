TILT ПАПКУ tilt перемістити в папку scripts/effects

https://micku7zu.github.io/vanilla-tilt.js/

<body>
<div class="your-element" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500"></div>

<!-- at the end of the body -->
<script type="text/javascript" src="vanilla-tilt.js"></script>
<script type="text/javascript">
    VanillaTilt.init(document.querySelectorAll(".your-element"), {
      max: 25,
      speed: 400
    });
</script>
</body>

# **JS в main.js**

import { VanillaTilt } from './effects/tilt/vanilla-tilt.js';

VanillaTilt.init(document.querySelectorAll('.categories_img img'), {
max: 20,
speed: 300,
glare: true,
'max-glare': 0.5,
'glare-prerender': true,
});

VanillaTilt.init(document.querySelectorAll('.categories_img img'), {
reverse: false, // змінити напрямок нахилу
max: 35, // max tilt обертання градуси
startX: 0,
startY: 0,
perspective: 1000, // Трансформуйте перспективу, чим нижча, тим більшим стає нахил.
scale: 1,
speed: 300, // Швидкість переходу вхід/вихід
transition: true,
axis: null, // Яку вісь слід увімкнути. Може бути "x" або "y"
reset: true, // Якщо ефект нахилу потрібно скинути на виході.
"reset-to-start": true, // Чи буде скидання виходу до [0,0] (за замовчуванням) чи [startX, startY]
easing: "cubic-bezier(.03,.98,.52,.99)", // Полегшення входу/виходу.
glare: false, // якщо це має мати ефект "відблиску"
"max-glare": 1, // сила блиску "glare" opacity (1 = 100%, 0.5 = 50%)
"glare-prerender": false, // false = VanillaTilt створює елементи блисків за вас
// you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
"mouse-event-element": null, // ss-селектор або посилання на HTML-елемент, що буде прослуховувати події миші
gyroscope: true, // Boolean для ввімкнення/вимкнення визначення орієнтації пристрою,
gyroscopeMinAngleX: -45,
gyroscopeMaxAngleX: 45,
gyroscopeMinAngleY: -45,
gyroscopeMaxAngleY: 45,
});

### ПАРАЛАКС ЕФЕКТ

1. Add
   transform-style: preserve-3d
   to your tilt element.
2. Add
   transform: perspective(1000px);
   to your tilt element. (1000px is default perspective, but can be changed)
3. Add a
   transform: translateZ(20px)
   to your inner elements that have to pop out.

### БЛИСК

  <div data-tilt data-tilt-glare data-tilt-max-glare="0.8"></div>

### ЗВОРОТНИЙ НАХИЛ

<div data-tilt data-tilt-reverse="true"></div>

### KEEP FLOATING

Після того як забрати мишку нахил не повернеться до початкового положення

<div data-tilt data-tilt-reset="false"></div>

### FULL PAGE LISTENING

Встановлення цієї опції призведе до того, що елемент реагуватиме на будь-які рухи миші на сторінці.

<div data-tilt data-tilt-full-page-listening></div>

### SCALE ON HOVER

<div data-tilt data-tilt-scale="1.1"></div>

### START POSITION

Встановлення цієї опції призведе до нахилу елемента на певні градуси під час завантаження сторінки.

<div data-tilt data-tilt-startX="20" data-tilt-startY="-20" data-tilt-reset-to-start="true"></div>

### ВИМКНЕННЯ ОСІ Х

<div data-tilt data-tilt-axis="y"></div>

### ВИМКНЕННЯ ОСІ У

<div data-tilt data-tilt-axis="x"></div>
