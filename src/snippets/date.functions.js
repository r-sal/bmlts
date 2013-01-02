Date.prototype.daysInMonth = function (){
    var x = 31;
    switch (this.getMonth()) //zero-index
    {
    	case 1:		x = (this.isLeapYear()? 29 : 28);break;
    	case 3:
    	case 5:
    	case 8:
    	case 10:	x = 30;
    }
    return x;
};

Date.prototype.isLeapYear = function (){
    var y = this.getFullYear();
    return (y%400==0 || (y%100!=0 && y%4==0));
};

// Show seconds in format minutes:seconds
/* Example:
    secondstominutes(1); // result 00:01
    secondstominutes(50); // result 00:50
    secondstominutes(61); // result 01:01
*/
function secondstominutes(secs){
   return ((arguments[1]=(Math.floor(secs/60)))<10?"0":"")+arguments[1]+":"+((arguments[2]=secs%60)<10?"0":"") + arguments[2];
}