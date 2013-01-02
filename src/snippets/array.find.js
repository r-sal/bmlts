// Find
Array.prototype.find = function(searchStr) {
  var returnArray = false;
  for (i=0; i<this.length; i++) {
    if (typeof(searchStr) == 'function') {
      if (searchStr.test(this[i])) {
        if (!returnArray) { returnArray = [] }
        returnArray.push(i);
      }
    } else {
      if (this[i]===searchStr) {
        if (!returnArray) { returnArray = [] }
        returnArray.push(i);
      }
    }
  }
  return returnArray;
}

var tmp = [5,9,12,18,56,1,10,42,'blue',30, 7,97,53,33,30,35,27,30,'35','Ball', 'bubble'];
//         0/1/2 /3 /4/5 /6 /7     /8  /9/10/11/12/13/14/15/16/17/  18/    19/      20
var thirty=tmp.find(30);             // Returns 9, 14, 17
var thirtyfive=tmp.find('35');       // Returns 18
var thirtyfive=tmp.find(35);         // Returns 15
var haveBlue=tmp.find('blue');       // Returns 8
var notFound=tmp.find('not there!'); // Returns false
var regexp1=tmp.find(/^b/);          // returns 8,20    (first letter starts with b)
var regexp1=tmp.find(/^b/i);         // returns 8,19,20 (same as above but ignore case)