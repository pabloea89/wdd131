// Footer
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
document.getElementById('currentyear').textContent = `${currentYear} | Pablo Acuna | Canada`;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

// Wind Chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1) + '°C';
    } else {
        return "N/A";
    }
}
let temperature = -10;
let windSpeed = 25;
document.getElementById('wind-chill').textContent = `Wind Chill: ${calculateWindChill(temperature, windSpeed)}`;