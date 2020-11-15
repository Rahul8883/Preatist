import axios from 'axios'
export const userService = {
    login
}



export function login(data) {
    console.log('data from front end', data);
    return axios.post("https://creati.st/creatist/index.php/service/pq", data);
}