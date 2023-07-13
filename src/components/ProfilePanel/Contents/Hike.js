import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Hike.css';
import defaultpicture from '../../Images/defaultpicture.jpg';

function AddHike() {
  const [HikeLocation, setLocation] = useState('');
  const [startdate, setStartdate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [Meetuplocation,setMeetuplocation]=useState('');
  
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hikeLocation || !startdate || !description || !image) {
      alert('Please fill in all the fields!');
      return;
    }
    const formData = new FormData();
    formData.append('hikeLocation', hikeLocation);
    formData.append('startdate', startdate);
    formData.append('description', description);
    formData.append('image', image);
    console.log(formData);
  };

  return (
    <div className="add-hike">
      <h3>Add Hike</h3>
      <div className="left">
        {image ? (
          <img src={URL.createObjectURL(image)} alt="avatar" />
        ) : (
          <img src={defaultpicture} alt="default avatar" />
        )}
      </div>
      <div className="right">
        <form>
          <label htmlFor="name">Hike Location</label>
          <input
            type="text"
            id="name"
            name="name"
            value={HikeLocation}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label htmlFor="startdate">StartDate</label>
          <DatePicker
            className='date-picker'
            id="startdate"
            name="startdate"
            selected={startdate}
            onChange={(date) => setStartdate(date)}
          />

          <label htmlFor="description">Description</label>
          <textarea
            className='textareaa'
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            placeholder="Hike Image"
            accept="image/*"
            type="file"
            onChange={handleImageChange}
          />

          <button type="submit" onClick={handleSubmit}>
            Add Hike
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddHike;
