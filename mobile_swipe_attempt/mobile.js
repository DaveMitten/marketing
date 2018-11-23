$(function() {
	var windowWidth = $(".window").width();
	var windowHeight = $(".window").height();
	var i = 0;
	var panelAmount = $(".sp-panel").length;
	
	// Give the panels a fitting H/W
	$(".sp-panel").css("width", windowWidth);
	$(".sp-panel").css("height", windowHeight);
	
	// Click on "Right" to move forward
		$(".right").click(function(){
		
			i+=1;
			
			if (i < 0 ){
				i = panelAmount - 1;
			}
			
			if (i >= panelAmount) {
				i = 0;
			}
		
			var pos=(i*windowWidth);
			$(".sp-panel-set").css("left", -pos + "px");
			});
	
		// Click on "Left" to move backward
		$(".left").click(function(){
			
			i-=1;
			
			if (i < 0 ){
				i = panelAmount - 1;
			}
			
			if (i >= panelAmount) {
				i = 0;
			}
			
			var pos=(i*windowWidth);
			$(".sp-panel-set").css("left", -pos + "px");
			});
	
	// Attempted Mobile Swipe Alternative
	
	// Swipe Forward
		$(".sp-panel-set").on("swipeleft", function(event){
		
			i+=1;
			
			if (i < 0 ){
				i = panelAmount - 1;
			}
			
			if (i >= panelAmount) {
				i = 0;
			}
		
			var pos=(i*windowWidth);
			$(".sp-panel-set").css("left", -pos + "px");
			});
	
	// Swipe Backward
			$(".sp-panel-set").on("swiperight", function(event){
			
			i-=1;
			
			if (i < 0 ){
				i = panelAmount - 1;
			}
			
			if (i >= panelAmount) {
				i = 0;
			}
			
			var pos=(i*windowWidth);
			$(".sp-panel-set").css("left", -pos + "px");
			});
	
});