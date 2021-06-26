import React from 'react';
import uuid from 'react-uuid';
import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import './projects.css';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { colors } from '../GlobalStyling';

const useStyles = makeStyles((theme) => ({
	button: {
		color: '#fff',
		backgroundColor: colors.primary,
		'&:hover': {
			backgroundColor: colors.secandary,
		},
	},
	disabled: {
		color: '#fff',
		boxShadow: 'none',
		backgroundColor: 'rgba(0, 0, 0, 0.12)',
		pointerEvents: 'none',
	},
	enabled: {
		background: colors.secandary,
	},
}));

const BackDrop = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	transform: translate(-50%, -50%);
	background: #0404041c;
	z-index: 500;

	@media only screen and (max-width: 1440px) and (min-width: 1200px) {
		margin-left: 60px;
	}
	@media only screen and (max-width: 992px) and (min-width: 768px) {
		margin-left: 50px;
	}
	@media only screen and (max-width: 1200px) and (min-width: 992px) {
		margin-left: 100px;
	}
	@media only screen and (min-width: 620px) {
		padding-left: 0;
	}
`;

const Modal = styled.div`
	background: white;
	padding: 4rem;
	max-width: 700px;
	border-radius: 10px;
	z-index: 1099;
	position: relative;
	@media only screen and (max-width: 768px) {
		margin: 0rem 3rem;
		padding: 1rem;
	}
	@media only screen and (max-width: 900px) and (min-width: 768px) {
		margin: 6rem;
	}
	@media only screen and (min-width: 768px) {
		padding: 2rem;
	}
`;

const CloseButton = styled.button`
	border: none;
	outline: none;
	height: 40px;
	width: 40px;
	border-radius: 50px;
	background-color: ${colors.primary};
	color: #fff;
	position: absolute;
	right: 1rem;
	top: 1rem;
	transition: all 500ms ease;
	cursor: pointer;
	z-index: 2000;
	:hover {
		background-color: ${colors.secandary};
	}
	@media only screen and (max-width: 768px) {
		right: 0.5rem;
		top: 0.5rem;
		width: 30px;
		height: 30px;
	}
`;

const ProjectImageContainer = styled.div`
	width: 100%;
	height: 100%;
	display: felx;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 768px) {
		display: none;
	}
	@media only screen and (max-width: 900px) and (min-width: 768px) {
		display: none;
	}
`;

const ProjectImage = styled.img`
	width: 100%;
	max-width: 400px;
	height: auto;
	object-fit: cover;
	border: 1px solid #222;
`;

const ListTools = styled.ul`
	list-style: square;
	padding-left: 2rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	@media only screen and (max-width: 768px) {
	}
`;

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 1rem;
`;
const LeftSideModal = styled.div`
	@media only screen and (max-width: 900px) and (min-width: 768px) {
		display: none;
	}
`;

function ProjectModal({
	title,
	image,
	description,
	projectUrl,
	tools,
	withCodeSource,
	published,
	state,
	hide,
	show,
	repoUrl,
}) {
	const classes = useStyles();
	return (
		<>
			{show && (
				<BackDrop key={uuid()}>
					<Modal>
						<CloseButton onClick={hide}>
							<CloseIcon />
						</CloseButton>
						<div className='row'>
							<LeftSideModal className='col-md-3 col-lg-5'>
								<ProjectImageContainer>
									<ProjectImage src={image} alt='' />
								</ProjectImageContainer>
							</LeftSideModal>
							<div className='col-md-9 col-lg-7'>
								<h3 className='text-dark font-weight-bold Modaltitle '>
									{title}
								</h3>

								<p className='text-muted mb-1 desc'>{description}</p>
								<p className='mb-1'>
									{state ? 'State: Finished' : 'State: In Process'}
								</p>
								<p>I Use This Technologies:</p>
								<ListTools className='listTools'>
									{tools.map((tool) => {
										return <li key={uuid()}>{tool}</li>;
									})}
								</ListTools>
								<ButtonsContainer>
									<Button
										href={repoUrl}
										target='_blank'
										variant='contained'
										className={`bModal mx-2 ${classes.button}  ${
											withCodeSource ? classes.enabled : classes.disabled
										}`}
									>
										Code Source
									</Button>
									<Button
										variant='contained'
										href={projectUrl}
										target='_blank'
										className={`bModal ${classes.button} ${
											published ? classes.enabled : classes.disabled
										}`}
									>
										Preview
									</Button>
								</ButtonsContainer>
							</div>
						</div>
					</Modal>
				</BackDrop>
			)}
		</>
	);
}

export default ProjectModal;
