function init() {var xmlns = "http://www.w3.org/2000/svg",
 select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  container = select('.container')

//center the container cos it's pretty an' that
TweenMax.set(container, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})
TweenMax.set('svg', {
  visibility: 'visible'
})

var tl = new TimelineMax();
tl.staggerTo('#bubbleGroup circle', 3, {
  attr: {
    cy: 200
  },
  repeat: -1
}, 0.4)

          
                }