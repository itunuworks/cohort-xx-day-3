'use strict';

Array.prototype.toTwenty = function(){
    var returnValue = [];

    for (var i=1; i<=20; i++){
        returnValue.push(i);
    }
    return returnValue;
}

Array.prototype.toForty= function(){
    var returnValue = [];

    for (var i=2; i<=40; i+=2){
        returnValue.push(i);
    }
    return returnValue;
}

Array.prototype.toOneThousand = function(){
    var returnValue = [];

    for (var i=10; i<=1000; i+=10){
        returnValue.push(i);
    }
    return returnValue;	
}

Array.prototype.search = function(number){
    var returnValue = {'count': 0, 'index': -1, 'length': this.length};
    var low = 0;
    var high = this.length-1;
    var mid;

    this.sort(numericalSortFunction);

    if (number >= this[low] && number <= this[high]) {
        while (high >= low) {
            mid = Math.floor((low + high) / 2);

            if (this[low] === number) {
                returnValue.index = low;
                break;
            }
            else if (this[high] === number) {
                returnValue.index = high;
                break;
            }
            else {
                if (this[mid] > number) {
                    high = mid - 1;
                    low++;
                }
                else if (this[mid] < number) {
                    low = mid + 1;
                    high--;
                }
                else {
                    returnValue.index = mid;
                    break;
                }
            }
            returnValue.count++;
        }
    }
    return returnValue;
}

function findMissing(arr1, arr2){
    var big = arr2;
    var small = arr1;
    var r = big.length;
    var l = 0;
    
    
    if (arr1.length > arr2.length){
        big = arr1;
        small = arr2;
    }

    big.sort(numericalSortFunction);
    small.sort(numericalSortFunction);

    if (arr1.length === arr2.length){
        return 0;
    }
    
    if (big[l] !== small[l]){
        return big[l];
    }
    else if (big[r-1] === small[r-1]){
        return big[r-1];
    }

    
    while(r >= l){
        var m = Math.floor((r+l)/2);
        
        if (big[m] !== small[m]){
            if (big[m-1] === small[m-1]) {
                return big[m];
            }
            r = m - 1;
        }
        else {
            if (big[m+1] !== small[m+1]){
                return big[m+1];
            }
            l = m + 1;
        }
    }
}

var numericalSortFunction = function(a, b){
    return a-b;
}

module.exports = {Array, findMissing}