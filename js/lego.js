$(document).ready(function() {
    
    /************* Flat Tabs *****************/
    $(".flat_tabs a").on("click",function() {
		$(".flat_tabs_box").hide();
		$(".flat_tabs li").removeClass("on");
		$(this).parent().addClass("on");
		var activeTab = $(this).attr("href");
		$(activeTab).show();
	 	return false;
	});
    /************* Accordion *****************/
    $(".accordion_head").click(function() {
		if ( $(this).hasClass("on") ) {
			$(this).removeClass("on");
			$(this).next(".accordion_body").slideToggle();
			$(this).find("i.i_16").removeClass("i_arrow_gray").addClass("i_arrow2_gray");
		} else {
			$(".accordion_head").removeClass("on");
			$(".accordion_head").find("i.i_16").removeClass("i_arrow_gray").addClass("i_arrow2_gray");
			$(".accordion_body").slideUp();
			$(this).addClass("on");
			$(this).next(".accordion_body").slideToggle();
			$(this).find("i.i_16").removeClass("i_arrow2_gray").addClass("i_arrow_gray");
		}
	});
	/************ Lego Menu *******************/
	$(".submenu-right").hover(
		function(){
			var menu_width = $(".sub-menu").width();
			$(this).find(".submenu-right-list").css({
				"left":menu_width
			}).show();
		},
		function(){
			$(this).find(".submenu-right-list").hide();
		}
	)
	// Tooltips Down
	$('.tooltip_down[title]').each(function(){
		var $this = $(this);
		$this.data('tooltip',$this.attr('title'));
		$this.removeAttr('title');
	});
	$(document).on("mouseover", ".tooltip_down", function(e) {
		var tooltip_text = $(this).data("tooltip");
		if (tooltip_text && tooltip_text != ""){
			var tooltip_text_tag = $("<span class='tooltip_down_text hide'>"+tooltip_text+"</span>").appendTo("body");
			var tooltip_text_half_width = tooltip_text_tag.outerWidth()/2;
			var tooltip_text_top = $(this).offset().top+$(this).outerHeight()+5;
			var tooltip_text_left = $(this).offset().left-tooltip_text_half_width+($(this).outerWidth()/2);
			tooltip_text_tag.css({"top": tooltip_text_top, "left": tooltip_text_left, "position": "absolute"}).show();
		}
	});
	$(document).on("mouseleave", ".tooltip_down", function(e) {
		$(".tooltip_down_text").remove();
	});
});
var hash = window.location.hash;
if(hash) {
	var tab_id = hash.substring(1);
	if($(hash).length) {
		$(".flat_tabs_box").hide();
		$(".flat_tabs li").removeClass("on");
		$("."+tab_id).parent().addClass("on");
		$(hash).show();
	}
}