void(wrd = prompt('Text: ', ''));
var url = 'http://placehold.it/120x68/FFFFFF/000000&text='+wrd;
myWindow=window.open('','','width=550,height=200');
myWindow.document.write('<p><input type="text" value="'+url+'" style="width:100%;" autofocus></p>');
myWindow.document.write('<p style="padding:20px; background:#000000;"><img src="'+url+'" /></p>');
myWindow.focus();