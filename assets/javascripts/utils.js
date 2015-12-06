
jQuery.fn.extend({
  loading: function(message,spinclass) {
	message = message === undefined  ? "Loading..." : message;
	spinclass = spinclass === undefined  ? "fa fa-spinner fa-spin fa-2x" : spinclass;
	var images = this;
	var elementCount = this.length;
	var numLoaded = 0;
	
	var checkImageState = function(){
		if(numLoaded == elementCount){
			$(images).animate({opacity:1},2000,function(){
					$(".loading").remove();	
			});
		}
	};
	

	var loadingHtml = '<div class="loading"><div><div>'+message+'</div><div class="'+spinclass+'"></div><div></div>';
	$(loadingHtml).appendTo("body");

	
	$(this).each(function(){
		if(this.complete){
			numLoaded++;
			checkImageState();
		}
		else{
			$(this).on("load",function(){
				numLoaded++;
				checkImageState();
			});
		}

	});
	
	return true;
  }
});