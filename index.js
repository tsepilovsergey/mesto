(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.data,o=e.openPopupImage,i=e.handleDeleteClick,a=e.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r.name,this._link=r.link,this._likes=r.likes,this._id=r._id,this._owner=r.owner,this._cardOwner=r.cardOwner,this._cardLike=r.cardLike,this._openPopupImage=o,this._handleDeleteClick=i,this._handleLikeClick=a,this._cardSelestor=n}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){var e=document.getElementById(this._cardSelestor).content.querySelector(".element").cloneNode(!0);return this._cardOwner||e.querySelector(".element__trash").remove(),this._cardLike&&e.querySelector(".element__like").classList.add("element__like_active"),e}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".element__title").textContent=this._name,this._element.querySelector(".element__likes-number").textContent=this._likes.length;var e=this._element.querySelector(".element__image");return e.src=this._link,e.alt=this._name,this._element}},{key:"trashCard",value:function(){this._element.remove(),this._element=null}},{key:"getId",value:function(){return this._id}},{key:"cardLike",value:function(){return this._cardLike}},{key:"setLike",value:function(e){this._cardLike=e}},{key:"setLikesNumber",value:function(e,t){this._element.querySelector(".element__likes-number").textContent=t.likes.length,e.target.classList.toggle("element__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._cardOwner&&this._element.querySelector(".element__trash").addEventListener("click",(function(){e._handleDeleteClick(e)})),this._element.querySelector(".element__like").addEventListener("click",(function(t){e._handleLikeClick(t,e)})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._openPopupImage()}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=t,this._validityState=n,this._inputList=Array.from(this._form.querySelectorAll(this._validityState.inputSelector)),this._sumbitButton=this._form.querySelector(this._validityState.submitButtonSelector)}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._validityState.inputErrorClass),n.textContent=t,n.classList.add(this._validityState.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._validityState.inputErrorClass),t.classList.remove(this._validityState.errorClass),t.textContent=""}},{key:"resetValidationState",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._sumbitButton.classList.add(this._validityState.inactiveButtonClass),this._sumbitButton.disabled=!0):(this._sumbitButton.classList.remove(this._validityState.inactiveButtonClass),this._sumbitButton.disabled=!1)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._pushKey=this._pushKey.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._pushKey)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._pushKey)}},{key:"_pushKey",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closeOverlay",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){e._closeOverlay(t)})),this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()}))}}])&&o(t.prototype,n),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupForm=n._popup.querySelector(".popup__form"),n._handleFormSubmit=t,n._inputList=n._popupForm.querySelectorAll(".popup__input"),n._button=n._popupForm.querySelector(".popup__button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;c(p(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){e._handleFormSubmit(t,e._getInputValues())}))}},{key:"close",value:function(){this._popupForm.reset(),c(p(a.prototype),"close",this).call(this)}},{key:"showLoading",value:function(e){this._popupForm.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}}])&&u(t.prototype,n),a}(i);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._fullImage=t._popup.querySelector(".popup__fulled-image"),t._fullImageTitle=t._popup.querySelector(".popup__title-image"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._fullImage.src=n,this._fullImageTitle.textContent=t,d(m(a.prototype),"open",this).call(this)}}])&&_(t.prototype,n),a}(i);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._popupButton=n._popup.querySelector(".popup__button"),n}return t=a,(n=[{key:"open",value:function(e){S(E(a.prototype),"open",this).call(this),this._card=e}},{key:"setEventListeners",value:function(){var e=this;S(E(a.prototype),"setEventListeners",this).call(this),this._popupButton.addEventListener("click",(function(){e._handleSubmit(e._card)}))}}])&&g(t.prototype,n),a}(i);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(t)}var t,n;return t=e,(n=[{key:"_renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"initialItems",value:function(e){var t=e.data,n=e.renderer;this._items=t,this._renderer=n,this._renderItems()}},{key:"appendItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}}])&&C(t.prototype,n),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupName=document.querySelector(t),this._popupDescription=document.querySelector(n),this._popupAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._popupName.textContent,description:this._popupDescription.textContent,id:this._id}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._popupName.textContent=t,this._popupDescription.textContent=n,this.setUserAvatar(r),this._id=o}},{key:"setUserAvatar",value:function(e){this._popupAvatar.style.backgroundImage="url('".concat(e,"')")}}])&&P(t.prototype,n),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"editProfile",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}}])&&R(t.prototype,n),e}(),D=document.querySelector(".profile__edit-button"),T=document.querySelector(".profile__add-button"),U=document.querySelector(".profile__avatar"),x=document.querySelector(".popup-edit"),B=document.querySelector(".popup-add"),V=document.querySelector(".popup-avatar"),A=x.querySelector(".popup__input_type_name"),N=x.querySelector(".popup__input_type_description"),F={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},K=new q({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"54bcf370-1275-4b3b-905f-be3c184c4a5c","Content-Type":"application/json"}}),J=new f(".popup-edit",(function(e,t){e.preventDefault(),J.showLoading(!0),K.editProfile(t.popupName,t.popupDescription).then((function(e){Q.setUserInfo(e),J.close()})).catch((function(e){console.log(e)})).finally((function(){J.showLoading(!1)}))}));J.setEventListeners();var G=new f(".popup-add",(function(e,t){e.preventDefault(),K.addNewCard(t.popupTitle,t.popupLink).then((function(e){var t=W(e);$.prependItem(t),G.close()})).catch((function(e){console.log(e)}))}));G.setEventListeners();var H=new f(".popup-avatar",(function(e,t){e.preventDefault(),H.showLoading(!0),K.editAvatar(t.popupAvatar).then((function(e){Q.setUserAvatar(e.avatar),H.close()})).catch((function(e){console.log(e)})).finally((function(){H.showLoading(!1)}))}));H.setEventListeners();var z=new b(".popup-image");z.setEventListeners();var M=new O(".popup-confirm",(function(e){K.deleteCard(e.getId()).then((function(){e.trashCard(),M.close()})).catch((function(e){console.log(e)}))}));M.setEventListeners();var Q=new j(".profile__title",".profile__subtitle",".profile__avatar");function W(e){return new t({data:e,openPopupImage:function(){z.open({name:e.name,link:e.link})},handleDeleteClick:function(e){M.open(e)},handleLikeClick:function(e,t){t.cardLike()?K.deleteLike(t.getId()).then((function(n){t.setLike(!1),t.setLikesNumber(e,n)})).catch((function(e){console.log(e)})):K.addLike(t.getId()).then((function(n){t.setLike(!0),t.setLikesNumber(e,n)})).catch((function(e){console.log(e)}))}},"element-template").generateCard()}var X=new r(x,F);X.enableValidation();var Y=new r(B,F);Y.enableValidation();var Z=new r(V,F);Z.enableValidation();var $=new I(".elements__item");D.addEventListener("click",(function(){var e=Q.getUserInfo();A.value=e.name,N.value=e.description,X.resetValidationState(),J.open()})),T.addEventListener("click",(function(){Y.resetValidationState(),G.open()})),U.addEventListener("click",(function(){Z.resetValidationState(),H.open()})),K.getUserInfo().then((function(e){Q.setUserInfo(e)})).then((function(){K.getInitialCards().then((function(e){var t=Q.getUserInfo().id;e.forEach((function(e){e.likes.length&&e.likes.forEach((function(n){n._id===t&&(e.cardLike=!0)})),e.owner._id===t&&(e.cardOwner=!0)})),$.initialItems({data:e,renderer:function(e){var t=W(e);$.appendItem(t)}})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})();
//# sourceMappingURL=index.js.map