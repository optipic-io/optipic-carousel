# OptiPic Carousel
Optimized lightweight scrollable carousel initiated by pure CSS.

* Initial initialization and rendering work on a pure CSS without using JS.
* JavaScript (jquery) used only on clicking buttons prev/next to scroll.
* Touchscreen supported: scroll works by sliding left/right on screen.

Example
```
<div class="optipic-carousel">
    <div class="optipic-carousel-ctrl prev">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
        </svg>
    </div>
    <div class="optipic-carousel-scrollable-line">
        <div class="optipic-carousel-element"></div>
        <div class="optipic-carousel-element"></div>
        <div class="optipic-carousel-element"></div>
        <div class="optipic-carousel-element"></div>
        <div class="optipic-carousel-element"></div>
        <div class="optipic-carousel-element"></div>
        <div class="optipic-carousel-element"></div>
        <div class="optipic-carousel-element"></div>
        <div class="optipic-carousel-element"></div>
        <div class="optipic-carousel-element"></div>
    </div>
    <div class="optipic-carousel-ctrl next">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
        </svg>
    </div>
</div>
```
