function showVideos() {
  // a rather shameful way of implementing "load more" but there is
  // neither time nor money to do this the way it should be done..
  let counter = 0
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
  if (count > videos.length) {
    // hide button when no more videos left
    videoButton.style.display = "none"
  }
  count += 6 // up number of visible videos
}

function hideVideos() {
  // now it gets real lousy, i.e. redundant
  // because it was not right again, and i really have no time
  // and won’t be paid for extra stuff
  let counter = 0
  let count = 6
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
  if (count > videos.length) {
    // hide button when no more videos left
    videoButton.style.display = "none"
  }
}

const showVideoButton = document.querySelector('#video-button');
const hideVideoButton = document.querySelector('#hide-video-button');
const videos = document.querySelectorAll('.video-item'); 
let count = 6
showVideos()

showVideoButton.addEventListener('click' || 'touch', showVideos, false)
hideVideoButton.addEventListener('click' || 'touch', hideVideos, false)
