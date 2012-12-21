String.prototype.repeat = function( num ){
    return new Array( num + 1 ).join( this );
}
var sections = window.mb.galleryAssets.carousels;
var imageArray = [];

window.outputToConsole = true;
window.muteOutput = false;

wiki_nl(2);
wiki_echo('h5.Table of Contents');
wiki_echo('{toc:type=list|style=none|maxLevel=3|minLevel=1|class=page-toc|printable=true}');
wiki_nl(3);

var qaMode = false;


for(var i in sections){
    var sec = sections[i];  

    wiki_nl(2);
    wiki_echo('h1. ' + sec.title);
    wiki_nl();
    
    for(var j in sec.touts){
        var tout = sec.touts[j];
        
        var toutType = tout.type;
        var modelLink = (tout.image.model.length) ? "*+" + tout.image.model + "+* " : "";
        var modelUrl = tout.image.link.url || "(x)";
        //wiki_rowImg(getTypeLabel(toutType), getFn(tout.image.url), 300);
        wiki_rowImg(getTypeLabel(toutType), (qaMode ? tout.image.url : getFn(tout.image.url)), 300);
        wiki_row("Title / URL", 	    modelUrl);
        
        if(toutType == 'video'){
            var video = tout.video; 
            var videoFilename = getFn(video.flv.url).split('.');
            
            wiki_row("Title", 	            modelLink + tout.thumbnail.title || "(x)");
            wiki_row("Description", 		video.flv.description || "(x)");
            wiki_row("Image / Filename", 	getFn(tout.image.url) || "(x)");
            wiki_row("Image / Thumbnail", 	getFn(video.flv.thumbNailUrl) || "(x)");
            wiki_row("Image / Alt", 		video.flv.altText || "(x)");
            wiki_row("Video / Filename", 	videoFilename[0] || "(x)");
            wiki_row("Video / Path", 	    "");
        }else if(toutType == 'img'){
            wiki_row("Title", 	            modelLink + tout.thumbnail.title || "(x)");
            wiki_row("Description", 		tout.image.description || "(x)");
            wiki_row("Image / Filename", 	getFn(tout.image.url) || "(x)");
            //wiki_row("Image / Thumbnail", 	getFn(tout.thumbnail.url) || "(x)");
            qaMode ? wiki_rowImg("Image / Thumbnail", tout.thumbnail.url) : wiki_row("Image / Thumbnail", 	getFn(tout.thumbnail.url) || "(x)");
            wiki_row("Image / Alt", 		tout.image.altText || "(x)");

            
        }else if(toutType == 'richmedia'){
            var rich = tout.richMedia;
            wiki_row("Title", 	            modelLink + rich.title || "(x)");
            wiki_row("Image / Fallback", 	getFn(tout.image.url) || "(x)");
            wiki_row("Image / Thumbnail", 	getFn(rich.thumbNailUrl) || "(x)");
            wiki_row("Image / Alt", 		rich.altText || "(x)");
            wiki_row("360 / Path", 	        "");
        }            

        var erLoc = erLocation(i, j);
        fbstr = (tout.socialMedia.image) ? '' : '{color:red}'+erLoc+'Facebook image missing{color} \\\\';        
        mwstr = (tout.mobileWallpaper.url) ? '' : '{color:red}'+erLoc+'mobile wallpaper image missing{color} \\\\';
        swstr = (tout.standardWallpaper.url) ? '' : '{color:red}'+erLoc+'standard wallpaper image missing{color} \\\\';
        wwstr = (tout.widescreenWallpaper.url) ? '' : '{color:red}'+erLoc+'widescreen wallpaper image missing{color} \\\\';
        var cStr = fbstr + mwstr + swstr + wwstr;
        
        if(qaMode){ /* Include Wallpapers */
            wiki_rowImg('Wallpaper / Std', tout.standardWallpaper.url, 150);
            wiki_rowImg('Wallpaper / Mobile', tout.mobileWallpaper.url, 150);
            wiki_rowImg('Wallpaper / Wide', tout.widescreenWallpaper.url, 150);
            var wallFn = getFn(tout.standardWallpaper.url) + ' \\\\' 
                        + getFn(tout.mobileWallpaper.url) + ' \\\\' 
                        + getFn(tout.widescreenWallpaper.url);
            wiki_row('Wallpaper / Fn', wallFn);
        }
        
        wiki_row("Comments & Approval", "");
        
        // --| Social media |--------------------------------------------
        wiki_row("Email / Subject", 	tout.socialMedia.title || "(x)");
        wiki_row("Email / Copy", 		tout.socialMedia.emailDescription || "(x)");
        //wiki_rowImg("Facebook / Image", getFn(tout.socialMedia.image) || "(x)");
        wiki_rowImg("Facebook / Image", (qaMode ? tout.socialMedia.image : getFn(tout.socialMedia.image)));
        wiki_row("Facebook / Filename", getFn(tout.socialMedia.image) || "(x)");
        wiki_row("Facebook / Copy", 	tout.socialMedia.description || "(x)");
        wiki_row("Twitter / Copy",  	tout.socialMedia.shortDescription || "(x)");
        //wiki_nl();
        if(cStr) wiki_row("+Error Log+",  	        cStr);
        
        console.log('    ');
        console.log('     ');


    }
}

wiki_nl(4);
//addBlankTables();

