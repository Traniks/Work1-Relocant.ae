export function modal() {

    // Для закрытия модалок
    function close(id) {
        const modal = document.querySelector(`#${id}`);
        const cross = document.querySelector(`#${id}__cross`);
        
        cross.addEventListener("click", () => {
			modal.classList.remove(`${id}_active`) // Убирает класс - закрывает модалку
			document.body.style.overflow = '' // Восстанавливает прокрутку сайта
		});
    }

    close('modal-call');
    close('modal-order');
    close('modal-messengers');
    close('modal-tg');
    close('modal-ws');
    close('modal-zoom');
    
    // Для раскрытия номера
    const bg = document.querySelector('.modal-call__bg');
    const btn = document.querySelector('.modal-call__btn');
    btn.addEventListener('click', () => {
		bg.classList.add('modal-call__bg_active');
		btn.classList.add('modal-call__btn_active');

        setTimeout(() => {
			bg.style.display = 'none'
			btn.style.display = 'none'
		}, 1000)
	});
}