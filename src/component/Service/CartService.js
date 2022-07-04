import axios from "axios";

class BookService {
    baseUrl ="http://localhost:8080/book";

    addBook(data) {
        return axios.post(`${this.baseUrl}/add`, data);
      }
    
      getAll() {
        return axios.get(`${this.baseUrl}/get-all`);
      }

      getBookById(employeeId) {
        return axios.get(`${this.baseUrl}/search/${employeeId}`);
      }

    //   updateEmployee(employeeId,data) {
    //     return axios.put(`${this.baseUrl}/edit/${employeeId}`, data);
    //   }

    //   deleteEmployee(employeeId) {
    //     return axios.delete(`${this.baseUrl}/remove/${employeeId}`);
    //   }

}


export default new BookService();