
function getSelText() {
	var SelText = '';
	if (window.getSelection) {
		SelText = window.getSelection();
	} else if (document.getSelection) {
		SelText = document.getSelection();
	} else if (document.selection) {
		SelText = document.selection.createRange().text;
	}
	return SelText;
}

s = getSelText();
if ((s != "") && (s != null)) {

}
