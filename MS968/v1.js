setTimeout(function(){
    let anchors = document.querySelectorAll('a');
    anchors.forEach(a => {
      if(a.href === "https://www.monsoon.co.uk/klarna-landing-page.html"){
          a.parentNode.innerHTML = '<a class="text-decoration-none text-white b-font__regular" href="https://help.monsoon.co.uk/hc/en-gb/articles/115002364329-What-Are-Your-UK-And-ROI-Delivery-Options-" rel="noreferrer"><span class="text-uppercase">FREE</span> standard delivery on orders over £50 </a>'
      }
      if(a.href.indexOf('help.monsoon') > -1){
        a.addEventListener('click', function(){
           dataLayer.push({
        'event': 'ConversioDYEvent',
        'eventCategory': 'Conversio CRO',
        'eventAction': 'MS968 | Event Tracking',
        'eventLabel': 'MS968 Variation 1 | Click on help.monsoon' 
    });
        })
      }
    })
  },2000)
  
  
  
  
  
  // let observer = new IntersectionObserver(function(entries){
  //       if(entries[0].isIntersecting === true){
  //         formTop.appendChild(colors);
  //         colors.style.justifyContent = "left"
  //         newDiv.style.display = "none"
  //       }
  //     },{ threshold:[1]});
      
  //     observer.observe(formTop)