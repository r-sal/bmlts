function makeCookie(name, value, days) {
    var expires = "", date;
    if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=",
        ca = document.cookie.split(';'),
        i,
        c;
        i = ca.length;
        
    while (i--) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function killCookie(name) {
    makeCookie(name, '', -1);
}



// Short 
// Cookie functions - Peter-Paul Koch: http://www.quirksmode.org/js/cookies.html
function makeCookie(N,V,D){var E="",A;if(D){A=new Date();A.setTime(A.getTime()+(D*24*60*60*1000));E="; expires="+A.toGMTString();}document.cookie=N+"="+V+E+"; path=/";}
function readCookie(N){var E=N+"=",C=document.cookie.split(';'),i,c;i=C.length;while(i--){c=C[i];while(c.charAt(0)===' '){c=c.substring(1,c.length);}if(c.indexOf(E)===0){return c.substring(E.length, c.length);}}return null;}
function killCookie(N){makeCookie(N,'',-1);}