const btn = document.querySelector('.show-all-button');
const hidden1120 = document.querySelectorAll('.cards__item_hidden1120');
const hidden768 = document.querySelectorAll('.cards__item_hidden768');

btn.addEventListener('click', function () {
    for (let i = 0; i < hidden1120.length; i++) {
        hidden1120[i].classList.toggle('cards__item_hidden1120');
      }
  });

  btn.addEventListener('click', function()  {
	btn.classList.toggle('show-all-button-2');
});

btn.addEventListener('click', function() {
    btn.innerHTML =
    (btn.innerHTML === 'Показать все') ? btn.innerHTML = 'Скрыть' : btn.innerHTML = 'Показать все';
});

btn.addEventListener('click', function () {
    for (let i = 0; i < hidden768.length; i++) {
        hidden768[i].classList.toggle('cards__item_hidden768');
      }
  });


const slider = document.querySelector('.slider-container');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 2,
			spaceBetween: 16,
            centeredSlides: true,
            slidesOffsetBefore: -130,
			loop: true,
			slideClass: 'cards__item',
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 768) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});