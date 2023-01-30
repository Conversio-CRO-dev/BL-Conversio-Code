//VARIATION 1

setTimeout(function(){
    let parentAccordion = document.querySelector('.b-details');
    let itemDetails = document.querySelector('.b-details__item');
    let subDetails = [];
    let clearPay = document.querySelector(".clearpay-widget");
    let klarna = document.querySelector(".js-klarna-block");
    let points = document.querySelector(".js-add-to-cart-messages");
    let infoCont = document.querySelector(".b-pdp__info");
    let descripTab
    points.style.marginTop = "20px"
    
    // If item is out of stock do not append klarna and clearpay as it will be = null
    if(document.querySelector("div.b-pdp__addToCart > div > div > div > button").innerText !== "EMAIL ME WHEN AVAILABLE"){
    
    if(klarna !== null){
      infoCont.append(klarna);
    } 
    
    if(clearPay !== null){
      infoCont.append(clearPay);
    }
    
  } else {
    itemDetails.style.marginTop = "-25px";
    itemDetails.style.marginBottom = "25px";
    points.style.marginBottom = "20px";
  }
    
    //Making sure points is appended after klarna + clearpay
    infoCont.append(points);
    
    //Add category to accordion(See More)
    function addCategory(){
      let cloneDetails = itemDetails.cloneNode(true);
      itemDetails.classList.add('see_more');
      itemDetails.innerHTML = `\n<div class="b-details__title b-accordion__item__title" data-js-accordion-control="" tabindex="0" role="button" aria-expanded="false">\nSee More Information\n</div>\n<div class="b-details__content b-accordion__item__content">\n<div class="js-short-description-container js-outline-control" tabindex="-1"></div>\n</div>\n`;
      itemDetails.insertAdjacentElement('afterend', cloneDetails);
    }
    
    addCategory();
    
    // Hide details list
    function hideDetails(){
      let allDetails = document.querySelectorAll('.b-details__item');
    allDetails.forEach(detail => {
        if(!detail.classList.contains('see_more')){
            subDetails.push(detail)
            console.log(subDetails)
            
        }
    });
    
    subDetails.forEach(detail => {
        detail.style.marginLeft = '10px';
        detail.style.display = 'none';
    })
    
    subDetails[0].style.borderTop = 'none';
    }
    
    hideDetails();
    
    let expand 
    let subExpand
    let subInfo
    let counter = 0
    
    //Event listener to display or hide subdetails
    itemDetails.addEventListener('click', function(){
        
        expand = itemDetails.getAttribute('data-expanded');
        if(expand !== 'true'){
          if(counter === 0){
            setTimeout(function(){
              // Only expanding description tab on first click of see more
              subDetails[0].children[0].click();
            },100)
            counter += 1
          }
          dataLayer.push({
                'event': 'ConversioDYEvent',
                'eventCategory': 'Conversio CRO',
                'eventAction': 'MS970 | Event Tracking',
                'eventLabel': 'MS970 (Variation 1) | Carousel ' + itemDetails.innerText + ' open'
                });
                
          subDetails.forEach(detail => {
                  detail.style.display = 'block';
                  detail.addEventListener('click', function(){
                  subExpand = detail.getAttribute('data-expanded');
                  if(subExpand !== 'true'){
                    subInfo = detail.innerText
                           dataLayer.push({
                      'event': 'ConversioDYEvent',
                      'eventCategory': 'Conversio CRO',
                      'eventAction': 'MS970 | Event Tracking',
                      'eventLabel': 'MS970 (Variation 1) | Carousel ' + subInfo + ' open'
                      });
                  } else {
                    dataLayer.push({
                      'event': 'ConversioDYEvent',
                      'eventCategory': 'Conversio CRO',
                      'eventAction': 'MS970 | Event Tracking',
                      'eventLabel': 'MS970 (Variation 1) | Carousel ' + subInfo + ' closed'
                      });
                  }
              })
           })
                
        } else {
          
           dataLayer.push({
                'event': 'ConversioDYEvent',
                'eventCategory': 'Conversio CRO',
                'eventAction': 'MS970 | Event Tracking',
                'eventLabel': 'MS970 (Variation 1) | Carousel ' + itemDetails.innerText + ' closed'
                });
                
            subDetails.forEach(detail => {
              detail.style.display = 'none'
            })
        }
    })
    
    //permanently show social icons and add margin to each icon
    function showSocialIcons(){
      let socialIcons = document.querySelector('.js-share-list');
      socialIcons.setAttribute('id', 'show');
      let icon = document.querySelectorAll('.js-share-list a')
      icon.forEach((icon) => {
        let iconName = icon.classList[icon.classList.length -1].split('-')[1];
        icon.addEventListener('click', function(){
          dataLayer.push({
                'event': 'ConversioDYEvent',
                'eventCategory': 'Conversio CRO',
                'eventAction': 'MS970 | Event Tracking',
                'eventLabel': 'MS970 (Variation 1) | Social icon ' + iconName + ' clicked'
                });
        })
      })
    }
    
    showSocialIcons();
    
    //Clone, add copy and make breadcrumbs button design, add clone further down PDP page
    
    function cloneCrumbs(){
      let breadCrumbs = document.querySelector('.b-breadcrumbs--product');
      let cloneCrumbs = breadCrumbs.cloneNode(true);
      let mainContainer = document.querySelector('.b-pdp__main');
      let crumbList = cloneCrumbs.children[0].children[0]
      //Move cloned crumbs further down PDP
      mainContainer.appendChild(cloneCrumbs);
      
      // //Add an ID to links to override JS styling
      crumbList.setAttribute('id','button-crumbs')
      let cloneCategories = crumbList.children
       
      //Alter each link depending on position
      cloneCategories.forEach((category, i) => {
        if(i ===  0 || i === cloneCategories.length -1){
            category.setAttribute('id','hide-link');
        } else if(i === cloneCategories.length -2){
          categoryInner = category.children[0];
          category.setAttribute('id','link-crumbs');
          let pageHeading = categoryInner.innerText
          categoryInner.childNodes[1].innerText = 'see more ' + pageHeading
        } else {
            category.setAttribute('id','link-crumbs');
            let pageHeading = category.innerText
            //category.innerText = `see more ` + pageHeading;
            category.childNodes[1].innerText = 'see more ' + pageHeading
        }
        
        //Link click tracking
        category.addEventListener('click', function(){
            dataLayer.push({
                'event': 'ConversioDYEvent',
                'eventCategory': 'Conversio CRO',
                'eventAction': 'MS970 | Event Tracking',
                'eventLabel': 'MS970 (Variation 1) | Breadcrumb link ' + category.innerText + ' clicked'
                });
        })
      })
    }
    
    cloneCrumbs();
    
    
    
  
},1000)