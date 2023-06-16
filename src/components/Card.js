import React from 'react';

const Card = ({ link, name, likes }) => {
  return (
    <li className="places__item">
      <figure className="place-card places__card">
        <button type="button" aria-label="Удалить"
                className="button-delete opacity-effect place-card__delete"></button>
        <div className="place-card__image-wrap">
          <img src={link} alt={name} className="place-card__image"/>
        </div>
        <figcaption className="place-card__body">
          <h2 className="place-card__name">{name}</h2>
          <div className="place-card__likes">
            <button type="button" className="button-like opacity-effect place-card__like"></button>
            <span className="place-card__likes-count">{likes.length}</span>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

export default Card;
