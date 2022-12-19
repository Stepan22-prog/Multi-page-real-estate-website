/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { EffectCoverflow, Grid, Navigation, Pagination } from 'swiper';
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
//набор стилей из node_modules
import '../../../node_modules/swiper/modules/grid/grid.scss';

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
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 10
				},
				767: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1439: {
					slidesPerView: 4,
					spaceBetween: 30,
				}
			},
		});
	}
	if (document.querySelector('.slider-type_building')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-type_building', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			observer: true,
			loop: false,
			observeParents: true,
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
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 10
				},
				767: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1439: {
					spaceBetween: 30,
					slidesPerView: 4
				}
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
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 10
				},
				767: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1439: {
					spaceBetween: 30,
					slidesPerView: 4
				}
			},
		});
	}
	if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const swiper = new Swiper('.reviews__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, EffectCoverflow],
			observer: true,
			loop: true,
			autoHeight: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 60,
			speed: 800,
			grabCursor: true,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,


			// Эффекты
			effect: 'coverflow',
			coverflowEffect: {
				rotate: 0,
				slideShadows: true,
				scale: 0.7,
			},
			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1300: {
					spaceBetween: 30
				}
			},
		});
	}
	if (document.querySelector('.blog__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.blog__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Grid, Navigation],
			observer: true,
			observeParents: true,
			spaceBetween: 30,
			slidesPerView: 3,
			slidesPerGroup: 3,
			grid: {
				rows: 3,
				fill: "row",
			},
			speed: 800,
			grabCursor: true,
			preloadImages: false,
			lazy: true,
			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					console.log(index);
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				},
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					grid: {
						rows: 3,
						fill: "row",
					},
				},
				767: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					grid: {
						rows: 3,
						fill: "row",
					},
				},
				1024: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					grid: {
						rows: 3,
						fill: "row",
					},
				}
			},
		});
	}
	if (document.querySelector('.apartments-categ-slider__body')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.apartments-categ-slider__body', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Navigation],
			autoHeight: true,
			speed: 800,
			loop: true,
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
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1439: {
					slidesPerView: 4,
					spaceBetween: 30,
				}
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