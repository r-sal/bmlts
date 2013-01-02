
$(document).ready(function() {
    var wrapper = $('<div id="mpPreview"></div>');
    wrapper.css({'width':'715px', 'margin':'0 auto'});
    $('#content').find('h1').each(function(){
        var sectionWrapper = $('<div></div>');

        var secHeader = $('<h1></h1>').html($(this).text());
        secHeader.appendTo(sectionWrapper);
        $(this).nextUntil('h1').each(function(){
            
            $(this).find('.confluenceTable').each(function(){
                var data = {};
                $(this).find('tr').each(function(){
                    var label = $(this).children().eq(0).text();
                    
                    switch(label){
                        case 'Title':
                            data.title = $(this).children().eq(1).text();
                            break;
                        case 'Image':
                            data.image = $(this).children().eq(1).find('img').attr('src');
                            break;
                        case 'Copy':
                            data.copy = $(this).children().eq(1).text();
                            break;
                        default:
                            break;
                    }
                    
                });
                
                var tout = $('<div class="tout"></div>')
                                .css({'clear':'both', 'border-top':'1px solid #E2E3E3', 'margin':'20px 0 0 0'});
                
                var toutInner = $('<div class="tout-inner"></div>')
                                    .css({'padding':'0 0 10px 0'});
                var contentWrap = $('<div class="tout-content"></div>').css({'width':'315px', 'float':'left'});
                var imageWrap = $('<div class="tout-image"></div>');
                $('<h4></h4>').html(data.title).appendTo(tout);
                
                $('<p></p>').html(data.copy).appendTo(contentWrap);
                
                
                if(data.image){
                    $('<img src="" >').attr('src', data.image).css({'float':'right', 'padding':'0 60px 0 40px'}).appendTo(imageWrap);
                    
                }
                
                
                
                
                contentWrap.appendTo(toutInner);
                imageWrap.appendTo(toutInner);
                
                toutInner.appendTo(tout);
                
                
                tout.appendTo(sectionWrapper);
                console.log(data);
            });
            
            
        });
        
        sectionWrapper.appendTo(wrapper);
    });
    
    wrapper.insertAfter('.wiki-content');
    $('.wiki-content').hide();
});