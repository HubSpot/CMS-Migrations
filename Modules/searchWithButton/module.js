var hsSearch = function(_instance) {
  var TYPEAHEAD_LIMIT			= 3;
  var searchForm 					=	_instance,
      searchField 				= _instance.querySelector('.hs-search-field__input'),
      searchTerm      		= "",
      searchResults 			= _instance.querySelector('.hs-search-field__suggestions'),
     	searchOptions				= function() {
        var formParams = [];
        var form = document.querySelector('form');
        for ( var i = 0; i < form.querySelectorAll('input[type=hidden]').length; i++ ) {
           var e = form.querySelectorAll('input[type=hidden]')[i];
          	if (e.name !== 'limit') {
            	formParams.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
            }
        }
        var queryString = formParams.join("&");
				return queryString;
      };

  var debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
          args = arguments;
      var later = function() {
        timeout = null;
        if ( !immediate ) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait || 200);
      if ( callNow ) {
        func.apply(context, args);
      }
    };
  },
  emptySearchResults = function(){
    searchResults.innerHTML = '';
    searchField.focus();
    searchForm.classList.remove('hs-search-field--open');
  },
  fillSearchResults = function(results){
    var items = [];
		items.push( "<li id='results-for'>Results for \"" + searchTerm + "\"</li>" );
    results.forEach(function(val, index) {
      var title             = val.title,
          resultUrl         = val.url,
          resultDescription = val.description;
      items.push( "<li id='result" + index + "'><a href='" + resultUrl + "'>" + title + "</a></li>" );
    });

    emptySearchResults();
    searchResults.innerHTML = items.join("");
    searchForm.classList.add('hs-search-field--open');
  },
  getSearchResults = function(){
    var searchUrl = "/_hcms/search?&term="+encodeURIComponent(searchTerm)+"&limit="+encodeURIComponent(TYPEAHEAD_LIMIT)+"&autocomplete=true&analytics=true&" + searchOptions();
    $.getJSON(searchUrl, function(data){
      if (data.results.length > 0) {
        fillSearchResults(data.results);
        trapFocus();
      }
      else {
        emptySearchResults();
      }
    });
  },
  trapFocus = function(){
    var tabbable = [];
    tabbable.push(searchField);
    var tabbables = searchResults.getElementsByTagName('A');
    for (var i = 0; i < tabbables.length; i++) {
      tabbable.push(tabbables[i]);
    }
    var firstTabbable = tabbable[0],
        lastTabbable  = tabbable[tabbable.length-1];
    var tabResult = function(e){
      if (e.target == lastTabbable && !e.shiftKey) {
        e.preventDefault();
        firstTabbable.focus();
      }
      else if (e.target == firstTabbable && e.shiftKey) {
        e.preventDefault();
        lastTabbable.focus();
      }
    },
    nextResult = function(e) {
      e.preventDefault();
      if (e.target == lastTabbable) {
        firstTabbable.focus();
      }
      else {
        tabbable.forEach(function(el){
          if (el == e.target) {
            tabbable[tabbable.indexOf(el) + 1].focus();
          }
        });
      }
    },
    lastResult = function(e) {
      e.preventDefault();
      if (e.target == firstTabbable) {
        lastTabbable.focus();
      }
      else {
        tabbable.forEach(function(el){
          if (el == e.target) {
            tabbable[tabbable.indexOf(el) - 1].focus();
          }
        });
      }
    };
    searchForm.addEventListener('keydown', function(e){
      switch (e.which) {
        case 9:
          tabResult(e);
          break;
        case 27:
          emptySearchResults();
          break;
        case 38:
          lastResult(e);
          break;
        case 40:
          nextResult(e);
          break;
      }
    });
  },
  db = debounce(function() {
    searchTerm = searchField.value;
    if(searchTerm.length > 2) {
      getSearchResults();
    }
    else if (searchTerm.length == 0)  {
      emptySearchResults();
    }
  }, 250),
  init = (function(){
    searchField.addEventListener('input', function(e) {
      if ((e.which != 9) && (e.which != 40) && (e.which != 38) && (e.which != 27) && (searchTerm != searchField.value)) {
        db();
      }
    });
  })();
}

if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
  var searchResults = document.querySelectorAll('.hs-search-field');
  Array.prototype.forEach.call(searchResults, function(el){
    var hsSearchModule = hsSearch(el);
  });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    var searchResults = document.querySelectorAll('.hs-search-field');
    Array.prototype.forEach.call(searchResults, function(el){
      var hsSearchModule = hsSearch(el);
    });
  });
}
