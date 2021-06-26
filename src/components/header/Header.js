import React from 'react';
import uuid from 'react-uuid';
import './header.css';
import { makeStyles } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { links, socials } from '../../data';
import styled from 'styled-components';
import { colors } from '../GlobalStyling';
import { useGlobalContext } from '../../context';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
	atag: {
		textAlign: 'center',
		width: '100%',
		height: '100%',
		lineHeight: '50px',
		transition: 'all 500ms ease',
	},
	atagSocial: {
		color: '#9c27b0',
		transition: 'all 500ms ease',
		cursor: 'pointer',
	},
	df: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

const HeaderLeft = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: white;
	transition: all 500ms ease;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform: translateX(-100%);
	transition: all 0.3s linear;
	z-index: 999;
`;

const CloseButton = styled.button`
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
	:hover {
		background-color: ${colors.secandary};
	}
`;

const Brand = styled.div`
	height: 40px;
	width: 40px;
	top: 2rem;
	left: 2rem;
	background-color: ${colors.primary};
	border-radius: 50px;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 1.2rem;
	font-weight: 500;
	display: none;
	cursor: default;
	transition: all 0.3s ease;
	:hover {
		background-color: ${colors.secandary};
	}
`;
const SectionsLinks = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const SectionLink = styled.li`
	width: 100%;
	height: 50px;
`;

const SocialsLinks = styled.ul`
	position: fixed;
	bottom: 0rem;
	left: 0rem;
	width: 100%;
	padding: 2rem;
`;

const SocialLink = styled.li`
	margin: 0 0.3rem;
`;
function Header() {
	const classes = useStyles();
	const { isSideBarOpen, closeSideBar } = useGlobalContext();
	return (
		<>
			<HeaderLeft
				className={`${isSideBarOpen ? 'header-left sh' : 'header-left'}`}
			>
				{/* Portfolio Brand  */}
				<Brand className='header__brand' onClick={() => scroll.scrollToTop()}>
					JI
				</Brand>
				{/* Section Links */}
				<div className='main-menu'>
					{/* Close Button */}
					<CloseButton
						onClick={closeSideBar}
						className={`close-btn ${classes.df}`}
					>
						<Close />
					</CloseButton>
					<SectionsLinks className='header__links'>
						{links.map((link) => {
							const { text, url } = link;
							return (
								<SectionLink className={`link ${classes.df}`} key={uuid()}>
									<Link
										className={classes.atag}
										to={url}
										smooth={true}
										duration={1000}
									>
										{text}
									</Link>
								</SectionLink>
							);
						})}
					</SectionsLinks>
				</div>
				{/* Social Links */}
				<SocialsLinks className={`header__socials ${classes.df}`}>
					{socials.map((social) => {
						const { icon, url } = social;
						return (
							<SocialLink key={uuid()} className='social'>
								<a
									className={classes.atagSocial}
									target='_blank'
									rel='noreferrer'
									href={url}
								>
									{icon}
								</a>
							</SocialLink>
						);
					})}
				</SocialsLinks>
			</HeaderLeft>
		</>
	);
}

export default Header;
