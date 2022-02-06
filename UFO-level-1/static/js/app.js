// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

//Using Arrow Function to create table
function buildTable(data) {
  // Clean out everything
  tbody.html("");

  data.forEach((UFO_Sightings) => {
    var row = tbody.append("tr");
    Object.entries(UFO_Sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".panel panel-default");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(
    (sightings) => sightings.datetime === inputValue
  );

  console.log(filteredData);
}

buildTable(runEnter);
