import React,{Component} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { Link,withRouter  } from 'react-router-dom';
import BookServices from '../../component/Service/BookService'
import Button from '@mui/material/Button';
import Header from '../Header/Header'


class Home2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
        books: [],
    };
}

componentDidMount() {
  this.fetchData();
  console.log(this.props)
}

fetchData() {
  BookServices.getAllBooks().then((response) => {
      this.setState({ books: response.data.data });
      console.log(response);
  });
}

  render =() => {
  return (<>
    <Header/>
    <div style={{ width: "100%", margin: "3rem"}}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "stretch",
          bgcolor: "background.paper",
          gap: "2.5rem",
        }}
      >
        {this.state.books && this.state.books.map((book,index) => (
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            border: "1px solid",
            padding: "1rem"

          }}
        >
          <CardActionArea>
            <CardMedia component="img" height="150" padding="1rem" width="50" src ={book.profilePic}/>
            <CardContent>
                 <h4>{book.bookName}</h4>
                 <h6>{book.authorName}</h6>
                <h5>RS.{book.price}</h5>
              <Button variant="contained" size="large" type="submit" className="button submitButton" id="submitButton">Add to Cart</Button>
            </CardContent>
          </CardActionArea>
        </Card>
        ))}
      </Box>
    </div>
    </> 
  );
}
}
export default withRouter(Home2);