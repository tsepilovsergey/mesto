export const content = document.querySelector('.content');
export const profileEditButton = content.querySelector('.profile__edit-button');
export const profileAddButton = content.querySelector('.profile__add-button');
export const popups = Array.from(document.querySelectorAll('.popup'));
export const popupEdit = document.querySelector('.popup-edit');
export const popupAdd = document.querySelector('.popup-add');
export const popupImage = document.querySelector('.popup-image');
export const popupCloseButtons = popups.map((item) => item.querySelector('.popup__close-button'));
export const nameInput = popupEdit.querySelector('.popup__input_type_name');
export const jobInput = popupEdit.querySelector('.popup__input_type_description');
export const titleInput = popupAdd.querySelector('.popup__input_type_title');
export const linkInput = popupAdd.querySelector('.popup__input_type_link');
export const profileTitle = content.querySelector('.profile__title');
export const profileSubtitle = content.querySelector('.profile__subtitle');
export const elementsContainer = document.querySelector('.elements__item'); 
export const fullImage = popupImage.querySelector('.popup__fulled-image');
export const fullImageTitle = popupImage.querySelector('.popup__title-image');

export const initialCards = [
    {
        name: 'Москва',
        link: './images/element-moscow.jpg',
    },
    {
        name: 'Санкт-Петербург',
        link: './images/element-sankt-petersburg.jpg',
    },
    {
        name: 'Крым',
        link: './images/element-krym.jpg',
    },
    {
        name: 'Байкал',
        link: './images/element-baikal.jpg',
    },
    {
        name: 'Алтай',
        link: './images/element-altai.jpg',
    },
    {
        name: 'Камчатка',
        link: './images/element-kamchatka.jpg',
    }
];

export const validityState = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};
