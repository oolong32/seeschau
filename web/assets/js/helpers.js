console.clear();

let hamburger = document.querySelector('#hamburger');
let header = document.querySelector('header');
let navOver = document.querySelector('#nav-overlay');

let last_known_scroll_position = 0;
let ticking = false;
let shrinkHead = false; /* record status of header, needed when toggling menu overlay */

// collapse header on scroll
function shrinkHeader(scroll_pos) {
  if (last_known_scroll_position > 100) {
    header.classList.add('shrink');
    shrinkHead = true;
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
  if (!shrinkHead) { header.classList.toggle('shrink'); } // only toggle shrinked header if still expanded
}); 
