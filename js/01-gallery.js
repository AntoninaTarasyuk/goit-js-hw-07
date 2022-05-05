import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(images) {
  return images.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
</div>`}).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);
galleryContainer.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') { return; };
  
  const bigImageUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${bigImageUrl}">`)
  instance.show()

  window.addEventListener('keydown', onEscKeyPress);
  
  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscKeyPress);
    };
  };
};