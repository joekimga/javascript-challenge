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

    Object.values(rowData).forEach((value) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
}

var filterDictionary = {}; 
function filterUpdate() {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select(this).select("input");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");  


    var filterID = inputElement.attr("id");

    if (inputValue){
      filterDictionary[filterID] = inputValue.lowerCase();
    }
    else {
      delete filterDictionary[filterID];
    }
    filterData();
}


function filterData() {
  let filteredData = tableData;
  
  // console.log(inputValue);
  // console.log(tableData);
  Object.entries(filterDictionary).forEach(([key, val]) => {
    filteredData = filteredData.filter(row => row[key] === val);
  });
  runEnter(filteredData);
}

d3.selectAll(".filter").on("change", filterUpdate);
runEnter(tableData);
