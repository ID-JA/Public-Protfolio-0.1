import React from 'react';
import styled from 'styled-components';
import Menu from '@material-ui/icons/Menu';
import illustration from './illustration.svg';
import { makeStyles } from '@material-ui/core';
import Typed from 'react-typed';
import './home.css';
import { size } from '../../devicesSize';
import { colors } from '../GlobalStyling';
import { useGlobalContext } from '../../context';
import { myInfo } from '../../data';
import uuid from 'react-uuid';
import { Link } from 'react-scroll';

// Typed  Animation

// Classes
const useStyles = makeStyles((theme) => ({
	button: {
		color: '#F06292',
		border: '1px solid #F06292',
		padding: '6px 16px',
		fontSize: '0.875rem',
		minWidth: '64px',
		boxSizing: 'border-box',
		transition:
			'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontWeight: '500',
		lineHeight: '1.75',
		borderRadius: '4px',
		letterSpacing: '0.02857em',
		textTransform: 'uppercase',
		'&:hover': {
			backgroundColor: colors.secandary,
			color: '#fff',
		},
	},
	headLine: {
		fontSize: '40px',
		fontWeight: 800,
	},
	subtitle: {
		letterSpacing: '2px',
	},
	df: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	fw: {
		fontWeight: 300,
	},
}));

const Illustraion = styled.img`
	z-index: -100;

	position: absolute;
	width: 636px;
	top: 50%;
	transform: translateY(-50%);
	right: 1%;
	opacity: 1;
	transition: all 0.3s ease;
	@media only screen and (max-width: ${size.laptop}) and (min-width: 620px) {
		width: 520px;
	}

	@media only screen and (max-width: 620px) {
		opacity: 0;
		width: 520px;
	}
	@media only screen and (min-width: ${size.laptopL}) {
		width: 720px;
	}
`;

const HomeContainer = styled.div`
	height: 100vh;
`;

const HomeContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	@media only screen and (max-width: 992px) and (min-width: 768px) {
		margin-left: 100px;
	}
	@media only screen and (max-width: 1200px) and (min-width: 992px) {
		margin-left: 100px;
	}
	@media only screen and (max-width: ${size.laptopL}) and (min-width: 1200px) {
		margin-left: 83px;
	}
`;

const MenuButton = styled.button`
	border: none;
	outline: none;
	height: 40px;
	width: 40px;
	border-radius: 50px;
	background-color: ${colors.primary};
	color: #fff;
	position: fixed;
	right: 2rem;
	top: 2rem;
	transition: all 500ms ease;
	cursor: pointer;
	z-index: 990;
	display: none;

	:hover {
		background-color: ${colors.secandary};
	}

	@media only screen and (max-width: 768px) {
		display: block;
	}
`;

const MyInfoContainer = styled.div`
	position: absolute;
	letter-spacing: 2px;
	padding: 1rem;
	bottom: 12px;

	justify-content: flex-start !important;
	@media only screen and (max-width: 992px) and (min-width: 768px) {
		margin-left: 100px;
	}
	@media only screen and (max-width: 1200px) and (min-width: 992px) {
		margin-left: 100px;
	}
	@media only screen and (max-width: ${size.laptopL}) and (min-width: 1200px) {
		margin-left: 83px;
	}
	@media only screen and (min-width: 620px) {
		padding-left: 0;
	}

	@media only screen and (max-width: 520px) {
		display: none !important;
	}
`;

const HowIam = styled.div`
	@media only screen and (max-width: ${size.mobileL}) {
		font-size: 28px !important;
	}
`;

function Home() {
	const classes = useStyles();
	const { openSideBar } = useGlobalContext();
	return (
		<>
			<HomeContainer className='container' id='Home'>
				<HomeContainer className='row'>
					<MenuButton onClick={openSideBar}>
						<Menu />
					</MenuButton>
					<HomeContent className='col-md '>
						<h5 className='text-dark  text-right m-1'>Hi There,</h5>
						<HowIam className='headLine d-flex'>
							<HowIam
								className={`text-dark font-weight-bold text-right mt-1 mr-2 ${classes.headLine}`}
							>
								
							</HowIam>
							<HowIam
								className={`text-dark font-weight-bold text-right mt-1 ${classes.headLine}`}
							>
								<Typed
									strings={['Portfolio', 'Developed By ID-JA', 'I Hope You Like It']}
									loop={true}
									typeSpeed={60}
									backSpeed={60}
									backDelay={50}
								/>
							</HowIam>
						</HowIam>

						<p className={`text-dark ${classes.subtitle}`}>
							Welcome to my portfolio website
						</p>

						<Link
							className={classes.button}
							to='Contact'
							smooth={true}
							duration={1000}
						>
							Contact Me
						</Link>
					</HomeContent>
					<MyInfoContainer className={`${classes.df} `}>
						{myInfo.map((info) => {
							const { text, content } = info;
							return (
								<div key={uuid()} className='mx-2'>
									<span className='text-dark'>{text}</span>
									<p className={`${classes.fw} text-dark`}>{content}</p>
								</div>
							);
						})}
					</MyInfoContainer>
					<Illustraion src={illustration} alt='Hi' />
				</HomeContainer>
			</HomeContainer>
		</>
	);
}

export default Home;
