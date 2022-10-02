// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import renderMarkup from './customFunction/renderMarkup';
// Change code below this line

console.log(renderMarkup);
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMakrup = renderMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMakrup);

const lightboxGallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(lightboxGallery);
