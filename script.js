async function getLocation() {
  try {
      const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;

      // Redirect to the results page
      redirectToResults(latitude, longitude);
  } catch (error) {
      console.error('Error getting geolocation:', error);
  }
}

function redirectToResults(latitude, longitude) {
  // latitude and longitude to pass as URL parameters
  const encodedLatitude = encodeURIComponent(latitude);
  const encodedLongitude = encodeURIComponent(longitude);

  // Redirect to a new page with the location param
  window.location.href = `results.html?lat=${encodedLatitude}&lng=${encodedLongitude}`;
}
