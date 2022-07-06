import axios from "axios";

const id=localStorage.getItem('Authorization')
const userId = JSON.parse(JSON.stringify(id));
const token=localStorage.getItem('Token')
class CartService {
    baseUrl ="http://localhost:8080/cart";

    addCartItem(data) {
        return axios.post(`${this.baseUrl}/add`, data,{params:{token: token}});
      }
    
      getAll() {
        return axios.get(`${this.baseUrl}/get-all`, {params:{token: token}});
      }

      getBookById(userId) {
        return axios.get(`${this.baseUrl}/search/${userId}`,{params:{token: token}});
      }

    //   updateEmployee(employeeId,data) {
    //     return axios.put(`${this.baseUrl}/edit/${employeeId}`, data);
    //   }

      deleteCartItem(CartItemId) {
        return axios.delete(`${this.baseUrl}/remove/${CartItemId}`, {params:{token: token}});
      }

}


export default new CartService();