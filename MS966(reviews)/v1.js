window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'DY Event',
  'eventCategory': 'Conversio CRO',
  'eventAction': 'MS966 | Event Tracking',
  'eventLabel': 'MS966 (Personalisation) | Click reviews stars'
});

var waitForJQuery = setInterval(function() {
    if (typeof $ != 'undefined') {
       //begin experience code
       setTimeout(function(){
       updateReviewContent();
    }, 3000);
  	
  	function updateReviewContent(){
  	  	//add header cross icon 
  	  	if($(".custReviewClose").length == 0){
  	  		$('<div class="custReviewClose"></div>').appendTo('.b-reviews .pr-review-snapshot-header');
  	  	}
        
        //add Write a review CTA
        if($(".custWriteReviewBtn").length == 0){
        	$('<a class="custWriteReviewBtn">Write a review</a>').insertAfter(".b-reviews .p-w-r .pr-review-snapshot .pr-review-snapshot-simple .pr-review-snapshot-block .pr-review-snapshot-recomend");
        }

        //add overlay div
        if($(".custReviewOverlay").length == 0){
        	$('<div class="custReviewOverlay"></div>').prependTo('.b-reviews');
        }
        
      //update heading
  		$(".pr-review-snapshot-header-intro .pr-headline").text("Reviews");

  		$(".b-reviews .p-w-r .pr-review-snapshot .pr-review-snapshot-simple .pr-review-snapshot-block .pr-review-snapshot-recomend .pr-snippet-reco-to-friend .pr-reco-to-friend-message").text("would recommend this to a friend");

  	    $( ".p-w-r .pr-read-review .pr-review, .p-w-r .pr-review-display .pr-review" ).each(function( index ) {
  			var strSubmissionDateElement  	= $( this ).find(".pr-rd-author-submission-date"); 
  			var strElementToAppend  		= $(this).find(".pr-snippet-stars-png")
  			$(strSubmissionDateElement).appendTo(strElementToAppend);
  
  			if($( this ).find('.pr-rd-side-content-block').length > 0 && $( this ).find('.pr-rd-helpful-action').length > 0){
  				var strAuthBy 		= $( this ).find('.pr-rd-side-content-block');
  				var strHelpAction 	= $( this ).find('.pr-rd-helpful-action');
  				$(strAuthBy).insertBefore(strHelpAction);
  			}	
  	    });
  	}


	//On review filter change
	$(document).on("change", ".b-reviews .pr-review-display .pr-rd-review-header-sorts .pr-rd-sort-group #pr-rd-sort-by", function(){
			setTimeout(function(){
		    updateReviewContent();
			}, 500);
	});

    //On star rating and reviews click
	$(document).on("click", ".p-w-r .pr-snippet-stars-reco-inline.pr-snippet-compact,.b-rating .p-w-r .pr-snippet-read-and-write,.b-pdp .b-rating .pr-snippet .pr-snippet-stars-png", function(){
		if($(".b-rating .p-w-r .pr-snippet-review-count").text().trim()!= 'No Reviews'){
			updateReviewContent();
			$(".b-reviews").addClass("show");
			setTimeout(function(){
				$(".b-reviews .reviews").addClass("open");
			}, 50);
		}
	});

	//On close CTA click
	$(document).on("click", "#pr-reviewdisplay .custReviewClose,.custReviewOverlay", function(){
		$(".b-reviews .reviews").removeClass("open");
		setTimeout(function(){
			$(".b-reviews").removeClass("show");
		}, 250);

	});
	
	//On search CTA
	$(document).on('keypress',".pr-review-display #pr-rd-main-header .pr-rd-review-header-contents .pr-rd-search-container .pr-rd-search-reviews-input input",function(e) {
	    if(e.which == 13) {
	    	setTimeout(function(){
				updateReviewContent();
			}, 500);
	    }
	});


	//On review search close CTA and no result close CTA
	$(document).on("click", ".pr-rd-search-container .pr-rd-search-reviews-input .pr-rd-search-reviews-clear-button,.p-w-r .pr-review-display .pr-review-filter-info-bar .pr-filter-btn", function(){
			setTimeout(function(){
		    updateReviewContent();
			}, 500);
	});

	//Write a review CTA
	$(document).on('click',".custWriteReviewBtn", function(e) {
	    $(".b-reviews .p-w-r .pr-review-snapshot-snippets .pr-snippet-read-and-write .pr-snippet-write-review-link.pr-underline")[0].click();
	});


	//On page back
	if (performance.navigation.type == 2) {
        setTimeout(function(){
        	updateReviewContent();
        }, 2000);
    }
    
    //End experience code
 
    clearInterval(waitForJQuery);
  }
}, 50);