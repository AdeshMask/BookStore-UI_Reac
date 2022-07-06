import axios from "axios";

const id=localStorage.getItem('Authorization')
const userId = JSON.parse(id);
const token=localStorage.getItem('Token')
class UserService {
    baseUrl ="http://localhost:8080/user";

    addUser(data) {
        return axios.post(`${this.baseUrl}/add`, data);
      } 
      getAllBooks() {
        return axios.get(`${this.baseUrl}/get-all`);
      }

      getUserById(userid) {
        return axios.get(`${this.baseUrl}/getuser/${userid}`,{params:{token: token}});
      }
      getUserEmailId(data) {
        return axios.get(`${this.baseUrl}/user`, data);
      }

    userLogin(data) {
      return axios.post(`${this.baseUrl}/userlogin`,data);
    }

}
// await axios.get('https://httpbin.org/get', { params: { answer: 42 } });

export default new UserService();