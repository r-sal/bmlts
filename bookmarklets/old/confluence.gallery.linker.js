String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g,""); }
$(document).ready(function() {
    window.imgArr = getImgArr();
    $('h1').each(function(){
        console.log($(this).text() + '--------------------');
        
        $(this).nextUntil('h1').each(function(){
            $(this).find('th.confluenceTh').each(function(){
                if('Image / Thumbnail' == $(this).text().trim()){
                    var thumb = $(this).next();
                    //console.log(thumb);
                    var toutImg = findImgInArr(thumb.text().trim());
                    if(toutImg){
                        //console.log();
                        
                        var a = $('<a></a>')
                                    .attr('href', toutImg.href)
                                    .attr('target', '_blank')
                                    .html(thumb.text().trim());
                        thumb.empty();
                        thumb.html(a);
                    }else{
                        console.log('*not found -> ' + thumb.text().trim());
                    }
                }
            });
        });
    });
    

});


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