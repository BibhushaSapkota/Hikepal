import axios from 'axios';

const baseUrl = 'http://localhost:3000/hikes';

const gethikes = () => {
    return axios.get(baseUrl);
}

const addhike = (hikeDetails) => {
    return axios.post(`${baseUrl}`, hikeDetails);
}

export default { gethikes, addhike};