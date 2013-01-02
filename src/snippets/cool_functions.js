function isNull(a) {
  return typeof a == 'object' && !a;
}

function isset(a) {
  return !isNull(a) && a !=undefined ;
}

function neatValueNotNull(value) {
  if (isNull(value) || (value=="undefined")) {
    return "" ;
  }
  else {
    return value ;
  }
}

