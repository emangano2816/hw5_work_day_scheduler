$(document).ready(function() {
    //Setting date to current date
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    clearLocalStorage();

    let hourEl = $('.hour');
    let eventEl = $('.textarea');
    let btnEl = $('.saveBtn');
    
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
        
        localStorage.setItem(timeSaved, eventSaved);
        localStorage.setItem("date", moment().format('YYYY-MM-DD'));      
    })

    function renderLocalStorage() {
        hourEl.each(function() {
            let id = $(this).attr('id');

            if (localStorage.getItem(id) !== null) {
                ($('#'+ id).siblings().first().val(localStorage.getItem(id)));
            }
        })
    }

    renderLocalStorage();
})

    function clearLocalStorage() {
        let storedDate=localStorage.getItem("date");
        let currentDate=moment().format('YYYY-MM-DD')
        if (storedDate !== null) {
            if(moment(currentDate).isAfter(storedDate,'day')) {
                localStorage.clear();
            }
        }
    }

