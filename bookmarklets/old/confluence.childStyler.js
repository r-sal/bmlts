$(document).ready(function() {
    
    var styles = {};
    styles.ul = 'list-style-type: none;';
    styles.li = ' padding:10px;'; //margin: 10px; 
    styles.li_a = 'border-bottom:1px solid #b8b8b8; font-size:18px; color:#000000; text-decoration: none; display: block; margin-bottom: 12px;';
    styles.li_ul = 'list-style-type: none; ';
    styles.li_ul_li = 'border-bottom:1px solid #000000;';
    
//

    var headStyle = '.wiki-content ul{ padding-left: 15px; list-style-type: none;}\
    ul li a{ }\
    ul li ul li{  }\
    ul li ul li a{ border-bottom:1px dotted #dedede; font-size:14px; color:#000000; font-weight: bold; display: block; margin-bottom: 6px;}\
    ul li ul li ul li { border: none;}\
    ul li ul li ul li a{ font-size:13px; color:#000000 }\
    ';
    $('<style></style>').html(headStyle).appendTo($('head'));
    
    var wiki = $('#content').find('.wiki-content'),
        ul = wiki.find('ul').eq(0);
        
    ul.addClass('childtoc').attr('style', styles.ul);
    
    ul.children().each(function(){
        var li = $(this),
            li_a = $(this).find('a').eq(0),
            li_ul = $(this).find('ul').eq(0);

        li.attr('style', styles.li);
        li_a.attr('style', styles.li_a);
        li_ul.attr('style', styles.li_ul);
        
        li_ul.children().each(function(){
            var ulul_a = $(this).find('a').eq(0);
            console.log(ulul_a);
            ulul_a.attr('style', 'color:#000000; text-decoration: none;');
        });
    });
});