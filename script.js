// Modal elements
Const modal = document.getElementById(‘modal’);
Const modalImg = document.getElementById(‘modal-img’);
Const modalVideo = document.getElementById(‘modal-video’);
Const closeModal = document.querySelector(‘.close’);

// Open modal for images
Document.querySelectorAll(‘.image-gallery img’).forEach((img) => {
  Img.addEventListener(‘click’, () => {
    Modal.classList.remove(‘hidden’);
    modalImg.src = img.src;
    modalImg.style.display = ‘block’;
    modalVideo.style.display = ‘none’;
  });
});

// Open modal for videos
Document.querySelectorAll(‘.video-gallery video’).forEach((video) => {
  Video.addEventListener(‘click’, () => {
    Modal.classList.remove(‘hidden’);
    modalVideo.src = video.src;
    modalVideo.style.display = ‘block’;
    modalImg.style.display = ‘none’;
    modalVideo.play();
  });
});

// Close modal
closeModal.addEventListener(‘click’, () => {
  modal.classList.add(‘hidden’);
  modalImg.src = ‘’;
  modalVideo.src = ‘’;
  modalVideo.pause();
});

// Prevent downloading images and videos
Document.querySelectorAll(‘img, video’).forEach((media) => {
  Media.addEventListener(‘contextmenu’, (event) => {
    Event.preventDefault();
    Alert(‘Downloading is disabled. Please contact the author.’);
  });

  Media.addEventListener(‘dragstart’, (event) => {
    Event.preventDefault();
    Alert(‘Dragging is disabled. Please contact the author.’);
  });
});

// Load more images
Const imageGallery = document.getElementById(‘image-gallery’);
Const loadMoreImagesButton = document.getElementById(‘load-more-images’);

loadMoreImagesButton.addEventListener(‘click’, () => {
  const newImages = [
    ‘https://via.placeholder.com/300?text=New+Image+1’,
    ‘https://via.placeholder.com/300?text=New+Image+2’,
    ‘https://via.placeholder.com/300?text=New+Image+3’,
  ];

  newImages.forEach((src) => {
    const img = document.createElement(‘img’);
    img.src = src;
    img.alt = ‘New Image’;
    img.addEventListener(‘click’, () => {
      modal.classList.remove(‘hidden’);
      modalImg.src = img.src;
      modalImg.style.display = ‘block’;
      modalVideo.style.display = ‘none’;
    });
    imageGallery.appendChild(img);
  });
});

// Load more videos
Const videoGallery = document.getElementById(‘video-gallery’);
Const loadMoreVideosButton = document.getElementById(‘load-more-videos’);

loadMoreVideosButton.addEventListener(‘click’, () => {
  const newVideos = [
    ‘https://www.w3schools.com/html/mov_bbb.mp4’,
    ‘https://www.w3schools.com/html/movie.mp4’,
  ];

  newVideos.forEach((src) => {
    const video = document.createElement(‘video’);
    video.src = src;
    video.controls = true;
    video.playsinline = true;
    video.addEventListener(‘click’, () => {
      modal.classList.remove(‘hidden’);
      modalVideo.src = video.src;
      modalVideo.style.display = ‘block’;
      modalImg.style.display = ‘none’;
      modalVideo.play();
    });
    videoGallery.appendChild(video);
  });
});
