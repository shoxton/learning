import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3001/api'});

class Productize {

    async list(page=1) {
        const response = await API.get(`/products?page=${page}`);
        return response;
    }

}

export default Productize;