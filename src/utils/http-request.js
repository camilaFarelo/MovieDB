import Axios from 'axios';

const httpRequest = Axios.create({
  baseURL: 'http://api.themoviedb.org/3/',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'content-Type': 'application/json',
  },
  params: {
    api_key: 'b7c058b14cadc627c604777ebe13e8dd',
  }
});

export default httpRequest;
