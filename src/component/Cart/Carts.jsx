import React, {useState, useEffect} from 'react'
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Header from '../Header/Header'
import Image from '../../assests/RDPD.jpeg'
import './Carts.css'
import CartServices from '../Service/CartService'



const useStyles = makeStyles(({ breakpoints, spacing }) => ({   

  root: {
    margin: "7rem",
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

//   deleteCartItem=(cartItemId) => {
//     let id = parseInt(cartItemId)
//     CartServices.deleteEmployee(id);
//     window.location.reload();
// };
  
return(<>
 <Header/>
  <Typography style={{ }}>Cart Count:{cartDetails.length}</Typography>
  {cartDetails.map((cartItem, i) => {
  return (<>
    <Card className={cx(styles.root, shadowStyles.root)}>
      
      <CardMedia
        className={styles.media}
        image={Image}
      />
      <CardContent>
       <h2>Rich Dad Poor Dad</h2>
       <h5>by Robert T.Kiyosaki</h5>
        <h4>Rs.450</h4>
        <h5>Quantity</h5>
        <div class="wrapper">
            <span class="minus" onClick={handleDecrement}>-</span>
            <span class="num" id="root" >{1+ qty}</span>
            <span class="plus" onClick={handleIncrement}>+</span>
        </div>
        <p>Total Price <br/>{450+450 *qty }</p>
        <Button className={buttonStyles}>Continue</Button>
        <button onClick="" >Remove Item</button>
      </CardContent>
    </Card>
    </>
  );})}
  </>)
});

export default BlogCardDemo