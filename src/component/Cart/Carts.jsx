import React, {useState, useEffect} from 'react'
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Header from '../Header/Header'
import { Link,withRouter  } from 'react-router-dom';
import './Carts.css'
import CartServices from '../Service/CartService'



const useStyles = makeStyles(({ breakpoints, spacing }) => ({   

  root: {
    margin: "1rem",
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    width: 800,
    marginLeft: "17rem",
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '40%',
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    marginRight:"5rem",
    // [breakpoints.up('md')]: {
    //   width: '90%',
    //   marginLeft: spacing(-3),
    //   marginTop: 0,
    //   transform: 'translateX(-8px)',
    // },
  },
  content: {
    padding: 50,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const BlogCardDemo = React.memo(function BlogCard() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();


  const [qty, setQty] = useState(0);
  function handleDecrement() {
    if(qty==0){
      return
    }
    else{
    setQty(qty - 1);
    }
  }
  function handleIncrement() {
    setQty(qty + 1);
  }

  
//Fetching Data
  const [cartDetails, setCartDetails] = useState([]);

  useEffect(() => {
    fetchCartDetails();
  },[]);

  const fetchCartDetails = () => {
    CartServices.getAll().then((response) => {
        setCartDetails(response.data.data);
      })
  };
  console.log(cartDetails);

  const deleteCartItem=(bookId) => {
    console.log(bookId);
    CartServices.deleteCartItem(bookId);
    window.location.reload();
};

const updateQuantity=(qty) => {
    let quantity = qty
}
const getOrder=(cartId) => {
  this.props.history.push(`Order/${cartId}`);
  console.log(cartId);
}
  
return(<>
 <Header/>
  <Typography style={{marginRight:"40rem",marginTop:"5rem" }}>Cart Count:{cartDetails.length}</Typography>
  {cartDetails.map((cartItem, index) => {  
  return (<>
     
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={cartItem.bookId.profilePic}
      />
      <CardContent>
        
       <h2>{cartItem.bookId.bookName}</h2>
       <h5>by {cartItem.bookId.authorName}</h5>
        <h5>Rs.{cartItem.bookId.price}</h5>
        <h5>Quantity</h5>
        <div class="wrapper">
            <span class="minus" onClick={handleDecrement}>-</span>
            <span class="num" id="root" onClick = {()=> updateQuantity(cartItem.bookId.quantity)}>{qty+1}</span>
            <span class="plus" onClick={handleIncrement}>+</span>
        </div>
        <h4>Total Price <br/>{cartItem.bookId.price+cartItem.bookId.price * qty}</h4>
        <Link to="/order">
        <Button className={buttonStyles} onClick={() =>getOrder(cartItem.cartId)} >Continue</Button></Link>
        <Button onClick={() =>deleteCartItem(cartItem.cartId)} >Remove Item</Button>
        
      </CardContent>
    </Card>
    </>
  );
})}
  </>)
});

export default withRouter(BlogCardDemo)