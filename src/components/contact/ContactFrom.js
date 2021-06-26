import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { colors } from '../GlobalStyling';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import './contact.css';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			width: '100%',
			margin: '1rem 0rem',
		},
	},
	button: {
		backgroundColor: `${colors.primary}`,
		color: '#fff',
		'&:hover': {
			backgroundColor: colors.secandary,
		},
	},
	rightIcon: {
		marginLeft: theme.spacing(1),
	},
}));

const FormContainer = styled.form`
	padding: 30px;
	position: relative;
	z-index: 1;
	margin-bottom: 30px;
	background-color: #fff;
	border-radius: 5px;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

function ContactFrom() {
	const classes = useStyles();

	// * Handle Submit
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_ud4utn9',
				'template_hi35r1s',
				e.target,
				'user_HnYhSI7wBA4c1PiAmrQ66'
			)
			.then(
				(result) => {
					console.log(result.text);
					swal({
						icon: 'success',
						text: 'The message has been sent successfully',
						className: 'Okbutton',
					});
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<FormContainer onSubmit={sendEmail} className={classes.root}>
			<TextField
				name='email'
				type='email'
				required
				id='outlined-basic'
				label='Email'
				variant='outlined'
			/>
			<TextField
				name='name'
				type='text'
				required
				id='outlined-basic'
				label='Name'
				variant='outlined'
			/>
			<TextField
				name='phoneNumber'
				type='tel'
				id='outlined-basic'
				label='Phone Number'
				variant='outlined'
			/>
			<textarea
				name='message'
				className='form-control'
				id='message'
				cols='30'
				rows='10'
				placeholder='Message'
				required
			></textarea>
			<ButtonContainer>
				<Button className={classes.button} type='submit' variant='contained'>
					Send <SendIcon className={classes.rightIcon} />
				</Button>
			</ButtonContainer>
		</FormContainer>
	);
}

export default ContactFrom;
