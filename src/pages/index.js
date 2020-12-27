import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { validityState, 
    profileEditButton, 
    profileAddButton, 
    popupEdit, 
    popupAdd, 
    nameInput, 
    descriptionInput,
    items } from '../utils/constants.js';

function openPopupEdit() {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    descriptionInput.value = userData.description;
    popupEditFormValidator.resetValidationState();
    editPopup.open();
}

function openPopupAdd() {
    popupAddFormValidator.resetValidationState();
    addPopup.open();
}

const editPopup = new PopupWithForm('.popup-edit', (event, fields) => {
    event.preventDefault();
    userInfo.setUserInfo({data: { name: fields['popupName'], description: fields['popupDescription']}})
    editPopup.close();
});

editPopup.setEventListeners();

const addPopup = new PopupWithForm('.popup-add', (event, fields) => {
    event.preventDefault();
    const item = {name: fields['popupTitle'], link: fields['popupLink']};
    const cardElement = createCard(item);
    cardList.prependItem(cardElement);
    addPopup.close();
});

addPopup.setEventListeners();

const imagePopup = new PopupWithImage('.popup-image');

imagePopup.setEventListeners();

const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

function createCard(item) {
    const card = new Card({
        data: item,
        openPopupImage: () => {
            imagePopup.open({
                name: item.name,
                link: item.link
            });
        }
    }, 'element-template');

    return card.generateCard();
}

const popupEditFormValidator = new FormValidator(popupEdit, validityState);
popupEditFormValidator.enableValidation();
const popupAddFormValidator = new FormValidator(popupAdd, validityState);
popupAddFormValidator.enableValidation();

const cardList = new Section({
    data: items,
    renderer: (item) => {
        const cardElement = createCard(item);
        cardList.appendItem(cardElement);
    }
}, '.elements__item');

cardList.renderItems();

profileEditButton.addEventListener('click', openPopupEdit);
profileAddButton.addEventListener('click', openPopupAdd);
