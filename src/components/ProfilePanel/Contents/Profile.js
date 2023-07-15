import React, { useEffect, useState } from 'react';
import './Profile.css';
import UserService from '../../../Services/UserService';
import defaultAvatar from '../../Images/avatar.png';
import { message } from 'antd';

function Profile() {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showProfile, setShowProfile] = useState(false);

 

  const handleImageChange = (e) => {
    const newImage = e.target.files[0];
    setImage(newImage);
    setImageName(newImage? URL.createObjectURL(newImage): '');
  };

  useEffect(() => {
    UserService.getprofile().then((res) => {
      if (res.data.data.image){
      setImage(res.data.data.image);
      setImageName("http://localhost:3000" + res.data.data.image );
      
      }
      else {
        setImageName(defaultAvatar);
      }
      setFirstName(res.data.data.firstName);
      setLastName(res.data.data.lastName);
      setPhoneNumber(res.data.data.phoneNumber);
      setEmail(res.data.data.email);
    });
  }, []);







  const handleLogout = () => {
    window.localStorage.clear();
    window.location.href = '/';
  };


  const updateProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('phoneNumber', phoneNumber);
    formData.append('email', email);

    UserService.updateProfile(formData).then((res) => {
      console.log(res);
      message.success('Profile updated successfully');
      window.location.reload();
    });
  };

    
   

return (
     <>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile__header">
            <div className="avatar">
               {
              image===null?
              <img src={defaultAvatar} alt="profile" className="profile-image" />
              :
              <img src={imageName} alt="profile" className="profile-image"/>
               }

            </div>
          </div>
          <div className="profile__body">
            <h1>Profile</h1>
            <h3>{firstName} {lastName}</h3>
            <h3>{phoneNumber}</h3>
            <h3>{email}</h3>
          </div>

          <button onClick={() => setShowProfile(!showProfile)}>Change Password</button>
          {showProfile && (
          <div className="password-container">
          <h2>Change Password</h2>
          <input type="password" placeholder="new password" value={newpassword} onChange={(e) => setNewPassword(e.target.value)} />
          <input type="password" placeholder="confirm new password"  value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>

          <button onClick={() => {
            if (newpassword === confirmPassword) {
              UserService.updatePassword(newpassword).then((res) => {
                console.log(res);
                message.success('Password updated successfully');
                handleLogout();
              });
            } else {
              message.error('Passwords do not match');
            }
          }}>Update Password</button>

          <button onClick={() => setShowProfile(false)}>Close</button>

        </div>
      )}
        </div>
     

        <div className="edit-profile-card">
          <div className="edit-profile__body">
            <h1>Edit Profile</h1>
            <form onSubmit={updateProfile}>
              <div className="edit-profile__body_form">
                <input type="file" accept='image/*' name='image' onChange={handleImageChange} />
              </div>
              <div className="edit-profile__body__form">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={`${firstName} ${lastName}`}
                  disabled
                />
              </div>
              <div className="edit-profile__body__form">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder={phoneNumber}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="edit-profile__body__form">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder={email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="edit-profile__footer">
                <button type="submit" className="edit-profile__footer__button">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );

}

export default Profile;


