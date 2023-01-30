let experienceInterval = setInterval(beginExperience, 50);

function beginExperience() {
  var snazzy = "background:red;padding:15px;color:white; text-size:large";
  console.log('%cExperience Initiated', snazzy);
  console.log('%cTrying script', snazzy);
    var zoomImages = document.querySelectorAll('.js-zoom-wrapper');
    if (zoomImages.length) {
      clearInterval(experienceInterval);
      console.log('%cImages Loaded', snazzy);
      
      var imageContainer = document.querySelector(".b-images__main");
      imageContainer.style.pointerEvents = "none"
      
      console.log('%cPointer Events set to none', snazzy);
      console.log('%cdata component options removed from container', snazzy);
        zoomImages.forEach(image => {
            image.removeAttribute('data-component');
            console.log('%cdata component removed from an image', snazzy);
        });
        
          imageContainer.style.pointerEvents = "auto";
        console.log('%cPointer events reactivated', snazzy);
        
         var sizeButtons = document.querySelectorAll('.b-attribute__option');
        sizeButtons.forEach(button => {
          button.addEventListener('click', function(){
            setTimeout(beginExperience,500)
          })
        })
        
        
    } else {
    console.log('%cWaiting for images', snazzy);
    }
}




// let mainContainer = document.querySelector('.b-images__main');
// const observer = new MutationObserver(records => {
//   console.log(records)
//   let zoomImages = document.querySelectorAll('.js-zoom-wrapper');
//     if (zoomImages.length) {
//       clearInterval(experienceInterval);
//       console.log('%cImages Loaded', snazzy);
      
//       let imageContainer = document.querySelector("#maincontent .b-pdp .b-pdp__images .b-images__main");
//       imageContainer.style.pointerEvents = 'none'
      
//       console.log('%cPointer Events set to none', snazzy);
//       // imageContainer.onwheel = function(e) {
//       //       window.scrollTo(window.scrollX + e.deltaX, window.scrollY + e.deltaY);
//       //   };
//         // imageContainer.removeAttribute('data-component-options');
//         console.log('%cdata component options removed from container', snazzy);
//         zoomImages.forEach(image => {
//             image.removeAttribute('data-component');
//             // image.removeAttribute('data-component-id');
//             console.log('%cdata component removed from an image', snazzy);
//         });
        
//           imageContainer.style.pointerEvents = 'unset';
//         console.log('%cPointer events reactivated', snazzy);
        
//     } else {
//     console.log('%cWaiting for images', snazzy);
//     }
// });

// observer.observe(mainContainer, {
//   childList:true,
//   subtree:true
// })