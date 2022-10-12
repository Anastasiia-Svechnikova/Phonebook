import  axios  from 'axios';

// const BASE_URL = 'https://633755a7132b46ee0be07a72.mockapi.io/contacts'
const BASE_URL = 'https://connections-api.herokuapp.com'
const getAllContacts = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/contacts`);
        return res.data;
    } catch (error) {
        throw new Error(error.message)
    }
}
const addContact = async (contact) => {
    try {
        return await axios.post(BASE_URL, contact)
    } catch (error) {
        throw new Error(error.message)
    }
}
const deleteContact = async (contactId) => {
    try {
        return await axios.delete(`${BASE_URL}/${contactId}`)
    } catch (error) {
        throw new Error(error.message)
    }
}
const signUpUser = async(user) => {
    try {
        const res = await axios.post(`${BASE_URL}/users/signup`, user);
        return res.data;
    } catch(error) {
         throw new Error(error.message)
    }
}

const API = {
    getAllContacts,
    addContact,
    deleteContact,
    signUpUser
}
export default API;