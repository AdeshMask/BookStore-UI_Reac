import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import '../../components/Home.css';
import Navbar from '../../components/Navbar/Navbar'

const Cart = ({ cart , handleRemoveFromCart, handleDecreaseQuantity,handleIncreaseQuantity, handleDeleteAllFromCart,products}) => {
  const classes = useStyles();
  let subtotal = 0;
  cart.map((item) => {
    subtotal=subtotal+(item.quantity*item.book.price);
  })
  console.log(cart)
  // const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
     
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/"> start adding some</Link>!
    </Typography>
  );

 
 
  const renderCart = () => (
   
    <>
    <Navbar/>
       
    {/* <header class="header">
				<div class="header-1">
					<a href="#" class="logo">
						<i class="fas fa-book" />
						Bookstore
					</a>
					<form action="" class="search-form">
						<input type="search" name="" placeholder="search here..." id="search-box" />
						<label for="search-box" class="fas fa-search" />
					</form>
					<div class="icons">
						<div id="search-btn" class="fas fa-search" />
						<i class="fas fa-search" />
						<a href="#" class="fas fa-heart" />
						<a href="#" class="fas fa-shopping-cart" />
						<div id="login-btn" class="fas fa-user" />
					</div>
				</div>
				<div class="header-2">
					<nav class="navbar">
						<li>
							<Link to="/">Home</Link>
						</li>
					</nav>
				</div>
			</header> */}
   
      <Grid container spacing={4}>
        {cart.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
           
            <CartItem book={products.find((item)=> 
              item.bookID===lineItem.book.bookID

          )} item={lineItem}  onRemoveFromCart={handleRemoveFromCart} handleDecreaseQuantity={handleDecreaseQuantity}
									handleIncreaseQuantity={handleIncreaseQuantity} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
      <Typography variant="h5" >Subtotal : <b >₹{subtotal}</b></Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={() => handleDeleteAllFromCart()} >Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" >Checkout</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h5" gutterBottom><b>Your Shopping Cart</b></Typography>
      <hr/>
      { !cart.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;