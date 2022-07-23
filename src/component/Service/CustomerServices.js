import axios from "axios";

const id = localStorage.getItem('CusomerId')
const token = localStorage.getItem('Token')

class CustomerServices {
  baseUrl = "http://localhost:8080/customer";

  addperson(data) {
    return axios.post(`${this.baseUrl}/add`, data);
  }

  getUserById() {
    return axios.get(`${this.baseUrl}/get/${id}`);
  }
}

export default new CustomerServices();