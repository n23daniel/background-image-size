(function ( $ ) {

  function initCoverCSS($elem) {
    $elem.css({
      'position': 'relative',
      'overflow': 'hidden'
    });

    $elem.find('img').css({
      'position': 'absolute'
    });
  }

  function handleCover($elem, sizeType) {
    var $img = $elem.find('img');
    var ch = $elem.height();
    var cw = $elem.width();

    var ih = $img.height();
    var iw = $img.width();

    var containerRatio = ch / cw;
    var imageRatio = ih / iw;

    if (sizeType == 'cover') {
      var ratioDiff = containerRatio > imageRatio;
    } else if (sizeType == 'contain') {
      var ratioDiff = containerRatio < imageRatio;
    }

    if (ratioDiff) {

      $img.removeClass('tall');
      $img.addClass('wide');
      $img.css({
        'height': '100%',
        'width': 'auto',
        'top': 'auto',
        'left': '50%',
        'margin-top': 'auto',
        'margin-left': (iw / 2 * -1) + 'px'
      });

    } else {

      $img.removeClass('wide');
      $img.addClass('tall');
      $img.css({
        'width': '100%',
        'height': 'auto',
        'left': 'auto',
        'top': '50%',
        'margin-left': 'auto',
        'margin-top': (ih / 2 * -1) + 'px'
      });

    }
  }

  $.fn.background = function(type) {
    if (type != 'contain') {
      type = 'cover';
    }

    this.each(function(index, val) {
      var $elem = $(val);

      initCoverCSS($elem);

      $elem.find('img').load(function() {

        handleCover($elem, type); // initial call to set height/width of image
        handleCover($elem, type);

        $(window).resize(function() {
          handleCover($elem, type);
        });

      });
    });
  };

}( jQuery ));
