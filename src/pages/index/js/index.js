import { date } from './blocks/date';
import { faq } from './blocks/faq';
import { modal } from './blocks/modal'
import { slider } from './blocks/slider'

document.addEventListener('DOMContentLoaded', () => {
    date();
    faq();
    modal();
    slider();

    var links = document.head.querySelectorAll('link')
    var lastLink = links[links.length - 1]

    // Удаляем последний элемент <link> из <head>
    lastLink.parentNode.removeChild(lastLink)
})