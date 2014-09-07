$(window).ready(function()
{
	$(window).resize(function()
	{
	    refresh();
	});

	$(window).bind('scroll', function()
	{
	    refresh();
	});

	function refresh() 
	{
		var sTop = $(window).scrollTop();
		var wHeight = $(window).height();
		
		$.each($(".plx-img"), function() 
		{
			$(this).css("background-position-y", (
				sTop - $(this).position().top) * (parseFloat($(this).attr('plx-speed')) || 0.1) + (parseFloat($(this).attr('plx-offset')) || 0) + "px");
		});

		$.each($(".plx-float"), function(){

			var ref = $($(this).attr('plx-ref'));

			var relativePos = (sTop + wHeight/2 - ref.position().top - ref.height()/2)/(wHeight/2);

			// $(this).css("top", ( ( - relativePos * Math.abs(relativePos) - relativePos + 1 ) * (wHeight/2) - $(this).height() / 2) + "px");

			$(this).css("top", ( ( - Math.pow(relativePos, 3) - relativePos + 1 ) * (wHeight/2) - $(this).height() / 2) + "px");

		});
	}
});