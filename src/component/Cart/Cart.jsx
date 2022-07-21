import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Header from '../Header/Header'
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import CartServices from '../Service/CartService';
import OrderServices from '../Service/OrderService';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';


const useStyles = makeStyles(({ breakpoints, spacing }) => ({

  root: {
    margin: "1rem",
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 10px 20px #1687d933',
    position: 'relative',
    width: 800,
    marginLeft: "17rem",
    overflow: 'initial',
    background: '#ffffff',
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
    display: 'flex',
    flexDirection: 'row',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    marginRight: "5rem",
    [breakpoints.up('md')]: {
      width: '90%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
  },
  content: {
    padding: 50,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function FlexDirection() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();

  const [qty, setQty] = useState(0);
  function handleDecrement() {
    if (qty == 0) {
      return
    }
    else {
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
  }, []);

  const fetchCartDetails = () => {
    CartServices.getAll().then((response) => {
      console.log(response.data.data)
      setCartDetails(response.data.data);
      
    })
  };
  console.log(cartDetails);
  

  const deleteCartItem = (bookId) => {
    console.log(bookId);
    CartServices.deleteCartItem(bookId);
    // window.location.reload();
  };
  const updateQuantity = (qty) => {
    let quantity = qty
  }
  const getOrder = (cartId) => {
    this.props.history.push(`Order/${cartId}`);
    console.log(cartId);
  }


  return (
    <div style={{ width: '100%' }}>
      <Header />
      <Card className={cx(styles.root, shadowStyles.root)}>
        <>Hello</>
        {cartDetails.map((cartItem) => (
            <Box
              sx={{
                display: 'flex',
                marginRight: '50px',
                marginLeft: '10rem',
                alignContent: 'center',
                flexDirection: 'row',
                paddingLeft: '50px',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            > <div>
                <Item>
                  <ImageListItem>
                    <img
                      src={cartItem.book.profilePic}
                      loading="lazy"
                    />
                  </ImageListItem>
                </Item>
              </div>
              <div className="info-calss">
                <h2>{cartItem.book.bookName}</h2>
                <h5>by {cartItem.book.authorName}</h5>
                <h5>Rs.{cartItem.book.price}</h5>
                <h5>Quantity</h5>
                <>
                  <div class="wrapper">
                    <span class="minus" onClick={handleDecrement}>-</span>
                    <span class="num" id="root" onClick={() => updateQuantity(cartItem.book.quantity)}>{qty + 1}</span>
                    <span class="plus" onClick={handleIncrement}>+</span><br />
                    <Button onClick={() => deleteCartItem(cartItem.cartId)} variant="outlined" color="secondary">Remove Item</Button>
                  </div>

                </>
                <h4>Total Price <br />{cartItem.book.price + cartItem.book.price * qty}</h4>


              </div>
            </Box>

          
        ))}
        <Link to="/customer">
          <Button variant="contained" >Continue</Button>
        </Link>
      </Card>

    </div>
  );
}
