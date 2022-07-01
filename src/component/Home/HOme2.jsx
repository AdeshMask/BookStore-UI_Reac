import React,{Component} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { Link,withRouter  } from 'react-router-dom';
import Image1 from '../../assests/RDPD.jpeg'
import Image2 from '../../assests/Harry Potter.jpeg'
import Image3 from '../../assests/The visionist.jpeg'
import Image4 from '../../assests/The line Become a River.jpeg'
import Image5 from '../../assests/Dont make me think.jpeg'
import Image6 from '../../assests/Half Girlfriend.jpeg'
import BookServices from '../../component/Service/BookService'

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
  return (
    
    <div style={{ width: "100%"}}>
      
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "stretch",
          bgcolor: "background.paper",
          gap: "2.5rem"
        }}
      >
        {this.state.books && this.state.books.map((book,index) => (
        <Card
          sx={{
            height: "100%",
            gap: "2.5rem",
            display: "flex",
            flexDirection: "column",
            
          }}
        >
          <CardActionArea>
            <CardMedia component="img" height="150" src = {book.profilePic}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                 <h4>{book.bookName}</h4>

              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h5>RS.{book.price}</h5>
              </Typography>
            </CardContent>
          </CardActionArea>
          
        </Card>
        ))}
      </Box>
    </div>
  );
}
}

export default withRouter(Home2);