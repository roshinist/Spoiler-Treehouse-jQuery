//Prevent seeing spoilers
//Solution: Hide spoilers and reveal them on click

//Hide spoiler span assuming all text is wrapped in span, Add Button.
$(".spoiler span").hide();
$(".spoiler").append("<button> Reveal Spoiler! </button> ");

//On click show spoiler, then remove button
//Removing button first will not help you track back to previous component.
//Can be handled 2 ways:
//1. Remove then show '.spoiler span' 2. show button's previous html 
//element then remove button
$('.spoiler button').click(function() {

	$(this).prev().show();
	$(this).remove();

	//Doing below will show all spans under the spoiler class
	// $(this).remove();
	// $('.spoiler span').show();

});
