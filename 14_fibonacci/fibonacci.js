const fibonacci = function(n) {
    n=parseInt(n);
    if(n<0) return 'OOPS'
    if(n==1) return 1
    if(n==0) return 0
    let sum=0;
    let xBefore=0;
    let yBefore=1;

    for(let i=2; i<=n; i++){
        sum=xBefore+yBefore;
        xBefore=yBefore;
        yBefore=sum;

        console.log('xbefore '+xBefore);
        console.log('ybefore '+yBefore);        
    }
    return sum
};

// Do not edit below this line
module.exports = fibonacci;
