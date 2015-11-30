var IMAGE_PADDING = 5;

$(window).on("load", function(){
	$(".thumb-gallery img").each(function(){
			var height = $(this).height();
			var parent = $(this).parent();
			parent.height(height + IMAGE_PADDING);
		
	});
});


$(document).ready(function(){
	
		$(".thumb-gallery img").hover(function(){
			var parent = $(this).parent();
			var title = $(this).data("title");
			if(title !== undefined){
				var titleElement = $('<div class="thumb-gallery-title">'+title+'</div>');
				parent.append(titleElement);
				titleElement.css("top",(parent.height() - titleElement.height())/2.0);
				titleElement.css("left",(parent.width() - titleElement.width())/2.0);
				titleElement.css("max-width",parent.width());
				
				
				titleElement.fadeIn(700);
			}
		},function(){
			console.dir($(".thumb-gallery-title:hover"));
			if($(".thumb-gallery-title:hover").length == 0){
				var parent = $(this).parent();
				parent.children(".thumb-gallery-title").remove();
			}
		});
	
});
