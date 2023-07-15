import React, { useState } from 'react';
import HikeService from '../../../Services/HikeService';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Hike.css';
import defaultpicture from '../../Images/defaultpicture.jpg';
import { message } from 'antd';

function AddHike() {
  const [HikeLocation, setLocation] = useState('');
  const [startdate, setStartdate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [Meetuplocation,setMeetuplocation]=useState('');
  const [Duration,setDuration]=useState('');

  const currentDate = new Date();
  const minDate = new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000);
  const formattedMinDate = minDate.toISOString().split('T')[0];

  
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!HikeLocation || !startdate || !description || !image || !Meetuplocation || !Duration) {
      alert('Please fill in all the fields!');
      return;
    }
    const formData = new FormData();
    formData.append('HikeLocation', HikeLocation);
    formData.append('StartDate', startdate);
    formData.append('Description', description);
    formData.append('image', image);
    formData.append('Meetuplocation',Meetuplocation);
    formData.append('Duration',Duration);

    HikeService.addhike(formData).then((res) => {   
          if (res.status==201) {
            message.success("Hike added successfully");
            setLocation('');
            setStartdate('');
            setDescription('');
            setMeetuplocation('');
            setDuration('');
            setImage(null);
          } else {
            message.error("Hike not added");
          }
        });
    
 
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
          <input
            className="date-picker"
            type="date"
            id="startdate"
            name="startdate"
            selected={startdate}
            min={formattedMinDate}
            onChange={(event) => setStartdate(event.target.value)}
          />

          <label htmlFor="description">Description</label>
          <input
            className='textareaa'
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>

          <label htmlFor="meetuplocation">Meetup location</label>
          <input
            type="text"
            id="name"
            name="name"
            value={Meetuplocation}
            onChange={(e) => setMeetuplocation(e.target.value)}
          />
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="name"
            name="name"
            value={Duration}
            onChange={(e) => setDuration(e.target.value)}
          />
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
