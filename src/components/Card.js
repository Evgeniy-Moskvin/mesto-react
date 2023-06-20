import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = ({ link, name, likes, owner, onCardClick }) => {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = currentUser._id === owner._id;
  const isLiked = likes.some(i => i._id === currentUser._id);

  function handleClick() {
    onCardClick({ link, name });
  }

  return (
    <li className="places__item">
      <figure className="place-card places__card">
        {isOwn && <button type="button" aria-label="Удалить"
                          className="button-delete opacity-effect place-card__delete"></button>}
        <div className="place-card__image-wrap">
          <img src={link} alt={name} className="place-card__image" onClick={handleClick}/>
        </div>
        <figcaption className="place-card__body">
          <h2 className="place-card__name">{name}</h2>
          <div className="place-card__likes">
            <button type="button" className={`button-like ${isLiked && 'button-like_active'} opacity-effect place-card__like`}></button>
            <span className="place-card__likes-count">{likes.length}</span>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};


export default Card;
