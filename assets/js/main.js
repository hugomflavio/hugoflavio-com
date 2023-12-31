/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
	  navToggle = document.getElementById('nav-toggle'),
	  navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION INTERESTS ====================*/
const interestsContent = document.getElementsByClassName('interests__content'),
	  interestsHeader = document.querySelectorAll('.interests__header')

function toggleUnused(){
	let itemClass = this.parentNode.className

	for(i = 0; i < interestsContent.length; i++){
		interestsContent[i].className = 'interests__content interests__close'
	}

	if(itemClass === 'interests__content interests__close'){
		this.parentNode.className = 'interests__content interests__open'
	}
}

interestsHeader.forEach((el) =>{
	el.addEventListener('click', toggleUnused)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target'),
	  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
	tab.addEventListener('click', () =>{
		const target = document.querySelector(tab.dataset.target)

		tabContents.forEach(tabContent =>{
			tabContent.classList.remove('qualification__active')
		})
		target.classList.add('qualification__active')

		tabs.forEach(tab =>{
			tab.classList.remove('qualification__active')
		})
		tab.classList.add('qualification__active')
	})
})

/*==================== SKILLS MODAL ====================*/
const modalViews = document.querySelectorAll('.skills__modal'),
	  modalBtns = document.querySelectorAll('.skills__button'),
	  modalCloses = document.querySelectorAll('.skills__modal-close')

let modal = function(modalClick){
	modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
	modalBtn.addEventListener('click', () =>{
		modal(i)
	})
})

modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('click', () =>{
		modalViews.forEach((modalView) =>{
			modalView.classList.remove('active-modal')
		})
	})
})

modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('keypress', (event) =>{
		modalViews.forEach((modalView) =>{
			if (event.keyCode == 27) {
				modalView.classList.remove('active-modal')
			}
		})
	})
})


document.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
		modalViews.forEach((modalView) =>{
			if (event.keyCode == 27) {
				modalView.classList.remove('active-modal')
			}
		}) 
	}
})


/*==================== TESTIMONIAL ====================*/
// swiper js moved to index.html as it was not working here for some reason.

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SWITCH TO LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconLightTheme = 'uil-moon'
const iconDarkTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark'
const getCurrentIcon = () => themeButton.classList.contains(iconLightTheme) ? 'uil-sun' : 'uil-moon'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](iconLightTheme)
  themeButton.classList[selectedIcon === 'uil-sun' ? 'remove' : 'add'](iconDarkTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconLightTheme)
    themeButton.classList.toggle(iconDarkTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ==================== PORTFOLIO JS ====================-

// // Initialize Swiper
// var swiperPortfolio = new Swiper(".portfolio__container", {
// 	cssMode: true,
// 	loop: true,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 	},
// });

// var swiperTestimonial = new Swiper(".testimonial__container", {
// 	loop: true,
// 	grabCursor: true,
// 	spaceBetween: 48,

// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 		dynamicBullets: true,
// 	},
// 	breakpoints:{
// 		568:{
// 			slidesPerView: 2,
// 		}
// 	}
// });