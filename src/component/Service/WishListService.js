import axios from "axios";

const id = localStorage.getItem('CusomerId')
const token = localStorage.getItem('Token')
console.log(id)
class WishList {
  baseUrl = "http://localhost:8080/wishlist";

  addToWishList(data) {
    return axios.post(`${this.baseUrl}/add`, data,{ params: { token: token }});
  }

  getWishListById() {
    return axios.get(`${this.baseUrl}/get`, { params: { token: token } });
  }

}

export default new WishList();