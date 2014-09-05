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
		$.each($(".plx-img"), function() 
		{
			$(this).css("background-position-y", (
				sTop - $(this).position().top) * (parseFloat($(this).attr('plx-speed')) || 0.1) + (parseFloat($(this).attr('plx-offset')) || 0));
		});
	}
});