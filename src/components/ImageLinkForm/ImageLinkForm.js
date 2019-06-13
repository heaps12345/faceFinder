import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div className="image-link-form">
      <p className="image-link-form__text">{'This Magic Brain will detect faces in your pictures. Give it a try.'}</p>
      <div className="image-link-form__form">
        <input className="image-link-form__input" type="text" onChange={onInputChange} />
        <button className="image-link-form__btn" onClick={onPictureSubmit}>
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
