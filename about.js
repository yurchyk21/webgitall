var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);
 
function throttleScroll(e) {
    if (isScrolling == false ) {
        window.requestAnimationFrame(function() {
          dealWithScrolling(e);
          isScrolling = false;
        });
    }
    isScrolling = true;
}   
 
function dealWithScrolling(e) {
    // do epic stuff    
}
	
function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
 
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;
 
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
	
function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
 
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
 
  return ((top >= 0) && (bottom < = window.innerHeight));
}