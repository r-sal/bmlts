$(document).ready(function() {
    var pageTitle = $('meta[name="ajs-page-title"]').attr('content');
    packageHeading = $('h2:contains("Packages")');
    
    var itemsToLoad = [];
    $('.panelMacro').find('table.infoMacro').find('h5').each(function(){
        itemsToLoad.push($(this).text());
    }).end().hide();
    
    
    
    $.ajax({
        url: "http://confluence.mbusa.corpintra.net/pages/viewpage.action?pageId=28772163",
        context: document.body,
        dataType: 'html'
    }).done(function(data) { 
        var page = $(data),
            packageHeader = page.find('h1:contains("Packages")'),
            packages = packageHeader.nextUntil('h1');
        
        packages.each(function(){
            var packageTitle = $(this).find('tr').eq(0).children().eq(1).text();
            console.log(itemsToLoad);
            var itemIndex = jQuery.inArray(packageTitle, itemsToLoad);
            if(itemIndex != -1){
                packageHeading.after($(this));
                itemsToLoad.splice(itemIndex,1);
                console.log(itemsToLoad);
            }
        });
        
        /*
        if(itemsToLoad.length){
            for(var i in itemsToLoad){
                var errorLog = $('<div></div>').attr('id', 'errorLog');
                $('<span></span><br>')
                    .html(itemsToLoad[i])
                    .appendTo(errorLog);
            }
            
            packageHeading.after(errorLog);
        }
        */
    });
});

/*
var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));
*/