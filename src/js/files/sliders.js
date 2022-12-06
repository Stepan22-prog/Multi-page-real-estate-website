/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.welcome__slider')) { // Указываем скласс нужного слайдера
		let pagginNum = document.querySelectorAll('.welcome-paggination__number');
		pagginNum[0].classList.add('number-active');
		// Создаем слайдер
		const swiper = new Swiper('.welcome__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			loop: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			grabCursor: true,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {
				slideChangeTransitionEnd: function () {
					let currentSlide = document.querySelector('.welcome .swiper-slide-active').dataset.slideIndex;
					console.log(currentSlide);
					pagginNum.forEach(elem => elem.classList.remove('number-active'));
					pagginNum[currentSlide].classList.add('number-active');
				},
			},
		});
	}
	if (document.querySelector('.slider-type_all')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-type_all', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			autoHeight: true,
			speed: 800,
			loop: true,
			spaceBetween: 30,
			preloadImages: false,
			lazy: true,
			grabCursor: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
			// События
		});
	}
	if (document.querySelector('.slider-type_building')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-type_building', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			observer: true,
			loop: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			loop: true,
			preloadImages: false,
			lazy: true,
			grabCursor: true,

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
		});
	}
	if (document.querySelector('.slider-type_interior')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-type_interior', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			observer: true,
			loop: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			preloadImages: false,
			lazy: true,
			grabCursor: true,
			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});