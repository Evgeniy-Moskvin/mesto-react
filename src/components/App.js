import logo from '../images/logo.svg';

function App() {
  return (
      <>
          <header className="header container">
              <a href="#" className="logo">
                  <img src={logo} alt="Логотип сервиса Mesto" className="logo__image" />
              </a>
          </header>

          <main>
              <section className="profile container">
                  <div className="profile__avatar-wrap">
                      <img src="#" alt="Аватар пользователя" className="profile__avatar" />
                  </div>

                  <div className="profile__info">
                      <div className="profile__name-wrap">
                          <h1 className="profile__name">Жак-Ив Кусто</h1>
                          <button type="button" className="button-edit profile__button-edit opacity-effect"
                                  aria-label="Редактировать профиль"></button>
                      </div>

                      <p className="profile__job">Исследователь океана</p>
                  </div>

                  <button type="button" className="button-add profile__button-add opacity-effect"
                          aria-label="Добавить место"></button>
              </section>

              <section className="places container" aria-label="Добавленные места">
                  <ul className="places__grid"></ul>
              </section>
          </main>

          <footer className="footer container">
              <p className="footer__copyright">© 2023 Mesto Russia</p>
          </footer>

          <div className="popup popup_name_edit-profile">
              <div className="popup__container">
                  <button type="button" className="button-close opacity-effect popup__close"></button>
                  <form name="form-edit-profile" className="form" noValidate>
                      <fieldset className="form__fieldset">
                          <legend className="form__legend">
                              <h2 className="popup__title">Редактировать профиль</h2>
                          </legend>

                          <label className="form__group">
                              <input type="text" name="name" placeholder="Имя"
                                     className="form__input form__input_name_name" minLength="2" maxLength="40"
                                     required />
                                  <span className="form__error-message form__error-message_field_name"></span>
                          </label>

                          <label className="form__group">
                              <input type="text" name="job" placeholder="О себе"
                                     className="form__input form__input_name_job" minLength="2" maxLength="200"
                                     required />
                                  <span className="form__error-message form__error-message_field_job"></span>
                          </label>
                      </fieldset>
                      <button type="submit" className="button form__button">Сохранить</button>
                  </form>
              </div>
          </div>

          <div className="popup popup_name_edit-avatar">
              <div className="popup__container">
                  <button type="button" className="button-close opacity-effect popup__close"></button>
                  <form name="form-edit-avatar" className="form" noValidate>
                      <fieldset className="form__fieldset">
                          <legend className="form__legend">
                              <h2 className="popup__title">Обновить аватар</h2>
                          </legend>

                          <label className="form__group">
                              <input type="url" name="image" placeholder="Ссылка на картинку"
                                     className="form__input form__input_name_image" required />
                                  <span className="form__error-message form__error-message_field_image"></span>
                          </label>
                      </fieldset>
                      <button type="submit" className="button form__button">Сохранить</button>
                  </form>
              </div>
          </div>

          <div className="popup popup_name_add-place-card">
              <div className="popup__container">
                  <button type="button" className="button-close opacity-effect popup__close"></button>

                  <form name="form-add-place-card" className="form" noValidate>
                      <fieldset className="form__fieldset">
                          <legend className="form__legend">
                              <h2 className="popup__title">Новое место</h2>
                          </legend>

                          <label className="form__group">
                              <input type="text" name="name" placeholder="Название"
                                     className="form__input form__input_name_name" minLength="2" maxLength="30"
                                     required />
                                  <span className="form__error-message form__error-message_field_name"></span>
                          </label>

                          <label className="form__group">
                              <input type="url" name="image" placeholder="Ссылка на картинку"
                                     className="form__input form__input_name_image" required />
                                  <span className="form__error-message form__error-message_field_image"></span>
                          </label>
                      </fieldset>
                      <button type="submit" className="button form__button">Создать</button>
                  </form>
              </div>
          </div>

          <div className="popup popup_name_full-image">
              <div className="popup__container popup__container_image">
                  <button type="button" className="button-close opacity-effect popup__close"></button>

                  <img src="#" alt="Изображение" className="popup__image" />
                      <p className="popup__image-name"></p>
              </div>
          </div>

          <div className="popup popup_name_confirm">
              <div className="popup__container">
                  <button type="button" className="button-close opacity-effect popup__close"></button>
                  <h2 className="popup__title">Вы уверены?</h2>

                  <button type="submit" className="button">Да</button>
              </div>
          </div>

          <template id="place-card-template">
              <li className="places__item">
                  <figure className="place-card places__card">
                      <button type="button" aria-label="Удалить"
                              className="button-delete opacity-effect place-card__delete"></button>
                      <div className="place-card__image-wrap">
                          <img src="#" alt="" className="place-card__image" />
                      </div>
                      <figcaption className="place-card__body">
                          <h2 className="place-card__name"></h2>
                          <div className="place-card__likes">
                              <button type="button" className="button-like opacity-effect place-card__like"></button>
                              <span className="place-card__likes-count">0</span>
                          </div>
                      </figcaption>
                  </figure>
              </li>
          </template>
      </>
  );
}

export default App;
