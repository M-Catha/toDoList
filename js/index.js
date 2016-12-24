var taskNumber = 1;

function addToDo() {
	
	var toDo = $("#userInput").val();

	// Send user input to build string function
	var finalString = buildString(toDo, taskNumber);

	taskNumber++;

	$(finalString).appendTo(".inputDiv").show("slow");
	$("#userInput").val("");

}

// Build string function
function buildString(event, task_number) {
	var string = "<div class='toDo'>" +
					"<div class='delete'><i class='large trash outline icon'></i></div>" + 
					"<div class='toDoText'>" + task_number + ": " +  event + "</div>" +
				 "</div>"

	return string;
}

// Handles "enter" press on input
$("#userInput").keypress(function(event) {
	if(event.keyCode === 13) {
		addToDo();
	}
});

// Delegates text crossout function to .toDoText after element is created
$(document).on("click", ".toDoText", function() {
	$(this).toggleClass("crossOff")
});

// Delegates hiding/removing .toDo div after element is created
$(document).on("click", ".delete", function() {
	$(this).parent().hide("fast", function() {
		$(this).remove();
	})
});