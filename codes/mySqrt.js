var mySqrt = function(x) {
    if(x < 2) {
        return x;
     }
     let num = 1;
    while(num*num <= x) {
         num++;
    }
    return num-1;
}
 
    