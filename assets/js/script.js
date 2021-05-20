$(document).ready(function() {
    //Setting date to current date
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    var hourEl = $('.hour');
    var eventEl = $('.textarea');
    
    hourEl.each(function (i) {
        var currentHour = moment().format('hA');
        var rowHour = moment(this.innerText,'hA');

        console.log(currentHour);
        console.log(rowHour);
        

        if (moment(currentHour,'hA').isAfter(rowHour,'hA')){
            console.log('after');
            eventEl[i].classList.add('past');
        } else if (moment(currentHour,'hA').isSame(rowHour,'hA')) {
            console.log('same');
            eventEl[i].classList.add('present');
        } else {
            console.log('before');
            eventEl[i].classList.add('future');
        }      
    })



})

