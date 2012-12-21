function openpopup(popurl){
    window.winpops = window.open(popurl,"","width=500,height=800,toolbar,location,status,scrollbars,menubar,resizable");
}

function write(str){
    window.winpops.document.write(str);
}

openpopup("");