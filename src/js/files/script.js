// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//video

const videoBlock = document.querySelector('.about__video');
const videoController = document.querySelector('.about-video__controller');

videoController.addEventListener('click', () => {
    videoBlock.classList.add('type_error');
    videoController.innerHTML = 'Error. Unable to load the video'
})