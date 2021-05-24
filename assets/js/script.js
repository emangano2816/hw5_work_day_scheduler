$(document).ready(function() {

    //Declaring variables
    let hourEl = $('.hour');
    let eventEl = $('.textarea');
    let btnEl = $('.saveBtn');
    let saveToLs = $('#savedToLs');

    //Setting date to current date
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    //If new day, clearing local storage
    clearLocalStorage();
    
    //Updating class (past, current, future) for each row
    hourEl.each(function (i) {
        let currentHour = moment().format('hA');
        let rowHour = moment(this.innerText,'hA');

        if (moment(currentHour,'hA').isAfter(rowHour,'hA')){
            eventEl[i].classList.add('past');
        } else if (moment(currentHour,'hA').isSame(rowHour,'hA')) {
            eventEl[i].classList.add('present');
        } else {
            eventEl[i].classList.add('future');
        }      
    });

    //Click funtion for save buttons
    btnEl.click(function(event) {
        event.preventDefault();
        event.stopPropagation();

        let eventSaved = $(this).siblings().last().val();
        let timeSaved = $(this).siblings().first().attr('id');
          
        localStorage.setItem(timeSaved, eventSaved);
        localStorage.setItem("date", moment().format('YYYY-MM-DD'));
        
        //displays message that event has been saved to local storage
        saveToLs.text('Saved to local storage.');
        saveToLs.addClass("showMessage");
        setTimeout(function() {
            saveToLs.removeClass("showMessage");
            }, 2000);

        //scrolls page to top so user sees message about save to local storage
        window.scroll ({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    //Render local storage to page, if it exists
    function renderLocalStorage() {
        hourEl.each(function() {
            let id = $(this).attr('id');

            if (localStorage.getItem(id) !== null) {
                ($('#'+ id).siblings().first().val(localStorage.getItem(id)));
            }
        })
    }

    renderLocalStorage();

    //Clears local storage if the current date is after the stored date
    function clearLocalStorage() {
        let storedDate=localStorage.getItem("date");
        let currentDate=moment().format('YYYY-MM-DD')
        if (storedDate !== null) {
            if(moment(currentDate).isAfter(storedDate,'day')) {
                localStorage.clear();
            }
        }
    }
})
