// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
// Assign the data from `data.js` to a descriptive variable
// var people = data;

// Select the button
// var button = d3.select("#button");

// // Select the form
// var form = d3.select("#form");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter(data) {

  // Prevent the page from refreshing
  // d3.event.preventDefault();
  
  tbody.html("");

  data.forEach((rowData) => {
    var row = tbody.append("tr");
    // var row = row.toLowerCase();

    Object.values(rowData).forEach((value) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
}

function filterData() {
    // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  let filteredData = tableData;
  console.log(inputValue);
  console.log(tableData);
  if (inputValue) {
    filteredData = tableData.filter(row => row.datetime === inputValue);
  }
  runEnter(filteredData);
}

d3.selectAll("#filter-btn").on("click", filterData);
runEnter(tableData);
