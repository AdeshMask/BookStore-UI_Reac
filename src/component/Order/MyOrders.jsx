import React, { useState, useEffect } from 'react';
import Header from '../Header/Header'
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import cx from 'clsx';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import OrderServices from '../Service/OrderService'
import OrderService from '../Service/OrderService';
import './MyOrder.css'


const useStyles = makeStyles(({ breakpoints, spacing }) => ({

	root: {
		marginTop: "2rem",
		borderRadius: spacing(2), // 16px
		transition: '0.3s',
		//   boxShadow: '0px 10px 20px #1687d933',
		position: 'relative',
		width: '100%',
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

function MyOrders() {
	const styles = useStyles();
	const {
		button: buttonStyles,
		...contentStyles
	} = useBlogTextInfoContentStyles();
	const shadowStyles = useOverShadowStyles();
	const [OderSummary, setOderSummary] = useState([]);

	const fetchOrderDetails = () => {
		OrderService.getUserById().then((response) => {
			setOderSummary(response.data.data);
			console.log(response.data.data);			
		})
	};
	console.log(OderSummary);
	
	useEffect(() => {
		// fetchCartDetails();
		fetchOrderDetails();
	}, []);

	return (
		<div>
			<Header />{OderSummary.map((order, index) => {
			<Card className={cx(styles.root, shadowStyles.root)}>
				
				{/* return ( */}
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
									// src={order.bookId.profilePic}
									loading="lazy"
								/>
							</ImageListItem>
						</Item>
					</div>
					<div className="info-calss">
						{/* <h2>{cartItem.bookId.bookName}</h2>
									<h5>by {cartItem.bookId.authorName}</h5>
									<h5>Rs.{cartItem.bookId.price}</h5> */}
						{/* <h5>Quantity</h5> */}
						{/* <h4>Total Price <br />{cartItem.bookId.price + cartItem.bookId.price}</h4> */}
					</div>
				</Box>

				
				<div className="header-content">
					<div className="emp-detail-text">
						Order Summery<div className="{order.length}"></div>
					</div>
				</div>
				<div className="table-main">
					<table id="table-display" className="table">
						<tr>
							<th>Book Details</th>
							<th>Customer Details</th>
							<th>Total Price</th>
							<th>Order Id</th>
							<th>Ordered Id</th>
							<th>Actions</th>
						</tr>
						<tbody>

						</tbody>
					</table>

				</div>
			</Card>
			})} 
		</div>
	)
}

export default MyOrders