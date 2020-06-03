const lastName = "Bello";
const firstName = "Josiah";
const internId = "HNG-02127";
const language = "JavaScript";
​
​
function showMessage() {
  // concatenating using temperate literals(es6 features)
  const message =  `"Hello World, this is ${lastName + " " + firstName} with HNGi7 ID ${internId} using ${language} for stage 2 task."`
​
  return message;
}
​
console.log (JSON.stringify(showMessage()));