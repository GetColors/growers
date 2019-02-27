import axios from 'axios';

const authenticateUserService = async (username, password) => {
  const endpoint = 'http://getcolors.cl:8000/signin';

  const body = {
    username,
    password,
  };

  return axios.post(endpoint, body);
};

export default authenticateUserService;
