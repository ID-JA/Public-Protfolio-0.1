import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { colors } from '../GlobalStyling';
import logo from './logo.svg';
import { aboutMe } from '../../data';
import uuid from 'react-uuid';
import 'aos/dist/aos.css';
import Aos from 'aos';

const useStyles = makeStyles((theme) => ({
	mb_50: {
		marginBottom: '50px',
	},
	mt_2: {
		marginTop: '2.2rem',
	},

	textParagraph: {
		letterSpacing: '0.5px',
		color: '#383838',
	},
	button: {
		transition: 'all 0.3s ease',
		'&:hover': {
			backgroundColor: colors.secandary,
			color: '#fff',
		},
	},
}));

const SectionTitles = styled.div`
	position: relative;
	::before {
		position: absolute;
		content: '';
		height: 20px;
		width: 20px;
		background-color: ${colors.ligthSecandary};
		border-radius: 50px;
		z-index: -1;
		top: -3px;
		left: 80px;
	}
	::after {
		position: absolute;
		content: '';
		height: 50px;
		width: 50px;
		background-color: ${colors.ligthSecandary};
		border-radius: 50px;
		z-index: -1;
		top: -2px;
		/* right: 72%; */
		left: 101px;
	}
	@media only screen and (max-width: 1440px) and (min-width: 1200px) {
		margin-left: 83px;
	}
	@media only screen and (max-width: 992px) and (min-width: 768px) {
		margin-left: 100px;
	}
	@media only screen and (max-width: 1200px) and (min-width: 992px) {
		margin-left: 100px;
	}
	@media only screen and (min-width: 620px) {
		padding-left: 0;
	}
`;
const AboutContent = styled.div`
	@media only screen and (max-width: 1440px) and (min-width: 1200px) {
		margin-left: 83px;
	}
	@media only screen and (max-width: 992px) and (min-width: 768px) {
		flex-direction: column;
		margin-left: 100px;
	}
	@media only screen and (max-width: 1200px) and (min-width: 992px) {
		margin-left: 100px;
	}
	@media only screen and (min-width: 620px) {
		padding-left: 0;
	}
`;
const IllustartionImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const cvLink =
	'#';
function Bio() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	const classes = useStyles();
	return (
		<div className={`${(classes.mb_50, classes.mt_2)}  d-flex flex-column`}>
			{/* Title About */}
			<SectionTitles className='section__title '>
				<h1 className='text-dark font-weight-bold'>About</h1>
				<p>Some Informations About Me And What I Love To Do </p>
			</SectionTitles>
			{/* Image Content */}
			<AboutContent className='row '>
				{/* Image About */}
				<div data-aos='fade'
				data-aos-once='true'
				className='about_image col-md '>
					<IllustartionImage src={logo} alt='Your Name' />
				</div>
				{/* About Text */}
				<div data-aos='fade' className='col-md'>
					{/* paragraphs */}
					<div className='p-3'>
						<h5 className='text-dark font-weight-bold '>
							Hi,I'm User Name 
						</h5>
						{aboutMe.map((paragrph) => {
							return (
								<p key={uuid()} className={`${classes.textParagraph}`}>
									{paragrph}
								</p>
							);
						})}
						<Button
							className={`my-3 ${classes.button}`}
							variant='outlined'
							color='secondary'
							href={cvLink}
						>
							Download CV
						</Button>
					</div>
				</div>
			</AboutContent>
		</div>
	);
}

export default Bio;
