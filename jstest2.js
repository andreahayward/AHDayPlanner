//moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
var currentTime = moment();
currentTime = currentTime.startOf("hour");
var beforeTime = moment().startOf('day').add(9, "hours");
var beforeTime = moment().startOf('day').add(9, "hours");

//9am
var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm A');
$(".spot1").text(time1);
//10am
var time2 = beforeTime.add(0, "h");
time2 = time2.format('hh:mm A');
$(".spot2").text(time2);
//11am
var time3 = beforeTime.add(0, "h");
time3 = time3.format('hh:mm A');
$(".spot3").text(time3);
//12pm
var time4 = beforeTime.add(0, "h");
time4 = time4.format('hh:mm A');
$(".spot4").text(time4);
//1pm
var time5 = beforeTime.add(0, "h");
time5 = time5.format('hh:mm A');
$(".spot5").text(time5);
//2pm
var time6 = beforeTime.add(0, "h");
time6 = time6.format('hh:mm A');
$(".spot6").text(time6);
//3pm
var time7 = beforeTime.add(0, "h");
time7 = time7.format('hh:mm A');
$(".spot7").text(time7);
//4pm
var time8 = beforeTime.add(0, "h");
time8 = time8.format('hh:mm A');
$(".spot8").text(time8);
//5pm
var time9 = beforeTime.add(0, "h");
time9 = time9.format('hh:mm A');
$(".spot9").text(time9);
//6pm
var time10 = beforeTime.add(0, "h");
time10 = time10.format('hh:mm A');
$(".spot10").text(time10);
//7pm
var time11 = beforeTime.add(0, "h");
time11 = time11.format('hh:mm A');
$(".spot11").text(time11);


// Function to compare hour slots with current time 
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
    // Add time2 10AM
    time2 = moment().startOf('day').add(10, "hours");
    // Add time2 if/else
    if (currentTime.isAfter(time2)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form10").addClass("present");
    };
    // Add time2 10AM
    time2 = moment().startOf('day').add(10, "hours");
    // Add time2 if/else
    if (currentTime.isAfter(time2)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form10").addClass("present");
    };
    // time3 11AM
    time3 = moment().startOf('day').add(11, "hours");
    // Add time3 if/else
    if (currentTime.isAfter(time3)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".form11").addClass("present");
    };
    // time4 12PM
    time4 = moment().startOf('day').add(12, "hours");
    // Add time4 if/else
    if (currentTime.isAfter(time4)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form12").addClass("present");
    };
    // time5 1PM
    time5 = moment().startOf('day').add(13, "hours");
    // Add time5 if/else
    if (currentTime.isAfter(time5)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form1").addClass("present");
    };
    // time6 2PM
    time6 = moment().startOf('day').add(14, "hours");
    // Add time6 if/else
    if (currentTime.isAfter(time6)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time6)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".form2").addClass("present");
    };
    // time7 3M
    time7 = moment().startOf('day').add(15, "hours");
    // Add time7 if/else
    if (currentTime.isAfter(time7)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time7)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".form3").addClass("present");
    };
    // time8 4pm
    time8 = moment().startOf('day').add(16, "hours");
    // Add time8 if/else
    if (currentTime.isAfter(time8)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time8)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time8)) {
        $(".form4").addClass("present");
    };
    // time9 5pm
    time9 = moment().startOf('day').add(17, "hours");
    // Add time9 if/else
    if (currentTime.isAfter(time9)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".form5").addClass("present");
    };
    // time10 6pm
    //time9 = moment().startOf('day').add(18, "hours");
    // Add time10 if/else
    //if (currentTime.isAfter(time10)) {
        //$(".form6").addClass("past");
    //}
    //else if (currentTime.isBefore(time10)) {
        //$(".form10").addClass("future");
    //}
    //else if (currentTime.isSame(time10)) {
        //$(".form10").addClass("present");
    //};
}
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
    console.log(formValue);
    var listItem = $(this).siblings(".form-control").data("hour");
    console.log("")

    localStorage.setItem(listItem, formValue);
});