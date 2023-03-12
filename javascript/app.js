//Galery dinamic modal 
const modalImage = document.querySelector('#modal-image');
modalImage.addEventListener('show.bs.modal', function (e) {
  const link = e.relatedTarget;
  const imagePath = link.getAttribute('data-bs-image');

  //Show the image
  const image = document.createElement('img');
  image.src = `img/${imagePath}.jpg`;
  image.classList.add('img-fluid');
  image.alt = 'galery image';

  const modalContent = document.querySelector('.modal-body');
  modalContent.appendChild(image);
});

//Hide the image
modalImage.addEventListener('hidden.bs.modal', function () {
  const modalContent = document.querySelector('.modal-body');
  modalContent.textContent = '';
})