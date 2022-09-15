const table = document.querySelector('.price-table');
const buttons = table.querySelectorAll('button');

const tables = table.querySelectorAll('.tbody');

buttons.forEach( button => {
  button.addEventListener('click', () => {
    buttons.forEach(e => {
      e.classList.remove('active')
    })
    button.classList.add('active')

    tables.forEach( e => {
      e.classList.remove('visible')
      if(e.id === button.dataset.value) {
        e.classList.add('visible')
      }
    })
  })
})



$(document).ready(function(){
  $("#thanks-carousel").owlCarousel({
    margin: 30,
    rewind: false,
    loop: false,
    dots: false,
    nav: true,
    responsive:{
      0: {
        items: 1
      },
      768: {
        items: 2,
      },
      992: {
        items: 1,
      },
      1780: {
        items: 2,
      }
    },
    checkVisibility: false,
  });
});