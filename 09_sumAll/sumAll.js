const sumAll = function(first,last) {
    if(first<0||last<0||!Number.isInteger(first)||!Number.isInteger(last)){
        //console.log('ERROR');                                                     //test
    return 'ERROR'

    }else if(first==last){
        return first

    }else {
    
        let firstN=first;
        let lastN=last;

        if(first>last){
            firstN=last;
            lastN=first;
        }            

        let array=[firstN];
        for(let i=1; i<(lastN-firstN); i++){
            array.push(firstN+i);       
        }
        array.push(lastN);    
        let reducedArray=array.reduce((sum,num)=>sum+num,0);
        //console.log(reducedArray);                                                //test
    return reducedArray
    }
};

//console.log(sumAll(123, 1));                                                           //test

// Do not edit below this line
module.exports = sumAll;

/*TOP SOLUTION
const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};
*/
