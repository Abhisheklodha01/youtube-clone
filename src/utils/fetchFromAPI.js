import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'b141a89043mshf58a168c1c6c8c5p1b89fcjsn42cd0cfa0b92',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  } catch (error) {
     console.log(error);
  }
};
