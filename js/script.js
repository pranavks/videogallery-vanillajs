let videoGallery = document.querySelector('.video-gallery');
let videoContainer = videoGallery.querySelector('.video-container');
let video = videoGallery.querySelector('#video1');
let img = videoGallery.querySelector('#play-video').firstElementChild;
let currentID;

videoGallery.addEventListener('click', function (event) {
  if (!event.target.dataset.src) return;

  video.src = event.target.dataset.src;
  img.src = event.target.dataset.img;
  video.style.display = 'none';
  videoGallery.querySelector('#play-video').style.display = 'block';
  videoContainer.classList.add('overlay');

  videoGallery.querySelector('.selected').classList.remove('selected');
  event.target.closest('.video-link').classList.toggle('selected');
});

// Disable for mobiles (Due to Youtube's iframe restrictions)
function myFunction1(x) {
  if (x.matches) {
    // If media query matches
    videoContainer.addEventListener('click', function (ev) {
      this.firstElementChild.style.display = 'none';
      this.classList.remove('overlay');
      thevid = videoGallery.querySelector('#video1');
      thevid.style.display = 'block';
      $('#video1')[0].src += '&autoplay=1';
      ev.preventDefault();
    });
  } else {
    return;
  }
}

var x = window.matchMedia('(min-width: 1200px)');
myFunction1(x);
x.addListener(myFunction);
