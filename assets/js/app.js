document.addEventListener('DOMContentLoaded', () => {

    const years = document.getElementById('years')
    const arrow_left = document.getElementById('arrow-left')
    const arrow_right = document.getElementById('arrow-right')
    const picture = document.getElementsByTagName('picture')[0]
    var max_page = picture.getElementsByTagName('img').length
    console.log(max_page)
    var page = 1
    var min_page = 1


    const pitch = document.getElementById('pitch')
    const bullets = document.getElementsByClassName('bullet')
    console.log(bullets)
    const root = document.querySelector(":root");

    const step_img = 24.51
    const step_pitch = 31.3


    listen_right()
    listen_left()

    function listen_left() {
        arrow_left.addEventListener('click', down)
    }

    function listen_right() {
        arrow_right.addEventListener('click', up)
    }

    function down(e) {
        e.preventDefault()
        if (page === max_page) listen_right()
        page--
        picture.style.marginLeft = -((page - 1) * step_img) + 'rem'
        pitch.style.marginLeft = -((page - 1) * step_pitch) + 'rem'

        bullets.item(page).classList.remove('active')
        root.style.setProperty("--progress", ((page - 1) * 25) + "%")
        years.innerText--
        if (page <= min_page) {
            arrow_left.firstElementChild.style.opacity = "40%"
            arrow_left.removeEventListener('click', down)
        }
        if (page < max_page) arrow_right.firstElementChild.style.opacity = "100%"
    }

    function up(e) {
        e.preventDefault()
        if (page === min_page) listen_right()
        picture.style.marginLeft = -((page) * step_img) + 'rem'
        pitch.style.marginLeft = -((page) * step_pitch) + 'rem'
        bullets.item(page).classList.add('active')
        root.style.setProperty("--progress", ((page) * 25) + "%")
        page++
        years.innerText++
        if (page >= max_page) {
            arrow_right.firstElementChild.style.opacity = "40%"
            arrow_right.removeEventListener('click', up)
        }
        if (page > min_page) arrow_left.firstElementChild.style.opacity = "100%"
    }

})