const repeatString = function(string, num) {
let final='';
if(num<0) return 'ERROR';
for(let i=0; i<num; i++){
   final+=string;
}
return final;
};

// Do not edit below this line
module.exports = repeatString;
