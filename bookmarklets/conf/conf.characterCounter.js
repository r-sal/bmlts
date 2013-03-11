var socialLabels = [
    "Subhead",
    ];
    
$('#wysiwygTextarea_ifr').contents().find('#tinymce').find('.confluenceTable').each(function(){

    $(this).find('tr').each(function(){
        var labelEl = $(this).children().eq(0),
            label = labelEl.text().trim();
        
        if($.inArray(label, socialLabels) != -1){
            var desktopIn = $(this).children().eq(1),
                len = desktopIn.text().length;
            
            labelEl.text(label + ' (' + len + ')');
        }
    });
});

//-------------------------------------------------------------------------------------------
// Alert version
//-------------------------------------------------------------------------------------------
function getSelText() {
	var SelText = '';
	
	if ($("#wysiwygTextarea_ifr").contents()[0].getSelection) {
		SelText = $("#wysiwygTextarea_ifr").contents()[0].getSelection().toString();
	}
	return SelText;
}

var s = getSelText();
if ((s != "") && (s != null)) {
	s = s.trim();
	alert("Character Count: " + s.length);
}else{
	alert("Please select some text.");
}


// Extra ------------------------------------------------------------------------------------
var words = s.split(' '),
noSpace = words.join('');
alert(    'Num. Characters (w/ Spaces): ' + s.length + 
		'\nNum. Characters (w/o Spaces): ' + noSpace.length + 
		'\nNum. Words: ' + words.length);