import img1 from '../images/element-moscow.jpg';
import img2 from '../images/element-sankt-petersburg.jpg';
import img3 from '../images/element-krym.jpg';
import img4 from '../images/element-baikal.jpg';
import img5 from '../images/element-altai.jpg';
import img6 from '../images/element-kamchatka.jpg';

export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileAddButton = document.querySelector('.profile__add-button');
export const popupEdit = document.querySelector('.popup-edit');
export const popupAdd = document.querySelector('.popup-add');
export const nameInput = popupEdit.querySelector('.popup__input_type_name');
export const descriptionInput = popupEdit.querySelector('.popup__input_type_description');

export const items = [
    {
        name: 'Москва',
        link: img1
    },
    {
        name: 'Санкт-Петербург',
        link: img2
    },
    {
        name: 'Крым',
        link: img3
    },
    {
        name: 'Байкал',
        link: img4
    },
    {
        name: 'Алтай',
        link: img5
    },
    {
        name: 'Камчатка',
        link: img6
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
