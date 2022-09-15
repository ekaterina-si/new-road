let playBtn = document.querySelector('.play-btn');
  let video = document.querySelector('video')

  playBtn.addEventListener('click', function() {
    this.classList.toggle('play');
    if (this.classList.contains('play')) {
      video.play();
    } else {
      video.pause();
    }
  })