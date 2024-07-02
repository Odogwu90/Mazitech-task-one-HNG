document.addEventListener('DOMContentLoaded', function() {
    // Function to update the clock every second
    function updateClock() {
        const now = new Date();
        const options = { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
        const formattedTime = now.toLocaleTimeString('en-US', options);
        document.getElementById('utcTime').textContent = formattedTime;
    }

    // Call the function to update the clock immediately
    updateClock();

    // Update the clock every second
    setInterval(updateClock, 1000);
});


document.addEventListener('DOMContentLoaded', function() {
    // Function to update the current day of the week
    function updateDay() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        const dayOfWeek = daysOfWeek[now.getDay()];
        document.getElementById('currentDay').textContent = dayOfWeek;
    }

    // Call the function to update the day immediately
    updateDay();
});
