var container = document.createElement('div');
container.setAttribute('id', 'customSwiperContainer');

(function insertContainer() {
    if ( document.querySelector("#maincontent > .product-detail > .b-breadcrumbs--product") ) {
        var breadcrumbs = document.querySelector("#maincontent > .product-detail > .b-breadcrumbs--product");
        breadcrumbs.after(container);
    } else {
        setTimeout(insertContainer, 100)
    }
})();

(function waitForRecs() {
    if ( document.querySelector("#cq_recomm_slot-8d7e0282e683cd19c190db9974") ) {
        if ( document.querySelector("#cq_recomm_slot-8d7e0282e683cd19c190db9974").innerHTML.length > 1000 ) {
            init()
        } else {
            setTimeout(waitForRecs, 500);
        }
    } else {
        setTimeout(waitForRecs, 200);
    }
})();

function init() {
    var recs = document.getElementById('cq_recomm_slot-8d7e0282e683cd19c190db9974');
    var clone = recs.cloneNode(true);
    clone.id = 'customSwiper';
    clone.querySelectorAll('script').forEach(function(e){e.remove()})
    clone.querySelectorAll(".swiper-slide .b-tile__body .b-tile__price > .b-tile__button").forEach(function(e){e.remove()});
    document.getElementById('customSwiperContainer').append(clone);
    document.querySelector("#customSwiper > div > h2").classList.add('b-accordion__item__title');
    document.querySelector('#customSwiper > .swiper-content').classList.add('b-accordion__item--expanded');
    document.querySelector("#customSwiper > div > h2").addEventListener('click', toggleCustomSwiper);

}