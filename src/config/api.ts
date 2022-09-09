import axios from 'axios'
const url = 'https://631b3e0cdc236c0b1ef13b8b.mockapi.io/'
export const axiosV1 = axios.create({
  baseURL: url,
})
