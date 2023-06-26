import axios from 'axios';

const baseUrl = 'http://localhost:3000/jhikes';

const getjhikes = () => {
    return axios.get(baseUrl);
}

const joinhike = (hikeDetails) => {
    return axios.post(`${baseUrl}`, hikeDetails);
}

export default { gethikes, addhike};