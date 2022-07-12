import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Header from '../Header/Header'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Order.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import CustomerServices from '../Service/CustomerServices'
import CartServices from '../Service/CartService';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import cx from 'clsx';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';


const useStyles = makeStyles(({ breakpoints, spacing }) => ({

	root: {
		marginTop: "2rem",
		borderRadius: spacing(2), // 16px
		transition: '0.3s',
		//   boxShadow: '0px 10px 20px #1687d933',
		position: 'relative',
		width: 535,
		overflow: 'initial',
		background: '#ffffff',
		alignItems: 'center',
		paddingBottom: spacing(2),
		[breakpoints.up('md')]: {
			// flexDirection: 'row',
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

function Order() {
	const [customerDetails, setCustomerDetails] = useState([]);

	// useEffect(() => {
	//   fetchCustomerDetails();
	// }, []);

	// const fetchCustomerDetails = () => {
	// 	CustomerServices.getUserById().then((response) => {
	// 	setCustomerDetails(response.data.data);
	// 	console.log(response.data.data);
	//   })
	// };
	// console.log(customerDetails);

	//Fetching Data
	const [cartDetails, setCartDetails] = useState([]);

	useEffect(() => {
		fetchCartDetails();
	}, []);

	const fetchCartDetails = () => {
		CartServices.getAll().then((response) => {
			setCartDetails(response.data.data);
			// localStorage.setItem('CartId', response.data.data.cartId);
			console.log(response.data.data)
		})
	};
	console.log(cartDetails);

	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const styles = useStyles();
	const {
		button: buttonStyles,
		...contentStyles
	} = useBlogTextInfoContentStyles();
	const shadowStyles = useOverShadowStyles();

	const order = () => {
		console.log("Hello")
		const id = localStorage.getItem('Authorization')
		const userId = JSON.parse(id);
		const custId = localStorage.getItem('CusomerId')
		const customerId = JSON.parse(custId);
		console.log("UserId", userId)
		console.log("CustomerId", customerId)
		let object = {
			userId: userId,
			customerId: customerId,
		}	
		console.log(object);
		// CartServices.addCartItem(object).then((response) => {
		// 	console.log(response);
		// 	window.location.reload();
		// })
	}


	return (<>
		<Header />
		<div className="form-content">
			<form className="form" action="#" onSubmit="">
				<div className="form-head">
				</div>

				<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header">
						<Typography sx={{ width: '33%', flexShrink: 0 }}>
							Customer Details
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<div>
							<TextField
								id="name" name="name"
								label="Name"
								marginRight="10px"

							/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<TextField
								id="contact"
								name="contact"
								label="Contact"

							/>
						</div> <br />
						<div>
							<TextField
								id="pinCode"
								name="pinCode"
								label="Pincode"

							/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<TextField
								id="locality"
								name="locality"
								label="Locality"

							/>
						</div> <br />
						<div >
							<TextareaAutosize
								id="address"
								name="address"
								aria-label="minimum height"
								placeholder="Address..."
								style={{ width: 485, height: 100 }}
								padding-bottom="10"


							/>
						</div> <br />
						<div>
							<TextField
								name="city"
								id="city"
								label="City"

							/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<TextField
								id="landmark"
								label="Landmark"
								name="landmark"

							/>
						</div>
						<br />

						<div>
							<FormControl>
								<FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
								<RadioGroup
									row
									aria-labelledby="demo-row-radio-buttons-group-label"
									name="row-radio-buttons-group"
								>
									<FormControlLabel name="home" id="home" control={<Radio />} label="Home" />
									<FormControlLabel name="work" id="work" control={<Radio />} label="Work" />
									<FormControlLabel name="other" id="other" control={<Radio />} label="Other" />
								</RadioGroup>
							</FormControl>
						</div>
					</AccordionDetails>
				</Accordion>

				<Card className={cx(styles.root, shadowStyles.root)}>
					{cartDetails.map((cartItem, index) => {
						return (
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
												src={cartItem.bookId.profilePic}
												loading="lazy"
											/>
										</ImageListItem>
									</Item>
								</div>
								<div className="info-calss">
									<h2>{cartItem.bookId.bookName}</h2>
									<h5>by {cartItem.bookId.authorName}</h5>
									<h5>Rs.{cartItem.bookId.price}</h5>
									<h5>Quantity</h5>
									<h4>Total Price <br />{cartItem.bookId.price + cartItem.bookId.price}</h4>


								</div>
							</Box>

						)
					})}

					<Button variant="contained" style={{ marginLeft: "75%" }} onClick={order} >Checkout</Button>

				</Card>

			</form>
		</div >
	</>)
}
export default Order