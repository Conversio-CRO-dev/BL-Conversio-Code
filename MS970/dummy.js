//Dummy


setTimeout(function(){
  
    let parentAccordion = document.querySelector('.b-details');
    let itemDetails = document.querySelectorAll('.b-details__item');
  
    let expand
    let info
    
    //Event listener to track carousels
            
      itemDetails.forEach(detail => {
              detail.addEventListener('click', function(){
              expand = detail.getAttribute('data-expanded');
              if(expand !== 'true'){
                info = detail.innerText
                       dataLayer.push({
                  'event': 'ConversioDYEvent',
                  'eventCategory': 'Conversio CRO',
                  'eventAction': 'MS970 | Event Tracking',
                  'eventLabel': 'MS970 (Control) | Carousel ' + info + ' open'
                  });
              } else {
                dataLayer.push({
                  'event': 'ConversioDYEvent',
                  'eventCategory': 'Conversio CRO',
                  'eventAction': 'MS970 | Event Tracking',
                  'eventLabel': 'MS970 (Control) | Carousel ' + info + ' closed'
                  });
              }
          })
       })
    
    //Track social icon clicks
    function showSocialIcons(){
      let socialIcons = document.querySelector('.js-share-list');
      let icon = document.querySelectorAll('.js-share-list a')
      icon.forEach((icon) => {
        let iconName = icon.classList[icon.classList.length -1].split('-')[1];
        icon.addEventListener('click', function(){
          dataLayer.push({
                'event': 'ConversioDYEvent',
                'eventCategory': 'Conversio CRO',
                'eventAction': 'MS970 | Event Tracking',
                'eventLabel': 'MS970 (Control) | Social icon ' + iconName + ' clicked'
                });
        })
      })
    }
    
    showSocialIcons();
    
    //Clone, add copy and make breadcrumbs button design, add clone further down PDP page
    
    function cloneCrumbs(){
      let breadCrumbs = document.querySelector('.b-breadcrumbs__list');
      let categories = breadCrumbs.children;
      categories.forEach((category) => {
        //Link click tracking
        category.addEventListener('click', function(){
            dataLayer.push({
                'event': 'ConversioDYEvent',
                'eventCategory': 'Conversio CRO',
                'eventAction': 'MS970 | Event Tracking',
                'eventLabel': 'MS970 (Control) | Breadcrumb link ' + category.innerText + ' clicked'
                });
        })
      })
    }
    
    cloneCrumbs();
    
  
},1000)


