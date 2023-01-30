var waitFor$ = setInterval(function() {
  
    if (typeof $ != 'undefined') {
      let signUpButton = document.querySelector('.b-utility__registration');
      if(signUpButton !== null){
        dataLayer.push({
                  'event': 'ConversioDYEvent',
                  'eventCategory': 'Conversio CRO',
                  'eventAction': 'MS961 | Event Tracking',
                  'eventLabel': 'MS961 (Variation 2) | User not logged in'
                  });
        
        let signUp = document.querySelectorAll('.b-button__secondary')[0];
        signUp.addEventListener('click', function(){
          dataLayer.push({
                  'event': 'ConversioDYEvent',
                  'eventCategory': 'Conversio CRO',
                  'eventAction': 'MS961 | Event Tracking',
                  'eventLabel': 'MS961 (Variation 2) | Log in attempt'
                  });
  
        })
        basketTimerMsg();
    
      function basketTimerMsg(){
        if($(".custBasketTimerMsgAS").length == 0 && $(".b-cart__package .b-cart__pack .b-cart__items").length > 0){
            $('<div class="custBasketTimerMsgAS"><p><span class="icon"></span>Log in to save styles in your bag for longer.</p></div>').prependTo('.b-cart__package:eq(0) .b-cart__pack');
        }  
  
        if(jQuery('.b-cart .b-cart__package:first-child .b-cart__pack .b-cart__number:contains(Delivery package)').length == 0){
          jQuery('.b-cart__package:eq(0) .b-cart__pack').addClass('custDeliveryFlex');
        }else{
          jQuery('.b-cart__package:eq(0) .b-cart__pack').removeClass('custDeliveryFlex');
        }
      }
      
      if ($('.b-cart').length > 0) {
        setInterval(function(){
          if($(".custBasketTimerMsgAS").length == 0){
            basketTimerMsg();
            clearInterval();
          }
        }, 500);
      }
  
      clearInterval(waitFor$);
      } else {
     
          dataLayer.push({
                  'event': 'ConversioDYEvent',
                  'eventCategory': 'Conversio CRO',
                  'eventAction': 'MS961 | Event Tracking',
                  'eventLabel': 'MS961 (Variation 2) | User logged in'
                  });
                  
        clearInterval(waitFor$);
  
      }
      
  
    }
  
  }, 50);