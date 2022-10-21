import axios from "axios";
import qs from "qs";

const URL = process.env.API_URL;

export const register = async (data) => {
  const config = {
    method: "post",
    url: `http://localhost:3000/auth/register`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  const response = await axios(config);
  return response;
};

export const login = async (data) => {
  const config = {
    method: "post",
    url: `http://localhost:3000/auth/login`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),
  };

  const response = await axios(config);
  return response;
};
