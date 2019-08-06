import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3001/api'});

class Productize {

    static async list(page=1) {
        const response = await API.get(`/products?page=${page}`);
        return response;
    }

    static async show(id) {
        const response = await API.get(`/products/${id}`);
        return response;
    }

    static async update(product) {
        const response = await API.put(`/products/${product._id}`, product );
        console.log(response);
    }

    static async save(product) {
        const response = await API.post(`/products`, product );
        console.log(response);
    }

}

export default Productize;