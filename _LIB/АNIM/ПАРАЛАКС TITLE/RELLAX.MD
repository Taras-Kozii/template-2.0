https://github.com/dixonandmoe/rellax

https://dixonandmoe.com/rellax/ - DEMO

# HTML

<div class="rellax">
  I’m that default chill speed of "-2"
</div>
<div class="rellax" data-rellax-speed="7">
  I’m super fast!!
</div>
<div class="rellax" data-rellax-speed="-4">
  I’m extra slow and smooth
</div>

# SCRIPT

<script src="https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js"></script>
<script>
  // Accepts any class name
  var rellax = new Rellax('.rellax');
</script>

## ОПЦІЇ

<script>
  var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
</script>

### Speed

атрибут `data-rellax-speed` - швидкість елемента `.rellax`, відмінну від значення за замовчуванням (яке дорівнює -2). Від’ємне значення змусить елемент рухатися повільніше за звичайне прокручування, а додатне — швидше. Діапазоні від -10 до 10.
Атрибути швидкості під різні пристрої. За замовчуванням використовується налаштування data-relax-speed у невизначених точках зупинки.

<div class="rellax"
  data-rellax-speed="7"
  data-rellax-xs-speed="-5"
  data-rellax-mobile-speed="3"
  data-rellax-tablet-speed="-8"
  data-rellax-desktop-speed="1"
>
    I parallax at all different speeds depending on your screen width.
</div>

Передати масив точок зупинки. Кожне значення точки зупинки представляє роздільну здатність для мобільного пристрою, планшета та настільного комп'ютера відповідно.

<script>
  // This is the default setting
  var rellax = new Rellax('.rellax', {
    breakpoints: [576, 768, 1201]
  });
</script>

### Center

Існує два способи реалізації центрування: або на окремих елементах, або як глобальний параметр.

1. Поелементне центрування: додавання data-relax-percentage="0.5" до певного елемента html
<div class="rellax" data-rellax-percentage="0.5">
  I’m that default chill speed of "-2" and "centered"
</div>
<div class="rellax" data-rellax-speed="7" data-rellax-percentage="0.5">
  I’m super fast!! And super centered!!
</div>
<div class="rellax" data-rellax-speed="-4" data-rellax-percentage="0.5">
  I’m extra slow and smooth, and hella centered.
</div>
2. Глобальне центрування Щоб активувати функцію центрування у всьому HTML-файлі, додайте код до тегу <script> або JS-файлу:
<script>
  // Center all the things!
  var rellax = new Rellax('.rellax', {
    center: true
  });
</script>

### Wrapper

За замовчуванням положення елементів паралакса визначається позицією прокручування тіла. Передача властивості wrapper вкаже Rellax стежити за цим елементом.

<script>
  // Set wrapper to .custom-element instead of the body
  var rellax = new Rellax('.rellax', {
    wrapper: '.custom-element'
  });
</script>

### Z-index

Щоб відсортувати елементи в Z-просторі, ви можете скористатися властивістю data-relax-zindex

<div class="rellax">
  I’m that default chill speed of "-2" and default z-index of 0
</div>
<div class="rellax" data-rellax-speed="7" data-rellax-zindex="5">
  I’m super fast!! And on top of the previous element, I'm z-index 5!!
</div>

### Refresh

<script>
  // Start Rellax
  var rellax = new Rellax('.rellax');

  // Destroy and create again parallax with previous settings
  rellax.refresh();
</script>

### Destroy

<script>
  // Start Rellax
  var rellax = new Rellax('.rellax');

  // End Rellax and reset parallax elements to their original positions
  rellax.destroy();
</script>

### Callback

<script>
  // Start Rellax
  var rellax = new Rellax('.rellax-blur-card', {
    callback: function(positions) {
      // callback every position change
      console.log(positions);
    }
  });
</script>

### Horizontal Parallax

Горизонтальний паралакс вимкнено за замовчуванням. Ввімкнути його, передавши horizontal: true у блоці налаштувань. Ця функція призначена для веб-сайтів у панорамному стилі, де користувачі прокручують горизонтально, а не вертикально. Зверніть увагу, що це може працювати одночасно зі стандартним вертикальним паралаксом. Якщо ви цього не хочете, передавайте vertical: false у блоці налаштувань.

<script>
  // Adding horizantal parallax scrolling
  var rellax = new Rellax('.rellax', {
    // Activate horizantal scrolling
    // Turned off by default
    horizontal: true
    //Deactivate vertical scrolling
    vertical: false
  });
</script>
