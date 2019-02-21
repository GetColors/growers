import axios from 'axios';

const getUserCropsService = async (token) => {
  const endpoint = 'http://getcolors.cl:3000/crops';

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios.get(endpoint, config);
};

export default getUserCropsService;
