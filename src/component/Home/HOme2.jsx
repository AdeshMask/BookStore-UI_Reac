import React,{Component} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Book1 from '../Home/assests/RDPD.jpeg';
import Book2 from '../Home/assests/Harry Potter.jpeg'
import Book3 from '../Home/assests/Half Girlfriend.jpeg';
import Book4 from '../Home/assests/The line Become a River.jpeg';
import Book5 from '../Home/assests/The visionist.jpeg';
import Book6 from '../Home/assests/Dont make me think.jpeg';

import BookServices from '../../component/Service/BookService'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

class Home2 extends Component{

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


render(){

  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        bookName={this.state.bookName}
      />
      <CardMedia
        component="img"
        height="194"
        image={Book1}
        alt="Paella dish"
      />
      <CardContent>
        <h3>{this.state.bookName}</h3>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>

  );
}
}

export default Home2