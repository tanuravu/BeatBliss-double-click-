/* Selectiong the lements from the DOM */
const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

/* Initializing variables to track click timing and count */
let clickTime = 0
let timesClicked = 0

// adding  a click event listener to the 'LoveMe' element
loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime() // If it's the first click, record the time
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0 /* Reset clickTime for the next click */
        } else {
            clickTime = new Date().getTime()
        }
    }
})

/* Function to create a heart element */
const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fa-solid')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    // setting the position of the heart
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    
    loveMe.appendChild(heart)  /* appending the heart element to the "LoveME" */
    times.innerHTML = ++timesClicked  /* updating the click counter */
    setTimeout(() => heart.remove(), 1000) /* removing the heart element after a timeout */
}