import axios from 'axios';

const registerUserService = async (username, email, password) => {
  const endpoint = 'http://getcolors.cl:8000/register';

  const body = {
    username,
    email,
    password,
  };

  return axios.post(endpoint, body);
};

export default registerUserService;
