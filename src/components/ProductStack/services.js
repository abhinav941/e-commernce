import axios from 'axios';

const service = {
  get: async () => {
    try {
      const response = await axios.get('localhost:3000/aajdal');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
