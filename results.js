document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');

    // Get latitude and longitude from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const latitude = urlParams.get('lat');
    const longitude = urlParams.get('lng');

    if (latitude && longitude) {
        console.log('Latitude and longitude provided:', latitude, longitude);
        getSunriseSunset(parseFloat(latitude), parseFloat(longitude));
    } else {
        console.error('Latitude and longitude not found');
    }
});

async function getSunriseSunset(latitude, longitude) {
    console.log('Fetching sunrise and sunset data...');

    const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log('API response:', data);

        document.getElementById('sunrise').innerText = `Sunrise: ${data.results.sunrise}`;
        document.getElementById('sunset').innerText = `Sunset: ${data.results.sunset}`;
        document.getElementById('raw-output').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching sunrise and sunset data:', error);
    }
}
