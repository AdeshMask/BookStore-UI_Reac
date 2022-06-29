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
  });
}
componentDidMount() {
  this.fetchData();
  console.log(this.props)
}


render() {
  return (
    <div>    
      <div class="cards">
        {/* <section>
        <article class="card">
          <img src={Book1} alt="Sample photo"/>
          <div class="text">
            <h3>Rich Dad Poor Dad</h3>
            <p>Robert T Kiyosaki</p>
            <p class="text">RS.450</p>
            <button>Add to Bag</button>
          </div>
        </article>
        </section> */}
       
       <section>
        <article class="card">
        <div className="table-main">
			  <table id="table-display" className="table">
				{<tr>
					{/* <th>Profile</th> */}
					<th>Book Name</th>
					<th>Author Name</th>
					<th>Price</th>
					<th>Book Quantity</th>
				</tr>}
				<tbody>
                    {this.state.books && this.state.books.map((book,index) => (
                        <tr key={`${index}`}>                             
                            <td>
                                <img src={ book.profilePic=== "../../assests/Ellipse -3.png" ? Book1 :
                                book.profilePic=== "../../assests/Ellipse -1.png" ? Book2 :
                                book.profilePic=== "../../assests/Ellipse -7.png" ? Book3 : Book4 
                                } alt="ProfilePic" srcSet="" /></td>
                            <td>{book.bookName}</td>
                            <td>{book.authorName}</td>
                            <td>{book.bookQuantity}</td>
							              <td>{book.price}</td>
                            <td>
                            <img src="{Delete}" alt="delete" onClick={() =>
                                                    this.deleteBook(book.id)}/>
                            
                            <img src="{Edit}" alt="edit" onClick={() =>
                                                    this.updateBook(book.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
			</table>
    	</div>
        </article>
        </section>
       
       {/* <section>
        <article class="card">
          <img src={Book3}/>
          <div class="text">
            <h3>Dynamically Procrastinate</h3>
            <p>Completely synergize resource taxing relationships via premier niche markets.</p>
            <button>Read more</button>
          </div>
        </article>
        </section>
       
       <section>
        <article class="card">
          <img src={Book4}/>
          <div class="text">
            <h3>Best in class</h3>
            <p>Imagine jumping into that boat, and just letting it sail wherever the wind takes you...</p>
            <button>Just do it...</button>
          </div>
        </article>
        </section>
        </div>
       <div class="cards">
       <section>
        <article class="card">
          <img src={Book5} alt="Sample photo"/>
          <div class="text">
            <h3>Dynamically innovate supply chains</h3>
            <p>Holisticly predominate extensible testing procedures for reliable supply chains.</p>
            <button>Here's why</button>
          </div>
        </article>
        </section>
       
       <section>
        <article class="card">
          <img src={Book6} alt="Sample photo"/>
          <div class="text">
            <h3>Sanity check</h3>
            <p>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
            <button>Stop here</button>
          </div>
        </article>
        </section> */}
        </div>
      </div>
  )}
}

export default BookHome