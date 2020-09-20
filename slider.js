let index = 0;
showSlides(index);

function changeSlide(n) {
  showSlides((index += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName('mySlides');
  if (n < 0) {
    index = slides.length - 1;
  }
  if (n >= slides.length) {
    index = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
}
if(is_changed===true)
document.body.style.background = 'grey';