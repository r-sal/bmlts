$(document).ready(function() {

    $('#content').find('h1').each(function(){

        $(this).nextUntil('h1').each(function(){
            
            $(this).find('.confluenceTable').each(function(){

                $(this).find('tr').each(function(){
                    var label = $(this).children().eq(0).text();
                    
                    switch(label){
                        case 'Title':

                            break;
                        case 'Image':

                            break;
                        case 'Copy':
                            
                            break;                        
                        case 'Image / Alt':
                            $(this).hide();
                            break;                        
                        case 'Image / Filename':
                            $(this)
                                .addClass('imageFilename')
                                .hide();
                            break;
                        default:
                            break;
                    }
                    
                });
            
            });
            
            
        }); /* end each h1 */
        

    });
    
    $('#content').find('img').hover(function(){
        $(this).parentsUntil('.confluenceTable', 'tbody').find('.imageFilename').toggle();
    });


});