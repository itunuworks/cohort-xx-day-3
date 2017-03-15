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

	this.sort(function compareNumbers(a, b) {
	    return a - b;
	});

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
	            }
	            else if (this[mid] < number) {
	                low = mid + 1;
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

module.exports = {Array}