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

      getUserById(userId) {
        return axios.get(`${this.baseUrl}/search/${userId}`,{params:{token: token}});
      }
    deleteCartItem(bookId) {
          return axios.put(`${this.baseUrl}/remove/${bookId}`, {params:{token: token}});
        }

    emptyCart() {
        return axios.delete(`${this.baseUrl}/empty`, {params:{token: token}});
      }

}


export default new CartService();