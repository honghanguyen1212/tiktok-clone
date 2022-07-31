import axios from 'axios';

const httpRequest = axios.create({
    baseUrl: 'http://localhost:3000/',
});

export const get = async (path, options = {}) => {
    const reponse = await httpRequest.get(path, options);
    return reponse.data;
};

export default httpRequest;
