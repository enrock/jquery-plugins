
	(function( $ ){ //add '$' as perameter to ensure it will work
		'use strict';

		$.fn.equalizeHeight = function(){ //this line makes it a plugin

		var tallestHeight = 0,
			$stories = this;
		
		$stories.each(function (i, el) {
			var elHeight = $(el).outerHeight();
			
			if (elHeight > tallestHeight) {
				tallestHeight = elHeight;
			}
		});
		
		$stories.css('min-height', tallestHeight);
		return $stories;
		}
	}( jQuery ));



	$(document).ready(function (){
		'use strict';
		
		// want this:
		$('#stories-1')
		.find('.story')
		.equalizeHeight();
		
		$('#stories-2')
		.find('.story')
		.equalizeHeight();
	});
