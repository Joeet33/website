function changeTSize(nu) {
  var el = document.getElementsByTagName('body')[0]; 
     // only one body in document
  var fontSizeString = window
     .getComputedStyle(el, null)
     .getPropertyValue('font-size');
  var fontSize = parseFloat(fontSizeString); 
  el.style.fontSize = (fontSize + nu) + 'px';
    // Must be done separately for buttons:
  var els = document.getElementsByTagName('button');
  for (var i = 0; i < els.length; i++) {
     fontSizeString = window
        .getComputedStyle(els[i], null)
        .getPropertyValue('font-size');
     var fontSize = parseFloat(fontSizeString); 
     els[i].style.fontSize = (fontSize + nu) + 'px';
  }
 }