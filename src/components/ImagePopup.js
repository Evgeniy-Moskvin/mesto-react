import React from 'react';

const ImagePopup = () => {
  return (
    <div className="popup popup_name_full-image">
      <div className="popup__container popup__container_image">
        <button type="button" className="button-close opacity-effect popup__close"></button>

        <img src="#" alt="Изображение" className="popup__image"/>
        <p className="popup__image-name"></p>
      </div>
    </div>
  );
};

export default ImagePopup;
