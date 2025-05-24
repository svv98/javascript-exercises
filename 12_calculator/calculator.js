const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(a) {
	return a.reduce((sum, num)=> sum+num,0)
};

const multiply = function(a) {
  return a.reduce((total, num)=> total*num)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  let facto=1;
    for(let i=a; i>0; i--){
    facto=facto*i;  
    }
  return facto
};

//Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
