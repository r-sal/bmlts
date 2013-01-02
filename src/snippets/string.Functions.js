
/**
 * String Functions
 */
 // ----| Trim |--------------------------------------------------------------------
String.prototype.trim = function()  { return this.replace(/^\s+|\s+$/g,""); }
String.prototype.ltrim = function() { return this.replace(/^\s+/g,"");		}
String.prototype.rtrim = function() { return this.replace(/\s+$/g,"");		}

function trim(str, chars) { return ltrim(rtrim(str, chars), chars); }
function ltrim(str, chars) {
  chars = chars || "\\s";
  return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
function rtrim(str, chars) {
  chars = chars || "\\s";
  return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}


// ----||--------------------------------------------------------------------
String.prototype.ucfirst(){ return this.charAt(0).toUpperCase() + this.slice(1); }
String.prototype.capitalize = function() { return this.charAt(0).toUpperCase() + this.slice(1); }
String.prototype.capitalize = function() { return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase(); };
String.prototype.repeat = function( num ){ return new Array( num + 1 ).join( this ); }
String.prototype.reverse = function () { return this.split('').reverse().join(''); };
String.prototype.replaceAll = function(target, replacement) { return this.replace(new RegExp(target, "g"), replacement); };
String.prototype.strip_tags = function() { return this.replace(/<[^>]+>/gi,""); }

function urlencode(str) { return escape(str).replace(/\+/g,'%2B').replace(/%20/g, '+').replace(/\*/g, '%2A').replace(/\//g, '%2F').replace(/@/g, '%40'); }
function getAnchorFromURI(u){return u.slice(u.lastIndexOf('#')+1);}

// ----||--------------------------------------------------------------------
function strpos (haystack, needle, offset) {
    var i = (haystack+'').indexOf(needle, (offset || 0));
    return i === -1 ? false : i;
} 




// ----| Validation & Filtering |--------------------------------------------------------------------
function isInteger(s){return (/^-?\d+$/.test(s));}
function isPositiveDecimal(s){return (!/\D/.test(str))||(/^\d+\.\d+$/.test(s));}
function isAlphanumeric(str){return !(/\W/.test(s));}
function isAlphanumericSpaceAmpersandHyphen(s){return !(/^[\w &\-]+$/.test(s));}
function validEmail(s){return s.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)===null;}

function stripNonAlphanumerics( subject ) {
  subject = subject.replace(/[^A-Za-z0-9 ]+/g, '');
  return subject.replace(' ', '');
}

/** 
 * Left-pad a number with zeros so that it's at least the given 
 * number of characters long 
 * @param n   The number to pad 
 * @param len The desired length 
 */  
function leftPad(n, len) {  
    return (new Array(len - String(n).length + 1)).join("0").concat(n);  
}














