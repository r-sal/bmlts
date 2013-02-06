

var gal = window.mb.galleryAssets;
var cara = gal.carousels;
console.log(gal);

for(var i = 0; i < cara.length; i++){
	var section = cara[i];
	console.log(section.title);
	console.log(section.touts);
}