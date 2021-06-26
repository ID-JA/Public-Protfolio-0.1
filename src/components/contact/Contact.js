import React from 'react';
import styled from 'styled-components';
import { colors } from '../GlobalStyling';
import FormContainer from './ContactFrom';
import { myInfo } from '../../data';
import uuid from 'react-uuid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	IconLeft: {
		marginRight: theme.spacing(1),
		color: colors.primary,
	},
}));

const ContactSection = styled.section`
	margin-top: 50px;
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
		top: -20px;
		left: 30px;
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
		left: -3px;
	}

	@media only screen and (max-width: 650px) {
		::after {
			left: -5px;
		}
	}
`;

const InfoContainer = styled.div``;
const ContentContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`;

function Contact() {
	const classes = useStyles();

	return (
		<div className='container'>
			<ContactSection className='pb-5' id='Contact'>
				<SectionTitles>
					<h1 className=' font-weight-bold text-dark'>Contact</h1>
					<p className='text-muted'> Feel Free To Contact Me</p>
				</SectionTitles>
				<div className='row'>
					<div className='col-lg-6'>
						{/*Contact Form*/}
						<FormContainer />
					</div>
					<div className='col-lg-6'>
						<h4 className='text-dark font-weight-bold mb-3'>
							Let's talk about your next project
						</h4>
						<p className='text-dark mb-5'>
							If you like my work, feel free to contact me. Here below are my
							contact N° & work email. Let's talk about what you want, I am
							ready to create it for you.
						</p>

						<InfoContainer>
							{myInfo.map((info) => {
								return (
									<div key={uuid()} className='mb-3'>
										<h5>{info.text}:</h5>
										<ContentContainer>
											<div className={classes.IconLeft}>{info.ico}</div>
											<p className='text-muted'>{info.content}</p>
										</ContentContainer>
									</div>
								);
							})}
						</InfoContainer>
					</div>
				</div>
			</ContactSection>
		</div>
	);
}

export default Contact;
