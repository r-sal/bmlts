$(document).ready(function() {
    
    var panels = $('.panelMacro');

    var pageTitle = $('meta[name="ajs-page-title"]').attr('content');
    packageHeading = $('h2:contains("Packages")');

    console.log(packageHeading);
    
    panels.each(function(){
        var table = $(this).find('.confluenceTable');
    });
    
    //packageHeading.after($('<div><h4>Rick Was Here</h4></div>'));
    
    $.ajax({
      url: "http://confluence.mbusa.corpintra.net/pages/viewpage.action?pageId=28772163",
      context: document.body,
      dataType: 'html'
    }).done(function(data) { 
        var page = $(data);
        
        var packageHeader = page.find('h1:contains("Packages")');
        
        var packages = packageHeader.nextUntil('h1');
        
        packageHeading.after(packages);
        
    });
});









