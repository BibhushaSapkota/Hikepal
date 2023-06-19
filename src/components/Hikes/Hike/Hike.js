import './Hike.css'
import { useNavigate } from 'react-router-dom';
const Hike=({hikes})=>{
    const navigate=useNavigate();
    const handleClick = () => {
        if (localStorage.getItem('token')) {
            navigate(`/hikes/${hikes._id}`)          
        }
        else {
            navigate('/login')
        }
    }
    return (
        <div className="hike-card" onClick={handleClick}>
            <div className="thumbnail">
                 <img src={"http://localhost:3000" + hikes.image} alt="image"/>
                </div>
                 <div className="hike-info">
                <span className="hike-name">{hikes.HikeLocation}</span>
                <span className="hike-date">{hikes.StartDate}</span>
            </div>   
        </div>
        )

}
export default Hike;