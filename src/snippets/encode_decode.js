
function encode() {
	var obj = document.getElementById('dencoder');
	var unencoded = obj.value;
	obj.value = encodeURIComponent(unencoded);
}
function decode() {
	var obj = document.getElementById('dencoder');
	var encoded = obj.value;
	obj.value = decodeURIComponent(encoded.replace(/\+/g,  " "));
}
