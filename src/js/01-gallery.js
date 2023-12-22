// import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';

export const galleryRef = document.querySelector('.gallery');

export const markup = createMarkup(galleryItems);

function createMarkup(data) {
	return data
		.map(({ preview, original, description }) => {
			return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"  />
   </a>
</li>
    `;
		})
		.join('');
}

galleryRef.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
	nav: false,
	captionsData: 'alt',
	captionDelay: 250,
	close: false,
});
