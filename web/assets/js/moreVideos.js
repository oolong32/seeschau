function showVideos() {
  // a rather shameful way of implementing "load more" but there is
  // neither time nor money to do this the way it should be done..
  counter = 0
  let count = 10 // shadow count
  videos.forEach((video) => {
    if (counter < count) {
      video.style.display = "block"
      console.log("show")
    } else {
      video.style.display = "none"
      console.log("hide")
    }
    counter += 1
  })
  showVideoButton.style.display = "none"
  hideVideoButton.style.display = "block";
}

function hideVideos() {
  // now it gets real lousy, i.e. redundant
  // because it was not right again, and i really have no time
  // and won’t be paid for extra stuff
  counter = 0
  videos.forEach((video) => {
    if (counter < count) {
      video.style.display = "block"
      console.log("show")
    } else {
      video.style.display = "none"
      console.log("hide")
    }
    counter += 1
  })
  showVideoButton.style.display = "block"
  hideVideoButton.style.display = "none";
}

const showVideoButton = document.querySelector('#video-button');
const hideVideoButton = document.querySelector('#hide-video-button');
const videos = document.querySelectorAll('.video-item'); 
let count = 6
let counter = 0

// initialise this stuff
videos.forEach(video => {
  if (counter < count) {
    video.style.display = "block"
    console.log("show")
  } else {
    video.style.display = "none"
    console.log("hide")
  }
  counter += 1
})
showVideoButton.style.display = "block"
hideVideoButton.style.display = "none";

showVideoButton.addEventListener('click' || 'touch', showVideos, false)
hideVideoButton.addEventListener('click' || 'touch', hideVideos, false)
