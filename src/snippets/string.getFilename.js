/**
 * This function extracts a filename from a url
 */
function getFilename(filename){
	if(filename === null || filename.length === 0){
		return null;
	}
	var temp = filename.split('/');	
	filename = temp[temp.length-1];
	
	var temp = filename.split('?');
	filename = temp[0];
	return filename;
}



function urlToFilename(url){
	return (!url) ? '' : url.substring(url.lastIndexOf('/') + 1, 
        (url.lastIndexOf('?') == -1) ? url.length : url.lastIndexOf('?'));
}

