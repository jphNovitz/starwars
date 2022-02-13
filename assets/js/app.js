/**
 *  @package Starwars
 *  @author novitz Jean-Philippe <novitz@gmail.com>
 *  @description Dans une video Benjamen code donne un défi  à quelques dev : réaliser une page web en deux heures
 *  j'ai réalisé ce petit travail sans regarder l'heure car j'ai travaillé par petits bout quand j'avais une poignée de
 *  temps disponible
 */

document.addEventListener('DOMContentLoaded', () => {

    const years = document.getElementById('years')
    const arrow_left = document.getElementById('arrow-left')
    const arrow_right = document.getElementById('arrow-right')
    const picture = document.getElementsByTagName('picture')[0]
    const pitch = document.getElementById('pitch')
    const bullets = document.getElementsByClassName('bullet')
    const root = document.querySelector(":root");
    const max_page = picture.getElementsByTagName('img').length
    const min_page = 1
    var page = 1
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
        move(--page, 'down')
        bullets.item(page).classList.remove('active')
        years.innerText--
        manageArrows()
    }

    function up(e) {
        e.preventDefault()
        if (page === min_page) listen_right()
        move(page, 'up')
        bullets.item(page).classList.add('active')
        page++
        years.innerText++
        manageArrows()
    }

    function move(page, dir) {
        dir === 'up' ? indice = 0 : indice = 1
        picture.style.marginLeft = -((page - indice) * step_img) + 'rem'
        pitch.style.marginLeft = -((page - indice) * step_pitch) + 'rem'
        root.style.setProperty("--progress", ((page - indice) * 25) + "%")
    }

    function manageArrows() {
        if (page > min_page) arrow_left.classList.add('active')
        else {
            arrow_left.classList.remove('active')
            arrow_left.removeEventListener('click', down)
        }

        if (page < max_page) arrow_right.classList.add('active')
        else {
            arrow_right.classList.remove('active')
            arrow_right.removeEventListener('click', up)
        }

    }
})