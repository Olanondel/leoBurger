function menuToggle() {
  let x = document.getElementById('list');

  if (!x.className) {
    x.className += 'openMenu';
  } else {
    x.className = '';
  }
}

$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
  });
});