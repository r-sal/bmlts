var id = $('meta[name="ajs-page-id"]').attr('content');
var title = $('meta[name="ajs-page-title"]').attr('content');
myWindow=window.open('','','width=550,height=100');
myWindow.document.write("<p>http://confluence.mbusa.corpintra.net/pages/viewpage.action?pageId="+ id +"<br>"+ title +"</p>");
myWindow.focus();