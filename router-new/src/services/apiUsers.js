import axios from "axios";

const BASE_URL = "https://randomuser.me/api";
let users = [];

export const getAllUser = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}?results=10`);
    users = data.results;
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

export const getSelectedUser = async (id) => {
  try {
    const user = users[id];
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};