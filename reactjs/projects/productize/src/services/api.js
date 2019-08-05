import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3001/api'});

class Productize {

    static async list(page=1) {
        const response = await API.get(`/products?page=${page}`);
        return response;
    }

    static async getById(id) {
        const response = await API.get(`/products/${id}`);
        return response;
    }

}

export default Productize;