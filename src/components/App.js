import logo from '../images/logo.svg';

function App() {
  return (
      <>
          <header className="header container">
              <a href="#root" className="logo">
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
      </>
  );
}

export default App;
