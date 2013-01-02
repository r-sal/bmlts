String.prototype.trim = function()  { return this.replace(/^\s+|\s+$/g,""); }

$('#wysiwygTextarea_ifr').contents().find('#tinymce').find('.confluenceTable').find('td, th').click(function(){
    var cell = $(this);

    cell.find('span').each(function(){
        var text = $(this).text();
        $(this).replaceWith(text);
    });
    
});

