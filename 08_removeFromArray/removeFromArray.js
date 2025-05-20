const removeFromArray = function(array, ...items) {
    for(let i=0; i<items.length; i++){
        array=array.filter(num=>(num!==items[i]));
        //console.log(array);                   //testing
    }
//console.log(array);                           //testing
return array   
};

//removeFromArray([1, 2, 3], 3,2);              //testing

// Do not edit below this line
module.exports = removeFromArray;
