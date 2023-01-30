let experienceInterval = setInterval(beginExperience, 50);

function beginExperience() {
    let zoomImages = document.querySelectorAll('.js-zoom-wrapper');
    if (zoomImages.length) {
        let imageContainer = document.querySelector("#maincontent .b-pdp .b-pdp__images .b-images__main");
        clearInterval(experienceInterval);
        imageContainer.style.pointerEvents = 'none';
        imageContainer.onwheel = function(e) {
            window.scrollTo(window.scrollX + e.deltaX, window.scrollY + e.deltaY);
        };
        imageContainer.removeAttribute('data-component-options');
        zoomImages.forEach(image => {
            image.removeAttribute('data-component');
            image.removeAttribute('data-component-id');
        });
        imageContainer.style.pointerEvents = 'auto';
    }
}