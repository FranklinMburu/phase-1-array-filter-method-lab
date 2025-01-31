// Code your solution here
// index.js

// Function to find drivers that match the exact name (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers whose names start with the provided letters (case insensitive)
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // Function to match drivers from an array of objects based on the `name` property
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  