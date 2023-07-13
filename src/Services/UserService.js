import axios from 'axios';

const baseUrl = 'http://localhost:3000/users';

const login = (credentials) => {
    return axios.post(`${baseUrl}/login`, credentials);
}

const register = (userDetails) => {
    return axios.post(`${baseUrl}/register`, userDetails);
}
const getprofile = () => {
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.get(`${baseUrl}/${window.localStorage.getItem('id')}`, config);
}

const updateProfile = (formData) => {
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.put(`${baseUrl}/${window.localStorage.getItem('id')}`, formData, config);
}

const updatePassword = (password) => {
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.put(`${baseUrl}/password/${window.localStorage.getItem('id')}`, { password }, config);
}




export default { login, register,updateProfile,getprofile,updatePassword };