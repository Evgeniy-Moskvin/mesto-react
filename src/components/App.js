import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({ link: 'reset', name: 'reset' });
  }

  const handleCardClick = ({ link, name }) => {
    setSelectedCard({ link: link, name: name });
    setIsImagePopupOpen(true)
  }

  const [selectedCard, setSelectedCard] = React.useState({ link: '', name: '' });

  return (
    <>
      <Header/>

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer/>

      <PopupWithForm
        name={'edit-profile'}
        title={'Редактировать профиль'}
        buttonName={'Сохранить'}
        children={
          <>
            <label className="form__group">
              <input type="text" name="name" placeholder="Имя"
                     className="form__input form__input_name_name" minLength="2" maxLength="40"
                     required/>
              <span className="form__error-message form__error-message_field_name"></span>
            </label>

            <label className="form__group">
              <input type="text" name="job" placeholder="О себе"
                     className="form__input form__input_name_job" minLength="2" maxLength="200"
                     required/>
              <span className="form__error-message form__error-message_field_job"></span>
            </label>
          </>
        }
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name={'edit-avatar'}
        title={'Обновить аватар'}
        buttonName={'Сохранить'}
        children={
          <label className="form__group">
            <input type="url" name="image" placeholder="Ссылка на картинку"
                   className="form__input form__input_name_image" required/>
            <span className="form__error-message form__error-message_field_image"></span>
          </label>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name={'add-place-card'}
        title={'Новое место'}
        buttonName={'Создать'}
        children={
          <>
            <label className="form__group">
              <input type="text" name="name" placeholder="Название"
                     className="form__input form__input_name_name" minLength="2" maxLength="30"
                     required/>
              <span className="form__error-message form__error-message_field_name"></span>
            </label>

            <label className="form__group">
              <input type="url" name="image" placeholder="Ссылка на картинку"
                     className="form__input form__input_name_image" required/>
              <span className="form__error-message form__error-message_field_image"></span>
            </label>
          </>
        }
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name={'confirm'}
        title={'Вы уверены?'}
        buttonName={'Да'}
        children={''}
      />

      <ImagePopup
        card={selectedCard}
        onCardClick={handleCardClick}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
