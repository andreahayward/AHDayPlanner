var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm A');
$(".block1").text(time1);

var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');
// Populates time formula into html
$(".block2").text(time2);
// 11 AM
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');
// Populates time formula into html
$(".block3").text(time3);
// 12 PM
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');
// Populates time formula into html
$(".block4").text(time4);
// 1 PM
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');
// Populates time formula into html
$(".block5").text(time5);
// 2 PM
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm A');
// Populates time formula into html
$(".block6").text(time6);
// 3 PM
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm A');
// Populates time formula into html
$(".block7").text(time7);
// 4 PM
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm A');
// Populates time formula into html
$(".block8").text(time8);
// 5 PM
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm A');
// Populates time formula into html
$(".block9").text(time9);


testTime();
// Loops through input area to get item from local storage
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// Test loop:
for (var i = 0; i < x.length; i++) {
    var id = localStorage.getItem(x[i]);
    // form - control
    $(".form" + x[i]).val(id);
}
// Event listener to save to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});