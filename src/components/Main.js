import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

const Main = ({ onEditProfile, onAddPlace, onEditAvatar }) => {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then(data => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });

    api.getInitialCards().then(data => {
      setCards(data);
    });
  }, []);

  return (
    <main>
      <section className="profile container">
        <div className="profile__avatar-wrap" onClick={onEditAvatar}>
          <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar"/>
        </div>

        <div className="profile__info">
          <div className="profile__name-wrap">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="button-edit profile__button-edit opacity-effect"
                    aria-label="Редактировать профиль" onClick={onEditProfile}></button>
          </div>

          <p className="profile__job">{userDescription}</p>
        </div>

        <button type="button" className="button-add profile__button-add opacity-effect"
                aria-label="Добавить место" onClick={onAddPlace}></button>
      </section>

      <section className="places container" aria-label="Добавленные места">
        <ul className="places__grid">
          {
            cards.map(({_id, ...props}) => (
              <Card key={_id} {...props}/>
            ))
          }
        </ul>
      </section>
    </main>
  );
};

export default Main;
