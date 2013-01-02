
Array.prototype.contains = function(element) {
    var i = this.length;
    while (i--) {
        if (this[i] === element) {
            return true;
        }
    }
    return false;
};

Array.prototype.clear = function() { this.length = 0; };


// Divides an array in several arrays of a given maximum size
/* Example
    Input :chunk([1,2,3,4,5,6,7], 3)
    Output: [[1,2,3],[4,5,6],[7]]
*/
function chunk(a, s){
    for(var x, i = 0, c = -1, l = a.length, n = []; i < l; i++)
        (x = i % s) ? n[c][x] = a[i] : n[++c] = [a[i]];
    return n;
}
