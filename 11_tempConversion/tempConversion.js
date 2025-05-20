const convertToCelsius = function(degree) {
return (degree==32)?0:(Math.round(((degree-32)*(5/9))*10)/10)
};


const convertToFahrenheit = function(degree) {
return (degree==0)?32:(Math.round(((degree*(9/5)+32))*10)/10)
};


//console.log(convertToCelsius(33));
//console.log(convertToFahrenheit(21));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
