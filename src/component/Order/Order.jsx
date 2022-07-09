import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Header from '../Header/Header'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const useStyles = makeStyles(({ breakpoints, spacing }) => ({

	root: {
		margin: "5rem",
		borderRadius: spacing(2), // 16px
		boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
		marginLeft: "17rem",
		background: '#ffffff',
		alignItems: 'center',
		paddingBottom: spacing(2),
		[breakpoints.up('md')]: {
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
		marginRight: "5rem",
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

function Order() {
	const styles = useStyles();
	const {
		button: buttonStyles,
		...contentStyles
	} = useBlogTextInfoContentStyles();
	const shadowStyles = useOverShadowStyles();

	return (<>
		<Header />
		
	</>)
}
export default Order