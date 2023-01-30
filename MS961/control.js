var waitFor$ = setInterval(function() {
  
    if (typeof $ != 'undefined') {
      let signUpButton = document.querySelector('.b-utility__registration');
      if(signUpButton !== null){
        dataLayer.push({
                  'event': 'ConversioDYEvent',
                  'eventCategory': 'Conversio CRO',
                  'eventAction': 'MS961 | Event Tracking',
                  'eventLabel': 'MS961 (Control) | User not logged in'
                  });
        
        let signUp = document.querySelectorAll('.b-button__secondary')[0];
        signUp.addEventListener('click', function(){
          dataLayer.push({
                  'event': 'ConversioDYEvent',
                  'eventCategory': 'Conversio CRO',
                  'eventAction': 'MS961 | Event Tracking',
                  'eventLabel': 'MS961 (Control) | Log in attempt'
                  });
  
        })
        clearInterval(waitFor$);
      } else {
     
          dataLayer.push({
                  'event': 'ConversioDYEvent',
                  'eventCategory': 'Conversio CRO',
                  'eventAction': 'MS961 | Event Tracking',
                  'eventLabel': 'MS961 (Control) | User logged in'
                  });
                  
           clearInterval(waitFor$);
                  
  
      }
      
  
    }
  
  }, 50);