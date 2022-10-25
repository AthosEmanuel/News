import axios from 'axios';

const getPages = async () => {
  console.log('api2');
  try {
    const data = await axios.get('http://192.168.3.8:6060/pages');
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getPosts = async () => {
  try {
    const data = await axios.get('http://localhost:6060/posts');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export {getPages, getPosts};
