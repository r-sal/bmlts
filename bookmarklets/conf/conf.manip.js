var socialLabels = [
    "Email / Subject",
    "Email / Copy",
    "Facebook / Image",
    "Facebook / Filename",
    "Facebook / Copy",
    "Twitter / Copy",
    ];
    
$('#wysiwygTextarea_ifr').contents().find('#tinymce').find('.confluenceTable').each(function(){

    $(this).find('tr th:first-of-type').each(function(){
        //
        if($.inArray($(this).text(), socialLabels) != -1){
        //if($(this).text() == "Comments & Approval"){
            console.log($(this).text(), $.inArray($(this).text(), socialLabels));
            
            $(this)
                //.next()
                .attr('data-highlight-class', 'rnote')
                //.addClass('note')
                //.addClass('highlight');
                
                .addClass('info');
            
        }
    });
});


// BLUE
//.
//info