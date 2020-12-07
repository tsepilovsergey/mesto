import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup } from './popup.js';
import { validityState, 
    profileEditButton, 
    profileAddButton, 
    popupCloseButtons, 
    popupEdit, 
    popupAdd, 
    profileTitle, 
    profileSubtitle, 
    nameInput, 
    jobInput, 
    titleInput, 
    linkInput, 
    initialCards, 
    elementsContainer } from './constants.js';

function openPopupEdit () {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    popupEditFormValidator.resetValidationState();
    openPopup(popupEdit);
}

function openPopupAdd () {
    popupAddFormValidator.resetValidationState();
    openPopup(popupAdd);
}

function handleFormEditSubmit (event) {
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupEdit);
}

function handleFormAddSubmit (event) {
    event.preventDefault();
    const card = new Card({name: titleInput.value, link: linkInput.value}, 'element-template');
    const cardElement = card.generateCard();
    elementsContainer.prepend(cardElement);
    titleInput.value = '';
    linkInput.value = '';
    closePopup(popupAdd);
}

initialCards.forEach((item) => {
    const card = new Card(item, 'element-template');
    const cardElement = card.generateCard();
    elementsContainer.append(cardElement);
})

const popupEditFormValidator = new FormValidator(popupEdit, validityState);
popupEditFormValidator.enableValidation();
const popupAddFormValidator = new FormValidator(popupAdd, validityState);
popupAddFormValidator.enableValidation();

profileEditButton.addEventListener('click', openPopupEdit);
profileAddButton.addEventListener('click', openPopupAdd);
popupCloseButtons.forEach((item) => item.addEventListener('click', () => closePopup(item.closest('.popup'))));
popupEdit.addEventListener('submit', handleFormEditSubmit);
popupAdd.addEventListener('submit', handleFormAddSubmit);
