
$('.wiki-content').find('.confluenceTable').each(function(){
    var twitterMax = 120;
    
    $(this).find('tr').each(function(){
        var labelEl = $(this).children().eq(0),
            valueEl = $(this).children().eq(1),
            label = labelEl.text().trim();
        
            if(label == 'Twitter / Copy'){
                var len = valueEl.text().trim().length,
                    bgColor = (len >= twitterMax) ? 'red' : 'green';
                
                valueEl.css({'background':bgColor});
                labelEl.text(label + ' (' + len + ')');
            }
    });
});
