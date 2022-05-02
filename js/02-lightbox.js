import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(images) {
  return images.map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`}).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

const lightBox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250});
lightBox.on('show.simplelightbox');