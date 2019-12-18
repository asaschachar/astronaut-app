function getUserId() {
  return String(Math.random());
}

// STEP 1
// TODO: Initialize the SDK

// STEP 2
// TODO: Update the page when Optimizely is ready
updatePage();

function updatePage() {
  var astronaut = document.getElementById('astronaut');
  var userId = getUserId();

  // STEP 3
  // TODO: Implement a feature flag
  var enabled = false
  if (enabled) {
    astronaut.style.display = "block";
  } else {
    astronaut.style.display = "none";
  }
}
