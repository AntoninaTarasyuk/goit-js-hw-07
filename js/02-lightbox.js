import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(images) {
  return images.map(({ preview, original, description }) => {
    return `
    <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>
    </li>`}).join('');
}

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

// const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);