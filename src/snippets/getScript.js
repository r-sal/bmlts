// getScript()
// more or less stolen form jquery core and adapted by paul irish

function getScript(url, success){
  var head = document.getElementsByTagName("head")[0], done = false;
  var script = document.createElement("script");
  script.src = url;

  // Attach handlers for all browsers
  script.onload = script.onreadystatechange = function(){
  	if ( !done && (!this.readyState ||
  			this.readyState == "loaded" || this.readyState == "complete") ) {
  		done = true;
  		success();
  	}
  };

  head.appendChild(script);
}

// usage:
getScript('http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',function(){ 
  alert('jQuery loaded. yay life') 
});