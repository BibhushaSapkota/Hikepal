import axios from 'axios';

const baseUrl = 'http://localhost:3000/hikes';

const gethikes = () => {
    return axios.get(baseUrl);
}

const addhike = (hikeDetails) => {
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.post(`${baseUrl}`, hikeDetails,config);
}


const getmyhikes=()=>{
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.get(`${baseUrl}/${window.localStorage.getItem('id')}`,config);
}


const getpeoplejoined=(hikeid)=>{
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.get(`${baseUrl}/${hikeid}`,config);
}
export default { gethikes, addhike,getmyhikes, getpeoplejoined};