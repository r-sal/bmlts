$('.wiki-content').find('h1').each(function(){
    var pageName = $(this).text();
    console.log(pageName + '-----------------------');
    $(this).nextUntil('h1').each(function(){
        if($(this).hasClass('table-wrap')){
            var table = $(this).find('table.confluenceTable').eq(0);
            console.log(table.children());
        }
    });

});