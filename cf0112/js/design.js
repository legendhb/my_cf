$(function(){

	$(".js-rank").each(function(i) {
		$(this).find('li').each(function(j) {
			j = j + 1;
			$('em', $(this)).text(j);
		});
		$(this).find('li:eq(0)').addClass("top");
		$(this).find('li:eq(1)').addClass("top");
		$(this).find('li:eq(2)').addClass("top");
		$(this).find('li:last').addClass("border-none");
	});

	if($('.js-hover').length>0){
		$(".js-hover li").hover(
		  function () {
			$(this).addClass("hover");
		  },
		  function () {
			$(this).removeClass("hover");
		  }
		);
	};

	if($('.js-last').length>0){
		$('.js-last').each(function() {
			$(this).find('li:last').addClass('last')
		});
	};

	if($('.pn-focus').length>0){
		$(".gb-tab:eq(0)", $(this)).tabs($(".gb-tab-pn:eq(0) > div", $(this)), {
			event:'mouseover',
			effect: 'fade',
			fadeOutSpeed:'300',
			rotate: true
		}).slideshow();
		$(".gb-tab:eq(0)", $(this)).data("slideshow").play();
	};

	if($('.js-tab').length>0){
		(function(){
			$(".js-tab").each(function() {		
				$(".gb-tab:eq(0)", $(this)).tabs($(".gb-tab-pn:eq(0) > div", $(this)), {
					event: 'tabOn'
				});
			});	
			
			var st;
			$('.js-tab .gb-tab li').each(function(i, el) {
				var $this = $(this);
				$this.find('a').mouseenter(function(e) {
					st = setTimeout(function(){
						$this.find('a').trigger('tabOn');
					}, 300);
				}).mouseout(function(e) {
					clearTimeout(st);
				}).click(function(){
					$this.find('a').trigger('tabOn');
				});
			});
		})();
	};

	if($('.js-tab1').length>0){
		$(".js-tab1").each(function() {
			$(".gb-tab:eq(0)", $(this)).tabs($(".gb-tab-pn:eq(0) > div", $(this)), {
				event: 'click'
			}).slideshow();
		});
	};


});