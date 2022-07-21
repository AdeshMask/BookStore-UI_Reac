import axios from "axios";

const id = localStorage.getItem('Authorization')
const userId = JSON.parse(JSON.stringify(id));
const token = localStorage.getItem('Token');
const customerId = localStorage.getItem('customerId');
class OrderService {
  baseUrl = "http://localhost:8080/order";

  addOrderedItems(data) {
    return axios.post(`${this.baseUrl}/add`, data, { params: { token: token } });
  }

  getAll() {
    return axios.get(`${this.baseUrl}/get-all`, { params: { token: token } });
  }

  getUserById() {
    return axios.get(`${this.baseUrl}/get`, { params: { token: token } });
  }

  //   updateEmployee(employeeId,data) {
  //     return axios.put(`${this.baseUrl}/edit/${employeeId}`, data);
  //   }
  // deleteCartItem(bookId) {
  //       return axios.put(`${this.baseUrl}/delete/${bookId}`, {params:{token: token}});
  //     }

  deleteCartItem(bookId) {
    return axios.delete(`${this.baseUrl}/remove/${bookId}`, { params: { token: token } });
  }

}


export default new OrderService();