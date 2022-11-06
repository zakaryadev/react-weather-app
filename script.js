var datetime = 1383066000000; // anything
var date = new Date(datetime);
var options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  second: "numeric",
};

var result = date.toLocaleDateString("ru", options);

console.log(result);
