// MS973

let pageLinks

setTimeout(function(){
  //Seperating text of anchors with a Span
function getLinkText(){
  let navLinks = document.querySelectorAll('.b-nav__link');
navLinks.forEach(link => {
link.innerHTML = `<span class = "link_page js-menu-item-link">`+link.innerHTML+`</span>`;
console.log(link.innerHTML)   
})

pageLinks = document.querySelectorAll('.link_page');
}

getLinkText();

//Adding specific page links to each created span
function addPageLinks(){
  pageLinks.forEach(link => {
    link.addEventListener('click', function(e){
      //Prevent dropdown links from triggering
        e.stopImmediatePropagation();
        
        // Link to relevant pages
        link.innerText === 'WOMEN' ? location.href = 'https://www.monsoon.co.uk/womens/' : link.innerText === 'CHILDREN' ? location.href = 'https://www.monsoon.co.uk/children/' : link.innerText === 'BRANDS BAZAAR' ? location.href = 'https://www.monsoon.co.uk/bazaar/' : link.innerText === 'CHRISTMAS' ? location.href = 'https://www.monsoon.co.uk/christmas/' : link.innerText === 'WEDDING' ? location.href = 'https://www.monsoon.co.uk/wedding-occasion/' : link.innerText === 'SALE' ? location.href = 'https://www.monsoon.co.uk/sale/' : location.href = 'https://www.monsoon.co.uk/womens/womens-clothing/new-in-womens-clothing/'
        
        //Tracking
           dataLayer.push({
            'event': 'ConversioDYEvent',
            'eventCategory': 'Conversio CRO',
            'eventAction': 'MS973 | Event Tracking',
            'eventLabel': 'MS973 (Variation 1) | Top Level Nav | Landing Page Link Clicks'
            });
    })  
})
}

addPageLinks();

// Add tracking to all dropdown links
function trackSubLinks(){
    let subLinks = document.querySelectorAll('.b-flyout__link');
    subLinks.forEach(link => {
        link.addEventListener('click', function(){
            dataLayer.push({
                'event': 'ConversioDYEvent',
                'eventCategory': 'Conversio CRO',
                'eventAction': 'MS973 | Event Tracking',
                'eventLabel': 'MS973 (Variation 1) | Top Level Nav | Dropdown Link Clicks'
                });
        })
    })
}

trackSubLinks();

}, 1000)