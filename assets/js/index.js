/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
  "use strict";

  $(document).ready(function(){

    // On the home page, move the blog icon inside the header
    // for better relative/absolute positioning.

    $(".post-content").fitVids();

    function casperFullImg() {
      $("img").each( function() {
        var contentWidth = $(".post-content").outerWidth(); // Width of the content
        var imageWidth = $(this)[0].naturalWidth; // Original image resolution

        if (imageWidth >= contentWidth) {
          $(this).addClass('full-img');
        } else {
          $(this).removeClass('full-img');
        }
      });
    }

    casperFullImg();
    $(window).smartresize(casperFullImg);

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-2909836-3', 'eduardomatos.me');
    ga('send', 'pageview');
  });

}(jQuery));

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
    var timeout;

    return function debounced () {
      var obj = this, args = arguments;
      function delayed () {
        if (!execAsap)
          func.apply(obj, args);
        timeout = null;
      }

      if (timeout)
        clearTimeout(timeout);
      else if (execAsap)
        func.apply(obj, args);

      timeout = setTimeout(delayed, threshold || 100);
    };
  };
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
