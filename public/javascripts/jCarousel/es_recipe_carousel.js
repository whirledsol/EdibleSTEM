(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');
		var SCREEN_WIDTH_LG = 1200;
		var SCREEN_WIDTH_MD = 992;
		var SCREEN_WIDTH_SM = 768;
		var VIEWABLE_ITEMS_LG = 4;
		var VIEWABLE_ITEMS_MD = 3;
		var VIEWABLE_ITEMS_SM = 2;
		var VIEWABLE_ITEMS_XS = 1;
		
        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this);
                
				
				//width of the carousel
				var width = carousel.innerWidth();

					
                if (width >= SCREEN_WIDTH_LG) {
                    width = width / VIEWABLE_ITEMS_LG;
                } else if (width >= SCREEN_WIDTH_MD) {
                    width = width / VIEWABLE_ITEMS_MD;
                } else if (width >= SCREEN_WIDTH_SM) {
                    width = width / VIEWABLE_ITEMS_SM;
                } else if (width < SCREEN_WIDTH_SM) {
                    width = width / VIEWABLE_ITEMS_XS;
                }
				//width becomes the width of each li
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);