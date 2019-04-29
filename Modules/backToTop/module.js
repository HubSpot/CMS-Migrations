// Declarations
var toTopButton = document.querySelector("button.back-to-top");

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

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
};

// Event Listeners
// Debounce takes in three params: Func to debounce, time to wait, if we should debounce immediately
window.addEventListener('scroll', debounce(scrollFunction, 10, true));

toTopButton.addEventListener("click", function(){
  // $("html, body").animate({ scrollTop: 0 }, 600);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
