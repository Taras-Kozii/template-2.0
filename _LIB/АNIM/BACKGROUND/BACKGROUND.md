JARALLAX

https://github.com/nk-o/jarallax/blob/master/README.md

Паралакс-прокрутка для сучасних браузерів. Підтримуються теги <img>, фонові зображення, YouTube, Vimeo та відео, розміщені на власному хостингу.

<!-- Jarallax CSS -->
<link href="https://cdn.jsdelivr.net/npm/jarallax@3/dist/jarallax.min.css" rel="stylesheet">

<!-- Jarallax JS -->
<script src="https://cdn.jsdelivr.net/npm/jarallax@3/dist/jarallax.min.js"></script>

<!-- Jarallax JS: Optional video extension -->
<script src="https://cdn.jsdelivr.net/npm/jarallax@3/dist/jarallax-video.min.js"></script>


HTML
<!-- Background Image Parallax -->
<div class="jarallax">
  <img class="jarallax-img" src="<background_image_url_here>" alt="">
  Your content here...
</div>

<!-- Background Image Parallax with <picture> tag -->
<div class="jarallax">
  <picture class="jarallax-img">
    <source media="..." srcset="<alternative_background_image_url_here>">
    <img src="<background_image_url_here>" alt="">
  </picture>
  Your content here...
</div>

<!-- Alternate: Background Image Parallax -->
<div class="jarallax" style="background-image: url('<background_image_url_here>');">
  Your content here...
</div>

Run Jarallax

A. JavaScript way

jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.2,
});

B. Data attribute way

<div data-jarallax data-speed="0.2" class="jarallax">
  <img class="jarallax-img" src="<background_image_url_here>" alt="">
  Your content here...
</div>

Options

Name	Type	Default	Description
type	string	scroll	scroll, scale, opacity, scroll-opacity, scale-opacity.
speed	float	0.5	Parallax effect speed. Provide numbers from -1.0 to 2.0.
containerClass	string	jarallax-container	Container block class attribute.
imgSrc	path	null	Image url. By default used image from background.
imgElement	dom / selector	.jarallax-img	Image tag that will be used as background.
imgSize	string	cover	Image size. If you use <img> tag for background, you should add object-fit values, else use background-size values.
imgPosition	string	50% 50%	Image position. If you use <img> tag for background, you should add object-position values, else use background-position values.
imgRepeat	string	no-repeat	Image repeat. Supported only background-position values.
keepImg	boolean	false	Keep <img> tag in it's default place after Jarallax inited.
elementInViewport	dom	null	Use custom DOM / jQuery element to check if parallax block in viewport. More info here - Issue 13.
zIndex	number	-100	z-index of parallax container.
disableParallax	boolean / RegExp / function	-	Disable parallax on specific user agents (using regular expression) or with function return value. The image will be set on the background.