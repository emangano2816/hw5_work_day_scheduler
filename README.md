# Homework Assignment 5: Work Day Scheduler

## URLs
1. Deployed application: https://emangano2816.github.io/hw5_work_day_scheduler/
2. GitHub Repository: https://github.com/emangano2816/hw5_work_day_scheduler

## User Story
```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```
## Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
## Achieving Acceptance Criteria
1. Upon opening the application, the current day is displayed at the top of the page.
2. Each hour (9AM - 5PM) is represented on the page as a row (i.e, timeblock) in the planner.
3. The text area of each timeblock is color coded when the page loads or is refreshed.  Grey indicates past; red indicates current; and green indicates future.
4. Clicking inside the color coded space places a cursor inside the text area, allowing the user to include an event for that timeblock.
5. Clicking the save icon next to the text area saves the user's text to local storage.
6. When the page is refreshed, events that were saved persist on the page.

## Additional Acceptance Criteria
The application's javascript code uses the moment.js utilities libary to display the date at the top of the page, color code the timeblocks as past, present, and future, and to clear local storage when the user opens the calendar on a new day.

## Meeting Application Quality
The application is easy to use and resembles the mock-up.  

When the application is opened, the current date is displayed at the top.  As the user scrolls down, the user will see that each timeblock is color coded as past (grey), present (red), and future (green).  The user is able to create an event for any given timeblock by clicking into the text area and including text.  Clicking the blue save button saves the user's text (i.e., event) into local storage. If the user refreshes the page or revisits the application in the same day, the events that were saved persist on the page.  When the user opens the applicaiton on a new day, the timeblock events reset.

## Application Functionality
![work_day_scheduler.](./assets/images/hw5_work_day_scheduler_demo.gif)
