// Declarations
var toTopButton = document.getElementById('toTopButton');

// Functions  
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
  var context = this, args = arguments;
  var later = function() {
    timeout = null;
    if (!immediate) func.apply(context, args);
  };
  var callNow = immediate && !timeout;
  clearTimeout(timeout);
  timeout = setTimeout(later, wait);
  if (callNow) func.apply(context, args);
  };
};

var scrollFunction = debounce(function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}, 30);

// Event Listeners 
window.addEventListener('scroll', debounce(scrollFunction));

toTopButton.addEventListener("click", function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}); 
