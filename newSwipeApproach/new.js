console.clear && console.clear();

var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

function Carousel(selector) {
  var self = this;
  var $carousel = $(selector);
  var $container = $('.pane-container', selector);
  var $panes = $('.pane', selector);

  var paneWidth = 0;
  var paneCount = $panes.length;
  var panBoundary = .25; // if the pane is paned .25, switch to the next pane.

  var currentPane = 0;

  function setPaneSize() {
    paneWidth = $carousel.width();
    $panes.each(function(i) {
      $(this).width(paneWidth);
    });
    $container.width(paneWidth * paneCount);
  }

  self.init = function() {
    setPaneSize();
    $(window).on('load resize orientationchange', function() {
      setPaneSize();
      self.showPane(currentPane);
    })
  }

  self.showPane = function(index) {
    currentPane = Math.max(0, Math.min(index, paneCount - 1));
    setContainerOffsetX(-currentPane * paneWidth, true);
  }

  function setContainerOffsetX(offsetX, doTransition) {
    if (doTransition) {
      $container
        .addClass('transition')
        .one(transitionEnd, function() {
          $container.removeClass('transition');
        })
    }
    $container.css({
      left: offsetX
    });
  }

  self.next = function() {
    self.showPane(++currentPane);
  }
  self.prev = function() {
    self.showPane(--currentPane);
  }

  function handleHammer(e) {
    switch (e.type) {
      case 'swipeleft':
      case 'swiperight':
        handleSwipe(e);
        break;
      case 'panleft':
      case 'panright':
      case 'panend':
      case 'pancancel':
        handlePan(e);
        break;
    }
  }

  function handleSwipe(e) {
    switch (e.direction) {
      case Hammer.DIRECTION_LEFT:
        self.next();
        break;
      case Hammer.DIRECTION_RIGHT:
        self.prev();
        break;
    }
    hammer.stop(true);
  }
  
  function outOfBound() {
    var left = $container.position().left;
    return (currentPane == 0 && left >= 0) ||
          (currentPane == paneCount - 1 && left <= -paneWidth * (paneCount - 1));
  }

  function handlePan(e) {
    switch (e.type) {
      case 'panleft':
      case 'panright':
        // Slow down at the first and last pane.
        if (outOfBound()) {
          e.deltaX *= .2;
        }
        setContainerOffsetX(-currentPane * paneWidth + e.deltaX);
        console.log(-currentPane * paneWidth + e.deltaX);
        break;
      case 'panend':
      case 'pancancel':
        if (Math.abs(e.deltaX) > paneWidth * panBoundary) {
          if (e.deltaX > 0) {
            self.prev();
          } else {
            self.next();
          }
        } else {
          self.showPane(currentPane);
        }
        break;
    }
  }

  var hammer = new Hammer($carousel[0]).on('swipeleft swiperight panleft panright panend pancancel', handleHammer);
}

var c = new Carousel('.carousel');
c.init();
c.showPane(0);