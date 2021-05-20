$(document).ready(function() {
    //Setting date to current date
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    let hourEl = $('.hour');
    let eventEl = $('.textarea');
    let btnEl = $('.saveBtn');
    let eventArray = [];
    
    hourEl.each(function (i) {
        let currentHour = moment().format('hA');
        let rowHour = moment(this.innerText,'hA');

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
    });

    btnEl.click(function(event) {
        event.preventDefault();
        event.stopPropagation();

        console.log(event.target);
        console.log ($(this).siblings().last().val());
        let eventSaved = $(this).siblings().last().val();
        let timeSaved = $(this).siblings().first().attr('id');
        
        eventArray.push(eventSaved + " - " + timeSaved);

        console.log(eventArray);
    })





})

