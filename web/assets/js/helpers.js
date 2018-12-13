console.clear();

var hamburger = document.querySelector('#hamburger');
var header = document.querySelector('header');
var navOver = document.querySelector('#nav-overlay');
var main = document.querySelector('main');
var footer = document.querySelector('footer');

var last_known_scroll_position = 0;
var ticking = false;
var shrinkHead = false; /* record status of header, needed when toggling menu overlay */
var footerVisible = false;

// collapse header on scroll
function shrinkHeader(scroll_pos) {
  // subtract scrollposition + window height from document height
  var scroll_progress = document.documentElement.scrollHeight - (last_known_scroll_position + document.documentElement.clientHeight); // 0 wenn completely scrolled to bottom

  if (last_known_scroll_position > 100 && !navOver.classList.contains('visible')) {
    header.classList.add('shrink');
    shrinkHead = true;
    if (scroll_progress < 430) { // footer is visible 430 = footer height on desktop
      header.classList.add('mini');
      footerVisible = true;
    } else { // scrolling, footer not visible
      if (header.classList.contains('mini')) { // footer not visible anymore, header can expand
        header.classList.remove('mini');
        footerVisible = false;
      }
    }
  } else {
    if (header.classList.contains('shrink')) {
      header.classList.remove('shrink');
      shrinkHead = false;
    }
  }
}

window.addEventListener('scroll', e => {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame( () => {
      shrinkHeader(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});
// end collapse header on scroll

// toggle class of hamburger, i.e. toggle menu on touch devices
hamburger.addEventListener('click', e => {
  navOver.classList.toggle('visible');
  main.classList.toggle('noScroll');
  footer.classList.toggle('noScroll');
  if (navOver.classList.contains('visible')) {
    window.scrollTo(0, 0);
  }
  // if (!shrinkHead) { header.classList.toggle('shrink'); } // only toggle shrinked header if still expanded
}); 

// mute all videos
window.onload = function () {
  let videos = document.querySelectorAll('video');
  for (video of videos) {
    video.muted = "true";
    video.classList.add('shut-up');
  }
}
