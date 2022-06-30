import React, {Component} from 'react';
import '../../component/Home/Home.css';
import Book1 from '../Home/assests/RDPD.jpeg';
import Book2 from '../Home/assests/Harry Potter.jpeg'
import Book3 from '../Home/assests/Half Girlfriend.jpeg';
import Book4 from '../Home/assests/The line Become a River.jpeg';
import Book5 from '../Home/assests/The visionist.jpeg';
import Book6 from '../Home/assests/Dont make me think.jpeg';
import BookServices from '../../component/Service/BookService'


class BookHome extends Component {   

  constructor (props) {
    super(props);
    this.state = {
        books: [],
    };
}

fetchData() {
  BookServices.getAllBooks().then((response) => {
      this.setState({ employee: response.data.data });
      console.log(response.data.data);
  });
}
componentDidMount() {
  this.fetchData();
}


render() {
  
  return (
    
    <div>    
      <div class="cards">
        <section>
        <article class="card">
        <div className="table-main">
			  <table id="table-display" className="table">
				{<tr>
          <img src={Book1} alt="Sample photo"/>
          <div class="text">
            <h3>{this.state.bookName}</h3>
            <p>{this.state.bookAuthor}</p>
            <p class="text">RS.450</p>
            <button>Add to Bag</button>        
					{/* <th>Profile</th> */}
					{/* <th>Book Name</th>
					<th>Author Name</th>
					<th>Price</th>
					<th>Book Quantity</th> */}
          </div>
				</tr>}
				<tbody>
                    {this.state.books && this.state.books.map((book,index) => (
                        // <tr key={`${index}`}>   
                        <h3>{book.bookName}</h3>                          
                        //     <td>
                        //         <img src={ book.profilePic=== "../../assests/Ellipse -3.png" ? Book1 :
                        //         book.profilePic=== "../../assests/Ellipse -1.png" ? Book2 :
                        //         book.profilePic=== "../../assests/Ellipse -7.png" ? Book3 : Book4 
                        //         } alt="ProfilePic" srcSet="" /></td>
                        //     <td>{book.bookName}</td>
                        //     <td>{book.authorName}</td>
                        //     <td>{book.bookQuantity}</td>
							          //     <td>{book.price}</td>
                        //     <td>
                        //     <img src="{Delete}" alt="delete" onClick={() =>
                        //                             this.deleteBook(book.id)}/>
                            
                        //     <img src="{Edit}" alt="edit" onClick={() =>
                        //                             this.updateBook(book.id)} />
                        //     </td>
                        // </tr>
                    ))}
                </tbody>
			</table>
    	</div>
        </article>
        </section>
        {this.state.books && this.state.books.map((book,index) => (
        <section>
        <article class="card">
          <img src={Book2}/>
          <div class="text">
            <h3>Harry Potter</h3>
            <p></p>
            <button>Add to Bag</button>
          </div>
        </article>
        </section>
        ))}
       <section>
        <article class="card">
          <img src={Book3}/>
          <div class="text">
            <h3>Half Girlfriend</h3>
            <p></p>
            <button>Add to Bag</button>
          </div>
        </article>
        </section>
       
       <section>
        <article class="card">
          <img src={Book4}/>
          <div class="text">
            <h3>The Line Become a River</h3>
            <p></p>
            <button>Add to Bag</button>
          </div>
        </article>
        </section>
        </div>
       <div class="cards">
       <section>
        <article class="card">
          <img src={Book5} alt="Sample photo"/>
          <div class="text">
            <h3>The visionist</h3>
            <p></p>
            <button>Add to Bag</button>
          </div>
        </article>
        </section>
       
       <section>
        <article class="card">
          <img src={Book6} alt="Sample photo"/>
          <div class="text">
            <h3>Dont make me think</h3>
            <p></p>
            <button>Add to Bag</button>
          </div>
        </article>
        </section>
       
       
    
        {/* <th>
        <div>
        <section>
        <article class="card">
        <img src={Book2}/>
        <div class="text">
        <h3>Harry Potter</h3>
        <p></p>
        <button>Add to Bag</button>
        </div>
        </article>
        </section>   
        
        </div> 
</ul>  */}

        </div>
      </div>
  )}
}

export default BookHome