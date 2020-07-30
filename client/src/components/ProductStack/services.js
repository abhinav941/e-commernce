import axios from 'axios';

const service = {
    get: async () => {
        try {
            const response = await axios.get('http://localhost:8080/images');
            return response.data.products;
        } catch (error) {
            console.error(error);
        }
    },
};

export default service;
