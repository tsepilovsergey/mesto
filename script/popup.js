export function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', pushKey);
    document.addEventListener('mousedown', closeOverlay);
}

export function closePopup (popup) { 
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', pushKey);
    document.removeEventListener('mousedown', closeOverlay);
}

export function closeOverlay (event) {
    if (event.target.classList.contains('popup')) {
        closePopup(event.target);
    }
}

export function pushKey (event) {
    const openedPopup = document.querySelector('.popup_opened');
    if (event.key === "Escape") {
        closePopup(openedPopup);
    }
}
