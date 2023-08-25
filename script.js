const timeFormatToggle = document.getElementById('timeFormatToggle');
timeFormatToggle.addEventListener('change', toggleTimeFormat);

function toggleTimeFormat() {
    const clockElement = document.getElementById('clock');
    const twelveHourFormat = timeFormatToggle.checked;

    updateClock(twelveHourFormat);

    // Update the clock every second with the new time format
    clearInterval(clockInterval);
    clockInterval = setInterval(() => {
        updateClock(twelveHourFormat);
    }, 1000);
}

let clockInterval; // Declare clock interval outside the function

function updateClock(twelveHourFormat) {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    let hours = now.getHours();
    let amPm = '';

    if (twelveHourFormat) {
        if (hours >= 12) {
            amPm = 'PM';
            if (hours > 12) {
                hours -= 12;
            }
        } else {
            amPm = 'AM';
            if (hours === 0) {
                hours = 12;
            }
        }
    }

    hours = hours.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = twelveHourFormat ? `${hours}:${minutes}:${seconds} ${amPm}` : `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = time;
}

// Call toggleTimeFormat initially to set the default format
toggleTimeFormat();
