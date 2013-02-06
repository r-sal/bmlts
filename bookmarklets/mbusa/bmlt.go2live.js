/**
 * When on one of the test sites, this bookmarklet will open the coorosponding page on live. 
 */
function replacer(match, p1){
    return "http://www.mbusa.com/" + p1.replace(/mercedes-?\d?/, "mercedes");
};
window.location.href = window.location.href.replace(/.+\.mbusa\.com\/(.+\/)?/, replacer);


/**
 * go2stage
 */
function replacer(match, p1){
    return "http://stage.mbusa.com/" + p1.replace(/mercedes-?\d?/, "mercedes");
};
window.location.href = window.location.href.replace(/.+\.mbusa\.com\/(.+\/)?/, replacer);