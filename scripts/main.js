const nav = document.querySelector('nav');
var previousScrollTop;
var isScrolling;

function hasScrolled() {
  
  var scrollTop = window.scrollY;
  
  if (scrollTop > previousScrollTop){
    nav.classList.add('.nav--down');
  } else {
    nav.classList.remove('.nav--down');
  }
    
  previousScrollTop = scrollTop;
  
}

document.addEventListener('scroll', function() {
  isScrolling = true;
}, false);

setInterval(function() {
  if (isScrolling) {
    hasScrolled();
    isScrolling = false;
  }
}, 100);