
jQuery.fn.extend({
  loading: function(message,spinclass) {
	message = message === undefined  ? "Loading..." : message;
	spinclass = spinclass === undefined  ? "fa fa-spinner fa-spin fa-2x" : spinclass;
	return this.each(function() {
	

	if($(".loading").length == 0){
		var html = '<div class="loading"><div>'+message+'</div><div class="'+spinclass+'"></div></div>';
		$(html).appendTo(this);
	}
	$(this).filter("img").on("load",function(){
		alert("loaded");
		$(this).show();
		$(".loading").remove();
		
		
	});
	
	});
  }
});