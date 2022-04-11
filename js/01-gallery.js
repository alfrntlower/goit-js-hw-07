import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMorkup = createGalleryMorkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMorkup)

galleryContainer.addEventListener("click", onGalleryImageClick);


function createGalleryMorkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      loading="lazy"
      class="gallery__image lazyload"
      data-src="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join(' ');
}

if ('loading' in HTMLImageElement.prototype) {
  addSrcAttrToLazyImages();
} else {
  addLazySizesScript();
}

function addLazySizesScript() {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';

  document.body.appendChild(script);
}

function addSrcAttrToLazyImages() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
}

function onGalleryImageClick(event) {
    
 event.preventDefault();

if (event.target.nodeName !== "IMG") {
    return;
}  
    console.log(event.target.alt);
    instance.element().querySelector(".modal-img").src = event.target.src;
    instance.show();
}

const instance = basicLightbox.create(
    `<img class="modal-img" src=""> `,
    {
        onShow: instance => {
            window.addEventListener('keydown', onEscapeClick);
        },
    },
    {
        onClose: instance => {
            window.removeEventListener('keydown', onEscapeClick);
        },
    },
    );

function onEscapeClick(event) {
  
    if (event.key === 'Escape') {
        console.log("Close modal");
        instance.close();
        return;
    }
}
