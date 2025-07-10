let is24HourFormat = false;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    let timeString;
    if (is24HourFormat) {
        timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
    } else {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? String(hours) : '12'; // the hour '0' should be '12'
        timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
    
    document.getElementById('clock').innerText = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Toggle between 12-hour and 24-hour formats
document.getElementById('toggleFormat').addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    document.getElementById('toggleFormat').innerText = is24HourFormat ? 'Switch to 12-Hour Format' : 'Switch to 24-Hour Format';
});
