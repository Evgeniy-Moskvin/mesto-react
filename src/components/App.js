import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { logDOM } from '@testing-library/react';

function App() {
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  function handleCardsChange(data) {
    setCards(data);
  }

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setCurrentUser(data);
      })
      .catch(err => console.log(err));
  }, []);


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
    setIsImagePopupOpen(true);
  }

  const [selectedCard, setSelectedCard] = React.useState({ link: '', name: '' });

  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <Header/>

        <Main
          cards={cards}
          handleCardsChange={handleCardsChange}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
        />

        <Footer/>

        <PopupWithForm
          name={'edit-profile'}
          title={'Редактировать профиль'}
          buttonName={'Сохранить'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
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
        </PopupWithForm>

        <PopupWithForm
          name={'edit-avatar'}
          title={'Обновить аватар'}
          buttonName={'Сохранить'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="form__group">
            <input type="url" name="image" placeholder="Ссылка на картинку"
                   className="form__input form__input_name_image" required/>
            <span className="form__error-message form__error-message_field_image"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name={'add-place-card'}
          title={'Новое место'}
          buttonName={'Создать'}

          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
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
        </PopupWithForm>

        <PopupWithForm
          name={'confirm'}
          title={'Вы уверены?'}
          buttonName={'Да'}
        />

        <ImagePopup
          card={selectedCard}
          onCardClick={handleCardClick}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      </>
    </CurrentUserContext.Provider>

  );
}

export default App;
