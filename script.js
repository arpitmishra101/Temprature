// script.js
document.addEventListener("DOMContentLoaded", () => {
    function setTemperature(temp) {
        const mercury = document.querySelector('.mercury');
        const tempValue = document.querySelector('.temperature-value');

        // Assuming the temperature range is from -30°C to 50°C
        const minTemp = -30;
        const maxTemp = 50;
        const maxMercuryHeight = 100; // percentage

        if (temp < minTemp) temp = minTemp;
        if (temp > maxTemp) temp = maxTemp;

        const mercuryHeight = ((temp - minTemp) / (maxTemp - minTemp)) * maxMercuryHeight;
        mercury.style.height = mercuryHeight + '%';
        tempValue.textContent = `${temp}°C`;
    }

    

    document.getElementById('update-button').addEventListener('click', () => {
        const tempInput = document.getElementById('temperature-input').value;
        const temperature = parseFloat(tempInput);
        if (!isNaN(temperature)) {
            setTemperature(temperature);
        } else {
            alert('Please enter a valid number for the temperature.');
        }
    });
});
