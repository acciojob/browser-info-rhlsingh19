//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  // Get the div element by its ID
  const browserInfoDiv = document.getElementById('browser-info');

  // Retrieve browser information using navigator object
  const browserName = navigator.appName;
  const browserVersion = navigator.appVersion;

  // Display the information inside the div
  browserInfoDiv.textContent = "You are using " + browserName + " version " + browserVersion;
});
