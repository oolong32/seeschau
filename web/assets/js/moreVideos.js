
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

const videoButton = document.querySelector('#video-button');
const videos = document.querySelectorAll('.video-item'); 
let count = 6
showVideos()

videoButton.addEventListener('click' || 'touch', showVideos, false)
