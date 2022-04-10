import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMorkup = createGalleryMorkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMorkup)

//galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryMorkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        
        return `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
    }).join(' ');
}

// function onGalleryContainerClick(event) {
    
// if (event.target.nodeName !== "IMG") {
//     return;
// } 
//     event.preventDefault();
//     console.log("1", event.target);
       
// }

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', createElementInModal);

function createElementInModal(event) {
    
    const imageA = event.target;

    const imageAlt = event.target.children[0].alt;

    console.log(imageAlt);

    const imageAltHtml = `<div class="sl-caption pos-bottom" data-initial-display="block" style="display: block; width: 312px; opacity: 1;">${imageAlt}</div>`;

    imageA.insertAdjacentHTML("beforeend", imageAltHtml);

    console.log(imageA);

}


// <div class="sl-caption pos-bottom" data-initial-display="block" style="display: block; width: 312px; opacity: 1;">Drone Photography</div>