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
		console.log("stuff to be done here");
	}
})