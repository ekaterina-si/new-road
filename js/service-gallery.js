const galleryImg = document.querySelector('.gallery-img');
  const miniatures = document.querySelectorAll('.gallery-img-mini');

  miniatures.forEach((item) => {
    const img = item.querySelector('img');
    item.addEventListener('click', function() {
      galleryImg.src = img.src;
      removeActiveClass()
      item.classList.add('active')
    })
  })

  function removeActiveClass() {
    miniatures.forEach((item) => {
      item.classList.remove('active')
    })
  }