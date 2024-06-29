// Define a Carousel class
class Carousel {
	constructor(container, items, featured, leftBtn, rightBtn, images) {
		this.gallery = document.querySelector(container);
		this.galleryItems = document.querySelectorAll(items);
		this.numOfItems = this.gallery.children.length;
		this.itemWidth = 23; // percent: as set in css
		this.featured = document.querySelector(featured);
		this.leftBtn = document.querySelector(leftBtn);
		this.rightBtn = document.querySelector(rightBtn);
		this.images = images;
		this.leftInterval = null;
		this.scrollRate = 0.2;
		this.left = 0;
		this.init();
	}

	selectItem(e) {
		if (e.target.classList.contains('active')) return;
		this.featured.style.backgroundImage = e.target.style.backgroundImage;

		this.galleryItems.forEach(item => {
			item.classList.remove('active');
		});

		e.target.classList.add('active');
	}

	galleryWrapLeft() {
		let first = this.gallery.children[0];
		this.gallery.removeChild(first);
		this.gallery.style.left = -this.itemWidth + '%';
		this.gallery.appendChild(first);
		this.gallery.style.left = '0%';
	}

	galleryWrapRight() {
		let last = this.gallery.children[this.gallery.children.length - 1];
		this.gallery.removeChild(last);
		this.gallery.insertBefore(last, this.gallery.children[0]);
		this.gallery.style.left = `-${this.itemWidth}%`;
	}

	moveLeft() {
		this.left = this.left || 0;

		this.leftInterval = setInterval(() => {
			this.gallery.style.left = this.left + '%';

			if (this.left > -this.itemWidth) {
				this.left -= this.scrollRate;
			} else {
				this.left = 0;
				this.galleryWrapLeft();
			}
		}, 1);
	}

	moveRight() {
		if (this.left > -this.itemWidth && this.left < 0) {
			this.left -= this.itemWidth;

			let last = this.gallery.children[this.gallery.children.length - 1];
			this.gallery.removeChild(last);
			this.gallery.style.left = this.left + '%';
			this.gallery.insertBefore(last, this.gallery.children[0]);
		}

		this.left = this.left || 0;

		this.leftInterval = setInterval(() => {
			this.gallery.style.left = this.left + '%';

			if (this.left < 0) {
				this.left += this.scrollRate;
			} else {
				this.left = -this.itemWidth;
				this.galleryWrapRight();
			}
		}, 1);
	}

	stopMovement() {
		clearInterval(this.leftInterval);
	}

	init() {
		// Set Initial Featured Image
		this.featured.style.backgroundImage = 'url(' + this.images[0] + ')';

		// Set Images for Gallery and Add Event Listeners
		this.galleryItems.forEach((item, index) => {
			item.style.backgroundImage = 'url(' + this.images[index] + ')';
			item.addEventListener('click', this.selectItem.bind(this));
		});

		// Event listeners for buttons
		this.leftBtn.addEventListener('mouseenter', this.moveLeft.bind(this));
		this.leftBtn.addEventListener('mouseleave', this.stopMovement.bind(this));
		this.rightBtn.addEventListener('mouseenter', this.moveRight.bind(this));
		this.rightBtn.addEventListener('mouseleave', this.stopMovement.bind(this));
	}
}


const carousel1 = new Carousel('.chitram1', '.chitram-item1', '.chitram-featured1', '.chitram-btn1.left', '.chitram-btn1.right', [
	'Photos/chitram/8.jpg',
	'Photos/chitram/9.jpg',
	'Photos/chitram/10.jpg',
	'Photos/chitram/11.JPG',
	'Photos/chitram/1.jpg',
	'Photos/chitram/2.jpg',
	'Photos/chitram/3.jpg',
	'Photos/chitram/4.jpg',
	'Photos/chitram/5.jpg',
	'Photos/chitram/6.jpg',
	'Photos/chitram/7.jpeg',
	
	// Add more images as needed
]);

const carousel2 = new Carousel('.chitram2', '.chitram-item2', '.chitram-featured2', '.chitram-btn2.left', '.chitram-btn2.right', [
	"Photos/chitram/chitram2023_10.webp",
	"Photos/chitram/chitram2023_1.webp",
	"Photos/chitram/chitram2023_2.webp",
	"Photos/chitram/chitram2023_3.webp",
	"Photos/chitram/chitram2023_4.webp",
	"Photos/chitram/chitram2023_5.webp",
	"Photos/chitram/chitram2023_6.webp",
	"Photos/chitram/chitram2023_7.webp",
	"Photos/chitram/chitram2023_8.webp",
	"Photos/chitram/chitram2023_9.webp",
	
	
	
	// Add more images as needed
]);
const carousel3 = new Carousel('.chitram3', '.chitram-item3', '.chitram-featured3', '.chitram-btn3.left', '.chitram-btn3.right', [
	'Photos/chitram/1.jpeg',
	'Photos/chitram/2.jpeg',
	'Photos/chitram/3.jpeg',
	'Photos/chitram/4.jpeg',
	'Photos/chitram/2.jpeg',
]);
