import React, { useState } from 'react';
import './Profile.css';
import defaultAvatar from '../../Images/avatar.png';

function Profile() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setImage(image);
  };

  return (
    <>
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile__header">
          <div className="avatar">
            {image ? (
              <img src={URL.createObjectURL(image)} alt="avatar" />
            ) : (
              <img src={defaultAvatar} alt="default avatar" />
            )}
          </div>
        </div>
        <div className="profile__body">
          <h1>Profile</h1>
          <h3>Bibhusha Sapkota</h3>
          <h3>9861336366</h3>
          <h3>bibhushasapkota5@gmail.com</h3>
        </div>
        
      </div>

      <div className="edit-profile-card">
        
        <div className="edit-profile__body">
          <h1>Edit Profile</h1>
          <form>
            <div className="edit-profile__body_form">
            <input type="file" onChange={handleImageChange} />
          </div>
            <div className="edit-profile__body__form">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Bibhusha Sapkota" />
            </div>
            <div className="edit-profile__body__form">
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" id="phone" placeholder="9861336366" />
            </div>
            <div className="edit-profile__body__form">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" placeholder="bibhushasapkota5@gmail.com" />
            </div>
            <div className="edit-profile__body__form">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder="********" />
            </div>
            <div className="edit-profile__body__form">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" name="confirm-password" id="confirm-password" placeholder="********" />
            </div>
          </form>
          <div className="edit-profile__footer">
            <button className="edit-profile__footer__button">Save</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Profile;
