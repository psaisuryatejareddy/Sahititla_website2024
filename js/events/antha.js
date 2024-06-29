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


const carousel1 = new Carousel('.antha', '.antha-item', '.antha-featured', '.antha-btn1.left', '.antha-btn1.right', [
	'Photos/antha/antha2023_6.webp',
	'Photos/antha/antha2023_7.webp',
	'Photos/antha/antha2023_1.webp',
	'Photos/antha/antha2023_2.webp',
	'Photos/antha/antha2023_3.webp',
	'Photos/antha/antha2023_4.webp',
	'Photos/antha/antha2023_5.webp',
	'Photos/antha/antha2023_8.webp',
	'Photos/antha/antha2023_9.webp',
	'Photos/antha/antha2023_10.webp',
]);

const carousel2 = new Carousel('.antha2', '.antha-item2', '.antha-featured2', '.antha-btn2.left', '.antha-btn2.right', [

	'Photos/antha/1.jpeg',
	'Photos/antha/2.jpeg',
	'Photos/antha/3.jpeg',
	'Photos/antha/4.jpeg',
	'Photos/antha/5.jpeg',
	'Photos/antha/6.jpeg',
	'Photos/antha/7.jpeg',
	'Photos/antha/8.jpeg',
	'Photos/antha/9.jpeg'
]);