wiki_echo("{style}");
wiki_echo("/* ------------| Do not edit |---------------------------------------------------------------- */");
wiki_echo("table.confluenceTable{ width: 100%; margin-bottom: 45px; }");
wiki_echo(".confluenceTh { width: 180px; }");
wiki_echo(".page-toc ul{ list-style-type: none; padding: 0px; }");
wiki_echo(".page-toc ul li{ border: 1px solid #A4A4A4; margin: 0 0 3px 0; width: 205px;}");
wiki_echo(".page-toc ul li:hover{ width: 215px; border-color: #7D7D7D; }");
wiki_echo(".page-toc ul li a{ padding: 5px 20px; display: block; text-decoration: none !important; }");
wiki_echo(".page-toc ul li a:hover{ background: #DFDFDF; }");
wiki_echo(".page-toc ul li a:active{ background: #f9f9f9; padding-left: 25px;  }");
wiki_echo("h5:contains(\"Table of Contents\"){ margin-top: 50px; }");
wiki_echo("{style}");








/**
 * Functions 
 *******************************************************************************/
function addBlankTables(){
    wiki_nl();
    wiki_echo("h5. Blank Tables");
    wiki_nl(2);
    // Image
    wiki_row("Image", 	            "Empty Image table");
    wiki_row("Title", 	            "");
    wiki_row("Description", 		"");
    wiki_row("Image / Filename", 	"");
    wiki_row("Image / Thumbnail", 	"");
    wiki_row("Image / Alt", 		"");
    wiki_row("Comments & Approval", "");
    wiki_row("Email / Subject", 	"");
    wiki_row("Email / Copy", 		"");
    wiki_row("Facebook / Image", 	"");    
    wiki_row("Facebook / Filename", "");
    wiki_row("Facebook / Copy", 	"");
    wiki_row("Twitter / Copy",  	"");
    wiki_nl(2);
    
    // Video
    wiki_row("Video", 	            "Empty Video table");
    wiki_row("Title", 	            "");
    wiki_row("Description", 		"");
    wiki_row("Image / Filename", 	"");
    wiki_row("Image / Thumbnail", 	"");
    wiki_row("Image / Alt", 		"");
    wiki_row("Video / Filename", 	"");
    wiki_row("Video / Path", 	    "");
    wiki_row("Comments & Approval", "");
    wiki_row("Email / Subject", 	"");
    wiki_row("Email / Copy", 		"");
    wiki_row("Facebook / Image", 	"");    
    wiki_row("Facebook / Filename", "");
    wiki_row("Facebook / Copy", 	"");
    wiki_row("Twitter / Copy",  	"");
    wiki_nl(2);
    
    // 360
    wiki_row("360", 	            "Empty 360 table");
    wiki_row("Title", 	            "");
    wiki_row("Image / Fallback", 	"");
    wiki_row("Image / Thumbnail", 	"");
    wiki_row("Image / Alt", 		"");
    wiki_row("360 / Path", 		    "");
    wiki_row("Comments & Approval", "");
    wiki_row("Email / Subject", 	"");
    wiki_row("Email / Copy", 		"");
    wiki_row("Facebook / Image", 	"");    
    wiki_row("Facebook / Filename", "");
    wiki_row("Facebook / Copy", 	"");
    wiki_row("Twitter / Copy",  	"");
} 

// ---| Wiki-formatting |------------------------------------------------------
/* Creates a two collumn row, with the second being an image */
function wiki_rowImg(label, filename, width){
    if(filename == "(x)"){ 
        wiki_row(label, filename);
        return true;
    }
    var titleStr = (filename) ? "|title="+filename : "";
    titleStr = titleStr + ((width && filename) ? ",width="+width : "");
	wiki_row(label, "!"+ filename + titleStr + "!");
}

/* Creates a basic two collumn row */
function wiki_row(label, value){ 
	wiki_echo("||*"+ label + "*|"+ value +" |"); 
}

/* Heading 1 */
function wiki_h1(heading){ 
	wiki_echo('h1. ' + heading); 
}

/* New line */
function wiki_nl(count){ 
	count = count || 1;
	while(count--){ 
        var whiteSpace = " ";
        wiki_echo("\\\\" + whiteSpace.repeat(Math.floor((Math.random()*10)+1)));
    } 
}

/* Outputs to console */
function wiki_echo(text){ write_output(text, window.outputToConsole); }

function write_output(text, outputToConsole){	
	if(outputToConsole){
		console.log(text);
	}else{
		if(!window.myoutput){ popupInit(); }
		$(window.mydoc).find('#myoutput').val($(window.mydoc).find('#myoutput').val() + text + '\n');
	}
}

/* ? */
function wiki_th(label, value){ 
    wiki_echo("||*"+ label + "*||*"+ value +"* |"); 
}


// ---| Utility Functions |------------------------------------------------------

function getTypeLabel(toutType){
    switch(toutType){
        case 'img':
            return 'Image';
        case 'video':
            return 'Video';
        case 'richmedia':
            return '360';
        default:
            return 'Image'; 
    }
}

function ucfirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getFn(filename){
	if(filename === null || filename.length === 0){
		return '';
	}
	var temp = filename.split('/');	
	filename = temp[temp.length-1];
	
	var temp = filename.split('?');
	filename = temp[0];
	return filename;
}

function erLocation(i, j){
    var sec = '';
    switch(i){
        case '0':
            sec = 'Exterior';
            break;
        case '1':
            sec = 'Interior';
            break;
        case '2':
            sec = 'Accessories';
            break;
        default:
            sec = 'Section ' + i;
            break;  
    }
    return sec + ': tout ' + (parseInt(j)+1) + ' - ';
}

