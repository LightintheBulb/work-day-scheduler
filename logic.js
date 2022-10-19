$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
        // get nearby values
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id')
        console.log("this", time)
        console.log("value", value)

        // save in localStorage
        localStorage.setItem(time, value)
        
        // Show notification that item was saved to localStorage by adding class 'show'

        // Timeout to remove 'show' class after 5 seconds
        
        setTimeout(function () {
            $('.notification').removeClass('d-none');
        }, 250);
        
        console.log("123")

        setTimeout(function () {
            $('.notification').addClass('d-none');
        }, 3250);
    });

    function hourUpdater() {
        // get current number of hours (preferably with moment.js)
        var currentHour = moment().hours();
        console.log("currentHour", currentHour)

        // loop over time blocks
        var eachFunction = function() {
            
            var blockHour = parseInt($(this).attr('data-hour'))
            console.log(blockHour)

            // check if we've moved past this time
            if (blockHour < currentHour) {
                $(this).addClass('past');
            } else if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        }

        var timeBlock = $('.time-block').each(eachFunction)

        // loop over time blocks ---> https://api.jquery.com/each/
        // inside this loop, // check if we've moved past this time. If we have, make the row grey. If it's future, make it green. if it's past, make it red. Using the past, present, and future classes in css file

        
    }

    hourUpdater();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);

    // load any saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    ///need to repeat line 21 for all the other hours


    // display current day on page
    $('#currentDay').text(moment().format('dddd, MMMM Do'));

    // display current time on page
    $('#currentTime').text(moment().format("h:mm:ss a"))
});