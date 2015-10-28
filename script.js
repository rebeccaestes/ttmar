// - When the first link on the page is clicked, the background color should change to something 
//that is **not** white, blue, or black.

$("#first_paragraph").on("click", function() {
	$("body").css("background", "darkslategrey");
	})

// - When the second through fifth links are clicked, the relevant part of the song should
// be displayed. *(Hint: Notice that the `href` of the third link isn't `#`. Maybe some kind of 
	// default action should be prevented...)

$("#second_paragraph").on("click", function() {
	$(".second_paragraph").css("display", "block");
})

$("#first_chorus").on("click", function(event) {
	event.preventDefault();
	$(".first_chorus").css("display", "block");
})

// function showingFunction(showThis) {
// 	showThis.on("click", function() {
// 		event.preventDefault();
// 		for (var i = 0; i < showThis.length; i++) {
// 			showThis.eq(i).css("display", "block");
// 		}
// 	return event;
// 	})

$("#third_paragraph").on("click", function(event) {
	event.preventDefault();
	for (var i = 0; i < $(".third_paragraph").length; i++) {
		$(".third_paragraph").eq(i).css("display", "block");
	}
})

$("#fourth_paragraph").on("click", function(event) {
	event.preventDefault();
	for (var i = 0; i < $(".fourth_paragraph").length; i++) {
		$(".fourth_paragraph").eq(i).css("display", "block");
	}
})

var click = 0;
$("#second_chorus").on("click", function(event) {
	event.preventDefault();
	$(".second_chorus").eq(click).css("display", "block");
	click++;
	}
)


// })

// ## BONUS!
// - When the last link is clicked, one line of the chorus should be displayed. Each subsequent 
// click should display an additional line of the chorus until all 6 lines are displayed.
