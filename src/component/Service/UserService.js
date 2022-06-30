import axios from "axios";

class UserService {
    baseUrl ="http://localhost:8080/user";

    addUser(data) {
        return axios.post(`${this.baseUrl}/add`, data);
      } 
      getAllBooks() {
        return axios.get(`${this.baseUrl}/get-all`);
      }

    //   getEmployeeById(employeeId) {
    //     return axios.get(`${this.baseUrl}/search/${employeeId}`);
    //   }

    //   updateEmployee(employeeId,data) {
    //     return axios.put(`${this.baseUrl}/edit/${employeeId}`, data);
    //   }

    //   deleteEmployee(employeeId) {
    //     return axios.delete(`${this.baseUrl}/remove/${employeeId}`);
    //   }
    userLogin(data) {
      return axios.post(`${this.baseUrl}/userlogin`,data);
    }

}


export default new UserService();