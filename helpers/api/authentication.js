import axios from "axios";

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
