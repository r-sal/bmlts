/*!
 * Run jQuery Code Bookmarklet - v0.4 - 6/25/2009
 * http://benalman.com/projects/run-jquery-code-bookmarklet/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 */


// MINIFIED (use this for your bookmarklet)

javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="http://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.3.2",function($,L){/* YOUR JQUERY CODE GOES HERE */});


// SAMPLE "JQUERY CODE"

// This shows what jQuery version already existed in the page (if applicable),
// and what the newly loaded jQuery version is (if applicable)

alert('existing: '+(window.jQuery?jQuery.fn.jquery:'N/A')+', loaded: '+(L?$.fn.jquery:'N/A'));


// UNMINIFED

(function( window, document, req_version, callback, $, script, done, readystate ){
  
  // If jQuery isn't loaded, or is a lower version than specified, load the
  // specified version and call the callback, otherwise just call the callback.
  if ( !($ = window.jQuery) || req_version > $.fn.jquery || callback( $ ) ) {
    
    // Create a script element.
    script = document.createElement( 'script' );
    script.type = 'text/javascript';
    
    // Load the specified jQuery from the Google AJAX API server (minified).
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/' + req_version + '/jquery.min.js';
    
    // When the script is loaded, remove it, execute jQuery.noConflict( true )
    // on the newly-loaded jQuery (thus reverting any previous version to its
    // original state), and call the callback with the newly-loaded jQuery.
    script.onload = script.onreadystatechange = function() {
      if ( !done && ( !( readystate = this.readyState )
        || readystate == 'loaded' || readystate == 'complete' ) ) {
        
        callback( ($ = window.jQuery).noConflict(1), done = 1 );
        
        $( script ).remove();
      }
    };
    
    // Add the script element to either the head or body, it doesn't matter.
    document.documentElement.childNodes[0].appendChild( script );
  }
  
})( window, document,
  
  // Minimum jQuery version required. Change this as-needed.
  '1.3.2',
  
  // Your jQuery code goes inside this callback. $ refers to the jQuery object,
  // and L is a boolean that indicates whether or not an external jQuery file
  // was just "L"oaded.
  function( $, L ) {
    '$:nomunge, L:nomunge'; // Used by YUI compressor.
    
    /* YOUR JQUERY CODE GOES HERE */
    
  }
);




// ========================================================================== //
// SLIGHTLY SMALLER (BUT SLIGHTLY LESS AWSESOME) POLLING METHOD
// ========================================================================== //


// MINIFIED (use this for your bookmarklet)

javascript:(function(b,c,h,i,g,e,f,d){if(!b[h]||i>b[h].fn.jquery){f=c.documentElement.childNodes[0];d=c.createElement("script");d.type="text/javascript";d.src="http://ajax.googleapis.com/ajax/libs/jquery/"+i+"/jquery.min.js";f.appendChild(d);e=g;g=function($,L){$(d).remove();e($,L)}}(function a($){($=b[h])&&i<=$.fn.jquery?g(f?$.noConflict(1):$,!!f):setTimeout(a,50)})()})(window,document,"jQuery","1.3.2",function($,L){/* YOUR JQUERY CODE GOES HERE */});


// UNMINIFED

(function( window, document, jQuery, req_version, callback, callback_orig, parent, script ){
  
  // If jQuery isn't loaded, or is a lower version than specified, load the specified version.
  if ( !window[jQuery] || req_version > window[jQuery].fn.jquery ) {
    
    // Create a script element in either the head or body, it doesn't matter.
    parent = document.documentElement.childNodes[0];
    script = document.createElement( 'script' );
    
    script.type = 'text/javascript';
    
    // Load the specified jQuery from the Google AJAX API server (minified).
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/' + req_version + '/jquery.min.js';
    
    parent.appendChild( script );
    
    // Amend the callback to remove the just-added script block when loaded,
    // since it's no longer needed.
    callback_orig = callback;
    callback = function( $, L ) {
      '$:nomunge, L:nomunge'; // Used by YUI compressor.
      
      $(script).remove();
      callback_orig( $, L );
    };
  }
  
  // Poll to ensure that jQuery exists, and that its version is at least the
  // version specified. If jQuery was just loaded, enable noConflict mode to
  // return the original jQuery to where it was, but still pass the reference
  // into the callback.
  (function loopy($){
    '$:nomunge'; // Used by YUI compressor.
    
    ( $ = window[jQuery] ) && req_version <= $.fn.jquery
      ? callback( parent ? $.noConflict(1) : $, !!parent ) : setTimeout( loopy, 50 );
  })();
  
})( window, document, 'jQuery',
  
  // Minimum jQuery version required. Change this as-needed.
  '1.3.2',
  
  // Your jQuery code goes inside this callback. $ refers to the jQuery object,
  // and L is a boolean that indicates whether or not an external jQuery file
  // was just "L"oaded.
  function( $, L ) {
    '$:nomunge, L:nomunge'; // Used by YUI compressor.
    
    /* YOUR JQUERY CODE GOES HERE */
    
  }
);


