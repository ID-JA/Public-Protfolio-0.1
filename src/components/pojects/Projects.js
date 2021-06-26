import React from 'react';
import styled from 'styled-components';
import { colors } from '../GlobalStyling';
import { myprojects } from '../../data';
import uuid from 'react-uuid';
import './projects.css';
import { useGlobalContext } from '../../context';
// import { makeStyles } from '@material-ui/core';
import ProjectModal from './ProjectModal';

const ProjectsSection = styled.div`
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
		top: -8px;
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
		left: 101px;
	}
`;

const ProjectContainer = styled.div`
	position: relative;
`;

const SingleProject = styled.article`
	margin: 1.5rem 0;

	border-radius: 5px;
`;

const ImageContainer = styled.div`
	overflow: hidden;
	position: relative;
	background: ${colors.ligthSecandary};
`;

const ProjectImage = styled.img`
	width: 100%;
	height: 230px;
	object-fit: cover;
	transition: all 0.3s ease;
	@media only screen and (max-width: 768px) {
		object-fit: cover;
	}
`;

const Overly = styled.div`
	background: ${colors.lowOpacitcy};
	opacity: 1;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.7s ease;
	transform: translateY(100%);
`;

const PreviewLink = styled.div`
	color: #ffffff;

	padding: 6px 16px;
	border-radius: 5px;
	transition: all 0.5 ease;
	background: ${colors.secandary};
	:hover {
		color: ${colors.secandary};
		background: #fff;
		cursor: pointer;
	}
`;

const ProjectTitle = styled.div`
	background: #fff;
	padding: 20px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`;

function Projects() {
	const { idModal, getModal, closeModal } = useGlobalContext();

	return (
		<div className='container' id='Projects'>
			<ProjectsSection>
				<SectionTitles>
					<h1 className=' font-weight-bold text-dark'>Projects</h1>
					<p className='text-muted'> Latest Porjects In Web </p>
				</SectionTitles>
				<ProjectContainer className='row'>
					{myprojects.map((project) => {
						const {
							id,
							image,
							title,
							url,
							description,
							tools,
							published,
							withCodeSource,
							repoUrl,
							done,
						} = project;

						return (
							<SingleProject key={uuid()} className='col-lg-4 col-md-6 singleP'>
								{/* Image Container */}
								<div className='h-100'>
									<ImageContainer>
										<ProjectImage className='PImg' src={image} alt='' />
										<Overly className='overly'>
											<PreviewLink type='button' onClick={() => getModal(id)}>
												More Detials
											</PreviewLink>
										</Overly>
									</ImageContainer>
									<ProjectTitle>
										<h6 className='text-dark '>{title}</h6>
									</ProjectTitle>
								</div>
								<ProjectModal
									projectUrl={url}
									image={image}
									title={title}
									description={description}
									tools={tools}
									state={done}
									repoUrl={repoUrl}
									withCodeSource={withCodeSource}
									published={published}
									hide={() => closeModal(id)}
									show={idModal === id}
								/>
							</SingleProject>
						);
					})}
				</ProjectContainer>
			</ProjectsSection>
		</div>
	);
}

export default Projects;
