export class UserInfo {
    constructor(popupNameSelector, popupDescriptionSelector) {
        this._popupName = document.querySelector(popupNameSelector);
        this._popupDescription = document.querySelector(popupDescriptionSelector);
    }

    getUserInfo() {
        return {
            name: this._popupName.textContent,
            description: this._popupDescription.textContent
        }
    }

    setUserInfo({ data }) {
        this._popupName.textContent = data.name;
        this._popupDescription.textContent = data.description;
    }

}
