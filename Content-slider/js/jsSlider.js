(function($){

	$.fn.jwSlider = function(options){
		var defaults = {
			speed : 1000,
			pause : 2000,
			transition : 'slide'
		},
		
		options = $.extend(defaults, options);

		this.each(function(){

			var $this = $(this);

			$this.wrap('<div class="slider-wrap"/>');

			$this.css({
				'width' :'99999px',
				'position' : 'relative',
				'padding' : 0
			});

			if(options.transition === 'slide'){
				$this.children().css({
					'float': 'left'
					'list-style' : 'none'
				});	

				$('slider.wrap').css({
					'width' : $this.children().width(),
					'overflow' : 'hidden'
				});
			}
			if(options.transitions === 'fade'){
				$this.children().css({
				'width' : $this.children().width(),
				'position' : 'absolute',
				'left' : 0
			});
				for(var i = $this.children().length - 1, y = 0; 1 >=0; i--, y++ {
					$this.children().eq(y).css('zIndex', i + 99999);
			}
		} //end slide
	});

}					

})(jQuery);