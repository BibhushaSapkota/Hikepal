import axios from 'axios';

const baseUrl = 'http://localhost:3000/jhikes';



const joinhike = (hikeDetails) => {
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.post(`${baseUrl}`, hikeDetails,config);
}

const  getJhikeItems= () => {
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.get(`${baseUrl}/user/${window.localStorage.getItem('id')}`, config);
}

const deleteJhikeItems = (id) => {
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.delete(`${baseUrl}/${id}`, config);
}

const getpeoplejoined=(hikeid)=>{
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.get(`${baseUrl}/hike/${hikeid}`,config);
}
export default { joinhike,getJhikeItems,deleteJhikeItems,getpeoplejoined};