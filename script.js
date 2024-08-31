function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    const celsiusOutput = document.getElementById('celsius-output');
    const fahrenheitOutput = document.getElementById('fahrenheit-output');
    const kelvinOutput = document.getElementById('kelvin-output');

    celsiusOutput.style.display = 'none';
    fahrenheitOutput.style.display = 'none';
    kelvinOutput.style.display = 'none';

    if (isNaN(temperature)) {
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === 'celsius') {
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
        fahrenheitOutput.innerText = `${temperature}°C = ${fahrenheit.toFixed(2)}°F`;
        kelvinOutput.innerText = `${temperature}°C = ${kelvin.toFixed(2)}K`;
        fahrenheitOutput.style.display = 'block';
        kelvinOutput.style.display = 'block';
    } else if (unit === 'fahrenheit') {
        celsius = (temperature - 32) * 5/9;
        kelvin = celsius + 273.15;
        celsiusOutput.innerText = `${temperature}°F = ${celsius.toFixed(2)}°C`;
        kelvinOutput.innerText = `${temperature}°F = ${kelvin.toFixed(2)}K`;
        celsiusOutput.style.display = 'block';
        kelvinOutput.style.display = 'block';
    } else if (unit === 'kelvin') {
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        celsiusOutput.innerText = `${temperature}K = ${celsius.toFixed(2)}°C`;
        fahrenheitOutput.innerText = `${temperature}K = ${fahrenheit.toFixed(2)}°F`;
        celsiusOutput.style.display = 'block';
        fahrenheitOutput.style.display = 'block';
    }
}

function toggleTheme() {
    const body = document.body;
    const sunMoonIcon = document.querySelector('.sun-moon');

    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')) {
        sunMoonIcon.textContent = '☀️';
    } else {
        sunMoonIcon.textContent = '🌙';
    }
}
