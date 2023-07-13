const navToggle = document.getElementById('nav-toggle')
const links = document.querySelector('.nav-links')
const iconBtn = document.querySelector('.icon')
const link = document.querySelectorAll('.nav-link')
const modalBtn = document.querySelector('.modal-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')
const videoBtn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')
const mutebtn = document.getElementById('mutebtn')
const volumeslider = document.getElementById('volumeslider')

/* Create while loading*/

/* function showAlert() {
  alert(`Be warned, this page could change your life.`)
} */

navToggle.addEventListener('click', function () {
  if (links.classList.contains('show-links')) {
    links.classList.remove('show-links')
  } else {
    links.classList.add('show-links')
  }
})

iconBtn.addEventListener('click', function () {
  alert(`Be a superhero, be like Ciro.`)
})

const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault()
    links.classList.remove('show-links')

    const id = e.target.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    //
    let position = element.offsetTop - 62

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: 'smooth',
    })
  })
})

modalBtn.addEventListener('click', function () {
  modalOverlay.classList.add('open-modal')
})

closeBtn.addEventListener('click', function () {
  modalOverlay.classList.remove('open-modal')
})

//scroll trigger
/* function scrollTrigger(box) {
  let els = document.querySelectorAll('.box')
  els = Array.from(els)
  els.forEach((el) => {
    addObserver(el)
  })
}

function addObserver(el) {
  let observer = new IntersectionObserver((entries, observer) => {
    //this takes a callback function which receives two arguments: the elemts list and the observer instance
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  }, options)
  observer.observe(box)
}

/* scrollTrigger('.scroll-reveal', {
  rootMargin: '-1000px',
}) */

videoBtn.addEventListener('click', function () {
  if (!videoBtn.classList.contains('slide')) {
    videoBtn.classList.add('slide')
    video.play()
  } else {
    videoBtn.classList.remove('slide')
    video.pause()
  }
})

mutebtn.addEventListener('click', vidmute, false)
function vidmute() {
  if (video.muted) {
    video.muted = false
    mutebtn.innerHTML = '<i class="fas fa-volume-down"></i>'
  } else {
    video.muted = true
    mutebtn.innerHTML = '<i class="fas fa-volume-mute"></i>'
  }
}

volumeslider.addEventListener('change', setvolume, false)
function setvolume() {
  video.volume = volumeslider.value / 100
}

/* function checkScroll() {
  var x = video.offsetLeft,
    y = video.offsetTop,
    w = video.offsetWidth,
    h = video.offsetHeight,
    r = x + w, //right
    b = y + h, //bottom
    visibleX,
    visibleY,
    visible

  visibleX = Math.max(
    0,
    Math.min(
      w,
      window.pageXOffset + window.innerWidth - x,
      r - window.pageXOffset
    )
  )
  visibleY = Math.max(
    0,
    Math.min(
      h,
      window.pageYOffset + window.innerHeight - y,
      b - window.pageYOffset
    )
  )

  visible = (visibleX * visibleY) / (w * h)

  if (visible > fraction) {
    video.play()
  } else {
    video.pause()
  }
}

checkScroll()
window.addEventListener('scroll', checkScroll, false)
window.addEventListener('resize', checkScroll, false) */
