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
			$(this).css("background-position-y", (sTop-$(this).position().top)*0.1);
		});
	}
});