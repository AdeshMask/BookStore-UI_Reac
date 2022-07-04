import axios from "axios";

const id=localStorage.getItem('Authorization')
const userId = JSON.parse(id);
class UserService {
    baseUrl ="http://localhost:8080/user";

    addUser(data) {
        return axios.post(`${this.baseUrl}/add`, data);
      } 
      getAllBooks() {
        return axios.get(`${this.baseUrl}/get-all`);
      }

      getUserById(userid) {
        return axios.get(`${this.baseUrl}/getuser/${userid}`);
      }
      getUserEmailId(data) {
        return axios.get(`${this.baseUrl}/user`, data);
      }

    userLogin(data) {
      return axios.post(`${this.baseUrl}/userlogin`,data);
    }

}


export default new UserService();