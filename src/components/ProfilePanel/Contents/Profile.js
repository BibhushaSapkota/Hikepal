import React from 'react'
import './Profile.css'
import { useState } from 'react'
import defaultAvatar from '../../Images/avatar.png'

function Profile() {
    const [image, setImage] = useState(null)


    const handleImageChange = (e) => {
        image = e.target.files[0]
        setImage(image)
    }
    return (
        <div className="profile">
            <div className = "profile__header">
                <div className='avatar'>
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
            <div className="profile__footer">
                <button className="profile__footer__button">Edit Profile</button>
            </div>
        </div>
                            
                                      
                                                    
    )
}


export default Profile