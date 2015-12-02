var IMAGE_PADDING = 5;

$(window).on("load", function(){
	$(".thumb-gallery img").each(function(){
			var height = $(this).height();
			var parent = $(this).parent();
			parent.height(height + IMAGE_PADDING);
		
	});
});


$(document).ready(function(){
	
		$(".thumb-gallery li").hover(function(){

				var title = $(this).data("title") !== undefined ? $(this).data("title") : "";
				var titleElement = $('<div class="thumb-gallery-title">'+title+'</div>');
				$(this).append(titleElement);
				titleElement.css("top",($(this).height() - titleElement.height())/2.0);
				titleElement.css("left",($(this).width() - titleElement.width())/2.0);
				titleElement.css("max-width",$(this).width());
			titleElement.fadeIn(700);
			
		},function(){
			$(this).children(".thumb-gallery-title").remove();
		});
	
});
