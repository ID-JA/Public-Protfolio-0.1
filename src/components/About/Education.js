import React from 'react';
import styled from 'styled-components';
import { colors } from '../GlobalStyling';
import { education, experience } from '../../data';
import { makeStyles } from '@material-ui/core';
import uuid from 'react-uuid';

const useStyles = makeStyles((theme) => ({
	ls: {
		letterSpacing: '1px',
	},
	pt_15: {
		paddingTop: '15px',
	},
}));

const EduExperContainer = styled.div`
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
const TimeLineEducation = styled.div`
	background-color: #fff;
	border-radius: 5px;
	padding: 30px;
	margin-bottom: 30px;
	box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.2);
	margin-top: 1.5rem;
`;

const Content = styled.div`
	border-left: 2px solid ${colors.primary};
	padding: 0px 0px 50px 50px;
	transition: all 0.3s ease;
	::after {
		position: absolute;
		content: '';
		left: -6px;
		top: 6px;
		width: 13px;
		height: 13px;
		background-color: ${colors.primary};
		border-radius: 50%;
		transition: all 0.3s ease;
	}
	:hover {
		border-color: ${colors.secandary};
		::after {
			background-color: ${colors.secandary};
		}
	}
`;

const Item = styled.div`
	position: relative;
	padding: 0;
`;
function Education() {
	const classes = useStyles();
	return (
		<EduExperContainer>
			<div className='row'>
				<div data-aos='flip-left' 
				data-aos-once='true'
				className='col-lg mb-3'>
					<SectionTitles>
						<h1 className='text-dark font-weight-bold'>Education </h1>
					</SectionTitles>
					<TimeLineEducation>
						{/*  My Education */}

						{education.map((item) => {
							const { title, year, description } = item;
							return (
								<Item key={uuid()}>
									<Content>
										<h6 className={`text-dark mb-0 ${classes.ls}`}>{title}</h6>
										<small className='text-muted'>{year}</small>
										<p className={`text-dark mb-0 ${classes.pt_15}`}>
											{description}
										</p>
									</Content>
								</Item>
							);
						})}
					</TimeLineEducation>
				</div>
				<div data-aos='flip-left'
				data-aos-once='true'
				className='col-lg'>
					<SectionTitles>
						<h1 className='text-dark font-weight-bold'>Experience</h1>
					</SectionTitles>

					<TimeLineEducation>
						{/*  My Education */}

						{experience.map((item) => {
							const { title, year, description } = item;
							return (
								<Item key={uuid()}>
									<Content>
										<h6 className={`text-dark mb-0 ${classes.ls}`}>{title}</h6>
										<small className='text-muted'>{year}</small>
										<p className={`text-dark mb-0 ${classes.pt_15}`}>
											{description}
										</p>
									</Content>
								</Item>
							);
						})}
					</TimeLineEducation>
				</div>
			</div>
		</EduExperContainer>
	);
}

export default Education;
