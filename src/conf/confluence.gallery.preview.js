String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g,""); }
$(document).ready(function() {
    $('<li id="showPreview"><a href="#">Show Preview</a></li>')
        .appendTo($('.page-toc').find('ul'));
    $('li#showPreview a').click(function(){
        displayPreview();
    });

});

function hidePreview(){
    $('.wiki-content').show();
    $('#previewDiv').hide();
}
function displayPreview(){
    var sidebar = $('<div id="previewDiv"></div>').css({'width':'100%', 'height':'100%'});
    var ul = $('<ul></ul>');
    ul.css({'list-style-type':'none'});
    window.imgArr = getImgArr();
    
    $('#content').find('h1').each(function(){
        console.log($(this).text() + '--------------------');
        var secImg = 'http://placehold.it/218x123/d7d7d7/000000&text=' + $(this).text();
        $('<img />')
            .attr('src', secImg)
            .css({'float':'left', 'display':'inline', 'margin':'13px 16px 0 0'})
            .appendTo($('<li></li>').appendTo(ul)); 
   
        $(this).nextUntil('h1').each(function(){
            
            $(this).find('th.confluenceTh').each(function(){
                if('Image / Thumbnail' == $(this).text().trim()){
                    var thumb = $(this).next();
                    var toutImg = findImgInArr(thumb.text().trim());
                    if(toutImg){
                        var imgThumbUrl = toutImg.href;

                            
                    }else{
                        var imgThumbUrl = 'http://placehold.it/218x123/ff3333/000000&text=Not+Found!'
                    }

                    
                    var sideImg = $('<img />')
                                    .attr('src', imgThumbUrl)
                                    .css({'float':'left', 'display':'inline', 'margin':'13px 16px 0 0'});
                    var li = $('<li></li>');
                    sideImg.appendTo(li.appendTo(ul));
                }
            });
        });
    });
    
    $('<div class="page-toc"><ul><li id="hidePreview"><a href="#">Hide Preview</a></li></ul></div>').appendTo(sidebar);
    ul.appendTo(sidebar);
    sidebar.insertAfter('.wiki-content');
    $('.wiki-content').hide();
    $('li#hidePreview a').click(function(){
        hidePreview();
    });
}

function findImgInArr(filename){
    for (var i = 0; i < window.imgArr.length; i++) {
        if(filename == window.imgArr[i].filename){
            return window.imgArr[i];
        }
    }
    return null;
}

function getImgArr(){
    var imgArr = [];
    $('ul#rw_attachment_list').find('a:first-of-type').each(function(){
        var imgObj = {};
        imgObj.filename = $(this).text().trim();
        imgObj.href = $(this).attr('href');
        imgArr.push(imgObj);
    });
    return imgArr;
}