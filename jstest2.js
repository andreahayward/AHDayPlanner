moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
var currentTime = moment();
currentTime = currentTime.startOf("hour");
var beforeTime = moment().startOf('day').add(9, "hours");
var beforeTime = moment().startOf('day').add(9, "hours");

//9am
var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm A');
$(".spot1").text(time1);


// Function to compare hour slots with current time 
// Update these to coordinating numbers
function testTime() {
    // Add time1 9AM
    time1 = moment().startOf('day').add(9, "hours");
    // Adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    // Add time1 if/else
    if (currentTime.isAfter(time1)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form9").addClass("present");
    };
    
testTime();
// Loops through input area to get item from local storage
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];
// Test loop:
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    // form - control
    $(".form" + x[i]).val(dataHour);
}
// Event listener to save to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});