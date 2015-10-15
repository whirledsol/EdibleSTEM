/*
 * hoverScroll
 */
(function ($) {
		jQuery.fn.extend({
		  hoverScroll: function(options) {
		  
			//CONSTANTS AND IMPORTANT VARIABLES
			var element = $(this);
			var VIEW_WIDTH = element.outerWidth();
			var VIEW_HEIGHT = 0; //dynamic
			var CONTENT_WIDTH = 0; //dynamic
			var rate_temp = 0;
			var sliding_timer = null;
						
			//OPTIONS
			var _options = new Object();

			_options.outside = options.insideout === undefined ? "IN" : options.insideout.toUpperCase();
			_options.outside = _options.outside == "OUT" ? true : false;
			
			_options.rate = options.rate === undefined ? 5 : options.rate;//ms, the interval between jumps (less is faster)
			_options.jump = options.jump === undefined ? 2 : options.jump;//px, the number of pixels the slide jumps (more is faster)
			_options.event = options.jump == "click" ? "click" : "hover";
			_options.customClass = options.customClass === undefined ? element.attr("id") : options.customClass;//custom class prefix
			_options.hotspotwidth = options.hotspotsize === undefined ? VIEW_WIDTH * 0.1 : options.hotspotsize;
			_options.slidey = options.slidey === undefined ? false : true;
			_options.extraWidth = options.extraWidth === undefined ? 0 : parseFloat(options.extraWidth);
			_options.hotspotleftHTML = options.hotspotleftHTML === undefined ? "" : options.hotspotleftHTML;
			_options.hotspotrightHTML = options.hotspotrightHTML === undefined ? "" : options.hotspotrightHTML;
			
			var CONTENT_DIV_ID = _options.customClass +"Contents";
			var HOTSPOT_ID = _options.customClass+"Hotspot";						
			if (_options.event == "click"){
				var HOTSPOT_EVENT = "mousedown";
				var HOTSPOT_EVENT_END = "mouseup"	
			}
			else if (_options.event == "hover"){
				var HOTSPOT_EVENT = "mouseenter";
				var HOTSPOT_EVENT_END = "mouseleave"
			}

			//set required element css
			element.css("overflow","hidden");
			element.css("position","relative");
			
			//rearrange html structure
			var contents = element.html();
			element.empty();
			
			var contentdiv = jQuery('<div/>', {
				id: CONTENT_DIV_ID,
				text: contents
			});
			contentdiv.html(contents);
			contentdiv.css("margin",0);
			contentdiv.css("padding",0);	
			contentdiv.css("overflow","hidden");
			element.append(contentdiv);
			
			//set the dynamic width
			var contents = $(contentdiv).children();

			$(contents).each(function(index){
				//console.dir(this);
				$(this).css("display","block");
				$(this).css("float","left");
				CONTENT_WIDTH  += $(this).outerWidth() + parseFloat($(this).css("margin-left")) + parseFloat($(this).css("margin-right"));
			})
			CONTENT_WIDTH += _options.extraWidth;
			contentdiv.css("width",CONTENT_WIDTH);
			contentdiv.css("position","relative");
			contentdiv.css("top",0);
			contentdiv.css("left",0);
		
			VIEW_HEIGHT  = element.outerHeight();

			
			//add hotspots
			var hotspotleft = jQuery('<div/>', {
				id: HOTSPOT_ID+"Left",
				html: _options.hotspotleftHTML
			});
			hotspotleft.css("position","absolute");
			hotspotleft.css("width",_options.hotspotwidth+"px");
			hotspotleft.css("height",VIEW_HEIGHT+"px");
			hotspotleft.css("top",0);
			hotspotleft.css("left",0);
			hotspotleft.css("margin",0);
			
			hotspotleft.css("border-bottom-right-radius",_options.hotspotwidth +"px " + (VIEW_HEIGHT/2.0) + "px");
			hotspotleft.css("border-top-right-radius",_options.hotspotwidth +"px " + (VIEW_HEIGHT/2.0) + "px");
			
			if(_options.outside){
				hotspotleft.css("margin-left",-_options.hotspotwidth);
			}
			hotspotleft.css("cursor","pointer");
			hotspotleft.css("z-index","4000");
			element.prepend(hotspotleft);
			
			var hotspotright = jQuery('<div/>', {
				id: HOTSPOT_ID+"Right",
				html: _options.hotspotrightHTML
			});
			hotspotright.css("position","absolute");
			hotspotright.css("width",_options.hotspotwidth+"px");
			hotspotright.css("height",VIEW_HEIGHT+"px");
			hotspotright.css("top",0);
			hotspotright.css("right",0);
			hotspotright.css("margin",0);
			
			hotspotright.css("border-bottom-left-radius",_options.hotspotwidth +"px " + (VIEW_HEIGHT/2.0) + "px");
			hotspotright.css("border-top-left-radius",_options.hotspotwidth +"px " + (VIEW_HEIGHT/2.0) + "px");			
			
			if(_options.outside){
				hotspotright.css("margin-right",-_options.hotspotwidth);
			}
			hotspotright.css("cursor","pointer");
			hotspotright.css("z-index","4000");
			element.append(hotspotright);
			
			//hotspot events
			
			$("#"+HOTSPOT_ID+"Left").on(HOTSPOT_EVENT,function(){
				//alert("LEFT");
				slide(_options.jump);
			});
			$("#"+HOTSPOT_ID+"Right").on(HOTSPOT_EVENT,function(){
				//alert("RIGHT");
				slide(-1*_options.jump);
			});
			
			$("#"+HOTSPOT_ID+"Left,#"+HOTSPOT_ID+"Right").on(HOTSPOT_EVENT_END,function(){
				//alert("END");
				
				if(_options.slidey){
					//TODO
				}
				else{
					//immediately stop
					clearInterval(sliding_timer);
				}
			});

			
			
			/** 
			Slides the contents by the amount <direction> every <_options.rate> seconds
			*/
			function slide(direction){
				//reset the rate
				rate_temp = _options.rate;
				
				sliding_timer = setInterval(function(){
					
					var current = parseFloat(contentdiv.css("left"));
					direction = parseFloat(direction);					
					var slideto = current+ direction;
					if( slideto <= 0 && slideto >= -(CONTENT_WIDTH-VIEW_WIDTH)){
						contentdiv.css("left",current+ direction);
					}
				},rate_temp);
			}
			
			
			
		  }//end hoverSCroll
		});//end extend

})(jQuery);
