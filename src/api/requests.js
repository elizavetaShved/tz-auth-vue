import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API, //todo
});

export function makeRequest(
  url,
  method = "get",
  data = {},
  headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
) {
  const token = localStorage.getItem("token");
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return client({ url, method, data, headers })
    .then((res) => {
      return res.data;
    })
    .catch((error) => error);
}
