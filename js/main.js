// show menu
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')

// validate if constant exists
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


// hide menu
// validate if const exists
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav_menu')
    // when click on nav link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// shadow header 
const shadowHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the shadow-header class
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

// email js
const contactForm =  document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact_message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_pdptklc','template_csscl9r','#contact-form','zs7T3qwz1tsX_cde2')
    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully!'

        // Remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // clear input fields
        contactForm.reset()

    }, () => {
        // show error message
        contactMessage.textContent = 'Message not sent (service error)!'
    })
}

contactForm.addEventListener('submit', sendEmail)

// show scroll up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    // when the scroll is higher than 350 viewport, add the show-scroll class to a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// scroll sections active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY


    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
        }else {
                sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// dark theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-item')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// we validate if the previously chose a topic
if(selectedTheme) {
    // if the validation is fulfilled, we ask what issue was to know if we activated or deactivated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-item', getCurrentTheme())
    localStorage.setItem('selected-item', getCurrentIcon)
})


// scroll reveal animation
const sr = ScrollReveal ({
    origin: 'top',
    distance: '68px',
    duration: 2000,
    delay: 200,
    // reset: true // animations repeat

    
})

sr.reveal('.home-perfil, .about-img, .contact-mail', {origin: 'right'})
sr.reveal('.home-name, .home-info, .about-container .section-title-1, .about-info, .contact-social, .contact-data, .filter-nav', {origin: 'left'})
sr.reveal('.services-card, .projects-card', {interval: 100})
