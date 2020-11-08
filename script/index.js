let content = document.querySelector('.content')
let profileEditButton = content.querySelector('.profile__edit-button');
let profileAddButton = content.querySelector('.profile__add-button');
let popup = Array.from(document.querySelectorAll('.popup'));
let popupEdit = document.querySelector('.popup-edit');
let popupAdd = document.querySelector('.popup-add');
let popupImage = document.querySelector('.popup-image');
let popupCloseButton = popup.map((item) => item.querySelector('.popup__close-button'));
let fromEditElement = popup.find((item) => item.querySelector('.popup__form-edit'));
let fromAddElement = popup.find((item) => item.querySelector('.popup__form-add'));
let nameInput = fromEditElement.querySelector('.popup__text_type_name');
let jobInput = fromEditElement.querySelector('.popup__text_type_description');
let titleInput = fromAddElement.querySelector('.popup__text_type_title');
let linkInput = fromAddElement.querySelector('.popup__text_type_link');
let profileTitle = content.querySelector('.profile__title');
let profileSubtitle = content.querySelector('.profile__subtitle');
let elementsItem = document.querySelector('.elements__item');
let elementTemplate = document.querySelector('#element-template').content;

let initialCards = [
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

function addElement (titleValue, imageValue) {
    let createCard = elementTemplate.cloneNode(true);
    createCard.querySelector('.element__image').src = imageValue;
    createCard.querySelector('.element__title').textContent = titleValue;
    createCard.querySelector('.element__like')
        .addEventListener('click', function (event) {
            event.target.classList.toggle('element__like_active');
        });
    createCard.querySelector('.element__trash')
        .addEventListener('click', function (event) {
            event.target.closest('.element').remove ();
        });
    createCard.querySelector('.element__image')
        .addEventListener('click', openPopupImage);
    return createCard;
}

initialCards.forEach((item) => elementsItem.append(addElement(item.name, item.link)));

function openPopupEdit () {
    popupEdit.classList.add('popup_opened');
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function openPopupAdd () {
    popupAdd.classList.add('popup_opened');
    titleInput.value = '';
    linkInput.value = '';
}

function openPopupImage (image) {
    let element = image.target.closest('.element');
    let createCardImage = element.querySelector('.element__image').src;
    let createCardTitle = element.querySelector('.element__title').textContent;
    popupImage.querySelector('.popup__fulled-image').src = createCardImage;
    popupImage.querySelector('.popup__title-image').textContent = createCardTitle;
    popupImage.classList.add('popup_opened');
}

function closePopup () {
    popup.forEach((item) => item.classList.remove('popup_opened'));
}

function formEditSubmitHandler (event) {
    event.preventDefault ();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup ();
}

function formAddSubmitHandler (event) {
    event.preventDefault ();
    let title = titleInput.value;
    let link = linkInput.value;
    elementsItem.prepend(addElement(title, link));
    closePopup ();
}

profileEditButton.addEventListener('click', openPopupEdit);
profileAddButton.addEventListener('click', openPopupAdd);
popupCloseButton.forEach((item) => item.addEventListener('click', closePopup));
fromEditElement.addEventListener('submit', formEditSubmitHandler);
fromAddElement.addEventListener('submit', formAddSubmitHandler);