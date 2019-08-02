import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3001/api'});

class Productize {

    async list() {
        const response = await API.get('/products');
        return response;
    }

}

export default Productize;