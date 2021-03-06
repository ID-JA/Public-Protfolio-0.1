import React from 'react';
import { techStack } from '../../data';
import styled from 'styled-components';
import uuid from 'react-uuid';
import { colors } from '../GlobalStyling';
import './skills.css';

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
		left: 136px;
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
		left: 159px;
	}
`;

const TechSection = styled.section`
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

const Techno = styled.li`
	margin: 0.7rem;
	width: 150px;
	height: 50px;
	display: grid;
	font-weight: bold;
	color: #fff;
	font-size: 1.1rem;
	place-items: center;
	border-radius: 5px;
	transition: all 0.3s ease;
	:hover {
		background: transparent !important;
		cursor: default;
		color: #383838;
	}

	@media only screen and (max-width: 384px) {
		width: 100px;
		height: 40px;
	}
`;

const SkillsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	@media only screen and (max-width: 1300px) {
		justify-content: center;
	} ;
`;

const TechContainer = styled.ul`
	margin-top: 1rem;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	@media only screen and (min-width: 1200px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
`;

const SingleSvg = styled.div`
	width: 230px;

	transition: all 0.5s ease;
	@media only screen and (max-width: 1024px) {
		width: 190px;
	}

	@media only screen and (max-width: 384px) {
		width: 120px;
	}
`;

const SvgsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
function Skills() {
	return (
		<TechSection className='row mt-5'>
			<div className='col-lg'>
				<div>
					{/* Section Title */}
					<SectionTitles>
						<h1 className='text-dark font-weight-bold'>Tech Stack</h1>
					</SectionTitles>
					<SkillsContainer>
						<TechContainer>
							{techStack.map((tech) => {
								const { name, style } = tech;
								return (
									<Techno
										data-aos='fade-down'
										data-aos-once='true'
										className='Tech'
										key={uuid()}
										style={style}
									>
										{name}
									</Techno>
								);
							})}
						</TechContainer>
						{/* SVGs */}
						<SvgsContainer>
							<SingleSvg className='TechSvg reactSvg'>
								<svg viewBox='0 0 128 128'>
									<g fill='#61DAFB'>
										<circle cx='64' cy='64' r='11.4'></circle>
										<path d='M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z'></path>
									</g>
								</svg>
							</SingleSvg>
							
							<SingleSvg className='TechSvg aspSvg'>
								<svg viewBox='0 0 128 128'>
									<linearGradient
										id='a'
										gradientUnits='userSpaceOnUse'
										x1='61.631'
										y1='563.347'
										x2='62.022'
										y2='563.347'
										gradientTransform='matrix(0 149.735 149.735 0 -84296.266 -9188.014)'
									>
										<stop offset='0' stopColor='#0994DC'></stop>
										<stop offset='.35' stopColor='#66CEF5'></stop>
										<stop offset='.35' stopColor='#66CEF5'></stop>
										<stop offset='.846' stopColor='#127BCA'></stop>
										<stop offset='.846' stopColor='#127BCA'></stop>
										<stop offset='1' stopColor='#127BCA'></stop>
									</linearGradient>
									<path
										fill='url(#a)'
										d='M45.288 49.559c4.417 13.507 6.09 37.601 19.006 37.601.982 0 1.977-.096 2.974-.286-11.74-2.737-13.132-26.569-20.297-38.912-.562.511-1.118 1.043-1.683 1.597'
									></path>
									<linearGradient
										id='b'
										gradientUnits='userSpaceOnUse'
										x1='61.705'
										y1='563.34'
										x2='62.095'
										y2='563.34'
										gradientTransform='matrix(0 153.551 153.551 0 -86442.719 -9435.969)'
									>
										<stop offset='0' stopColor='#0E76BC'></stop>
										<stop offset='.36' stopColor='#36AEE8'></stop>
										<stop offset='.36' stopColor='#36AEE8'></stop>
										<stop offset='.846' stopColor='#00ADEF'></stop>
										<stop offset='.846' stopColor='#00ADEF'></stop>
										<stop offset='1' stopColor='#00ADEF'></stop>
									</linearGradient>
									<path
										fill='url(#b)'
										d='M46.971 47.962c7.165 12.342 8.557 36.174 20.297 38.912.923-.169 1.847-.426 2.773-.749-10.539-5.164-13.451-28.306-21.588-39.447-.492.41-.987.839-1.482 1.284'
									></path>
									<path
										fill='#14559A'
										d='M57.294 40.623c-.98 0-1.977.096-2.977.286-2.612.493-5.268 1.618-7.944 3.321.73.722 1.427 1.547 2.081 2.448 2.723-2.259 5.427-3.928 8.12-4.932 1.012-.375 2.019-.656 3.029-.842-.729-.184-1.497-.281-2.309-.281'
									></path>
									<linearGradient
										id='c'
										gradientUnits='userSpaceOnUse'
										x1='67.486'
										y1='564.985'
										x2='67.876'
										y2='564.985'
										gradientTransform='matrix(0 -122.178 -122.178 0 69099.289 8331.043)'
									>
										<stop offset='0' stopColor='#1C63B7'></stop>
										<stop offset='.5' stopColor='#33BDF2'></stop>
										<stop
											offset='1'
											stopColor='#33BDF2'
											stopOpacity='.42'
										></stop>
									</linearGradient>
									<path
										fill='url(#c)'
										d='M78.268 81.366c1.078-.857 2.158-1.805 3.24-2.84-4.488-13.443-6.095-37.883-19.101-37.883-.93 0-1.868.087-2.804.26 11.847 2.947 13.365 28.722 18.665 40.463'
									></path>
									<path
										fill='#3092C4'
										d='M59.604 40.904c-.729-.185-1.498-.282-2.311-.282l5.114.019c-.929 0-1.867.086-2.803.263'
									></path>
									<path
										fill='#1969BC'
										d='M78.04 84.221c-.508-.485-.991-1.017-1.466-1.584-2.188 1.549-4.368 2.724-6.533 3.489.771.376 1.578.656 2.436.829.664.136 1.353.206 2.075.206 2.431 0 4.353-.288 5.987-1.072-.9-.488-1.726-1.118-2.499-1.868'
									></path>
									<linearGradient
										id='d'
										gradientUnits='userSpaceOnUse'
										x1='61.852'
										y1='563.281'
										x2='62.243'
										y2='563.281'
										gradientTransform='matrix(0 159.425 159.425 0 -89733.742 -9828.116)'
									>
										<stop offset='0' stopColor='#166AB8'></stop>
										<stop offset='.4' stopColor='#36AEE8'></stop>
										<stop offset='.4' stopColor='#36AEE8'></stop>
										<stop offset='.846' stopColor='#0798DD'></stop>
										<stop offset='.846' stopColor='#0798DD'></stop>
										<stop offset='1' stopColor='#0798DD'></stop>
									</linearGradient>
									<path
										fill='url(#d)'
										d='M56.573 41.748c10.611 5.55 11.534 30.684 20.001 40.889.568-.4 1.13-.824 1.691-1.271-5.3-11.741-6.815-37.519-18.66-40.463-1.011.189-2.02.469-3.032.845'
									></path>
									<linearGradient
										id='e'
										gradientUnits='userSpaceOnUse'
										x1='61.975'
										y1='563.367'
										x2='62.366'
										y2='563.367'
										gradientTransform='matrix(0 169.528 169.528 0 -95443.742 -10473.372)'
									>
										<stop offset='0' stopColor='#124379'></stop>
										<stop offset='.39' stopColor='#1487CB'></stop>
										<stop offset='.39' stopColor='#1487CB'></stop>
										<stop offset='.78' stopColor='#165197'></stop>
										<stop offset='.78' stopColor='#165197'></stop>
										<stop offset='1' stopColor='#165197'></stop>
									</linearGradient>
									<path
										fill='url(#e)'
										d='M48.453 46.678c8.137 11.141 11.049 34.284 21.588 39.448 2.166-.765 4.346-1.939 6.533-3.489-8.467-10.205-9.39-35.338-20.001-40.889-2.693 1.002-5.397 2.671-8.12 4.93'
									></path>
									<linearGradient
										id='f'
										gradientUnits='userSpaceOnUse'
										x1='1006.454'
										y1='-1412.08'
										x2='1008.771'
										y2='-1412.08'
										gradientTransform='matrix(4.038 0 0 -4.038 -4028.633 -5649.283)'
									>
										<stop
											offset='0'
											stopColor='#33BDF2'
											stopOpacity='.698'
										></stop>
										<stop offset='1' stopColor='#1DACD8'></stop>
									</linearGradient>
									<path
										fill='url(#f)'
										d='M40.083 49.234c-1.275 2.883-2.578 6.674-4.152 11.621 3.131-4.413 6.253-8.214 9.357-11.295-.428-1.314-.887-2.527-1.382-3.606-1.269.97-2.549 2.064-3.823 3.28'
									></path>
									<path
										fill='#2B74B1'
										d='M45.037 45.121c-.374.268-.751.542-1.13.832.495 1.08.953 2.292 1.38 3.607.564-.552 1.124-1.086 1.684-1.597-.601-1.033-1.24-1.986-1.934-2.842'
									></path>
									<path
										fill='#125A9E'
										d='M46.373 44.229c-.445.282-.888.58-1.337.891.695.855 1.333 1.81 1.936 2.844.495-.448.989-.879 1.482-1.287-.654-.9-1.35-1.726-2.081-2.448'
									></path>
									<linearGradient
										id='g'
										gradientUnits='userSpaceOnUse'
										x1='67.564'
										y1='565.48'
										x2='67.954'
										y2='565.48'
										gradientTransform='matrix(0 -119.018 -119.018 0 67408.578 8125.832)'
									>
										<stop offset='0' stopColor='#136AB4'></stop>
										<stop
											offset='.6'
											stopColor='#59CAF5'
											stopOpacity='.549'
										></stop>
										<stop
											offset='1'
											stopColor='#59CAF5'
											stopOpacity='.235'
										></stop>
									</linearGradient>
									<path
										fill='url(#g)'
										d='M118.751 39.594c-6.001 23.144-18.536 41.734-29.044 46.42h-.021l-.567.243-.069.027-.161.062-.072.03-.263.093-.108.038-.131.043-.126.044-.112.038-.224.068-.096.025-.151.041-.103.028-.165.043-.201.044c.475.175.97.264 1.503.264 9.965 0 20.013-17.858 36.638-47.556h-6.528l.001.005z'
									></path>
									<linearGradient
										id='h'
										gradientUnits='userSpaceOnUse'
										x1='998.231'
										y1='-1414.829'
										x2='1006.826'
										y2='-1414.829'
										gradientTransform='matrix(4.038 0 0 -4.038 -4028.633 -5649.283)'
									>
										<stop
											offset='0'
											stopColor='#05A1E6'
											stopOpacity='.247'
										></stop>
										<stop offset='1' stopColor='#05A1E6'></stop>
									</linearGradient>
									<path
										fill='url(#h)'
										d='M33.766 41.563l.019-.016.023-.015h.013l.161-.062.032-.016.042-.017.173-.062h.009l.383-.134.057-.015.164-.049.075-.024.165-.049.063-.017.548-.142.075-.017.16-.031.078-.024.161-.03h.038l.333-.062h.066l.154-.027.087-.015.147-.022.081-.016.358-.032c-.345-.032-.699-.054-1.061-.054-11.223 0-26.685 20.822-33.649 47.788h1.343c2.229-3.975 4.231-7.736 6.062-11.266 4.879-19.1 14.814-32.126 23.64-35.577'
									></path>
									<path
										fill='#0D82CA'
										d='M40.083 49.234c1.275-1.216 2.554-2.31 3.823-3.281-.289-.634-.589-1.222-.911-1.761-1.026 1.246-1.964 2.89-2.912 5.042'
									></path>
									<path
										fill='#0D82CA'
										d='M41.005 41.72c.733.614 1.39 1.46 1.99 2.473.189-.232.381-.447.58-.649-.834-.778-1.734-1.416-2.712-1.897l.12.057.022.016'
									></path>
									<linearGradient
										id='i'
										gradientUnits='userSpaceOnUse'
										x1='67.491'
										y1='564.359'
										x2='67.881'
										y2='564.359'
										gradientTransform='matrix(0 -121.865 -121.865 0 68797.742 8310.488)'
									>
										<stop offset='0' stopColor='#318ED5'></stop>
										<stop offset='1' stopColor='#38A7E4'></stop>
									</linearGradient>
									<path
										fill='url(#i)'
										d='M10.127 77.138c10.233-19.719 15.081-32.199 23.64-35.577-8.825 3.454-18.762 16.479-23.64 35.577'
									></path>
									<path
										fill='#127BCA'
										d='M43.574 43.544c-.199.204-.389.417-.58.649.322.538.621 1.124.913 1.76.378-.29.756-.563 1.129-.832-.462-.571-.951-1.101-1.462-1.577'
									></path>
									<linearGradient
										id='j'
										gradientUnits='userSpaceOnUse'
										x1='67.593'
										y1='564.41'
										x2='67.984'
										y2='564.41'
										gradientTransform='matrix(0 -118.46 -118.46 0 66884.703 8093.017)'
									>
										<stop offset='0' stopColor='#05A1E6'></stop>
										<stop
											offset='1'
											stopColor='#05A1E6'
											stopOpacity='.549'
										></stop>
									</linearGradient>
									<path
										fill='url(#j)'
										d='M14.773 88.315l-.186.022h-.035l-.158.016h-.026l-.376.025h-.039c10.356-.29 15.091-5.475 17.44-12.997 1.785-5.701 3.252-10.505 4.537-14.535-4.338 6.106-8.696 13.384-13.077 21.539-2.112 3.93-5.325 5.572-8.08 5.922'
									></path>
									<linearGradient
										id='k'
										gradientUnits='userSpaceOnUse'
										x1='68.291'
										y1='564.525'
										x2='68.682'
										y2='564.525'
										gradientTransform='matrix(0 -100.1 -100.1 0 56536.551 6924.301)'
									>
										<stop offset='0' stopColor='#1959A6'></stop>
										<stop offset='.5' stopColor='#05A1E6'></stop>
										<stop offset='.5' stopColor='#05A1E6'></stop>
										<stop offset='.918' stopColor='#7EC5EA'></stop>
										<stop offset='1' stopColor='#7EC5EA'></stop>
									</linearGradient>
									<path
										fill='url(#k)'
										d='M14.773 88.311c2.755-.351 5.968-1.991 8.08-5.923 4.381-8.151 8.741-15.431 13.075-21.538 1.577-4.949 2.878-8.737 4.154-11.621-8.639 8.223-17.311 21.896-25.31 39.077'
									></path>
									<path
										fill='#05A1E6'
										d='M10.127 77.139c-1.831 3.53-3.833 7.291-6.063 11.266h3.904c.517-3.948 1.249-7.711 2.158-11.264'
									></path>
									<linearGradient
										id='l'
										gradientUnits='userSpaceOnUse'
										x1='67.892'
										y1='563.82'
										x2='68.282'
										y2='563.82'
										gradientTransform='matrix(-19.138 -108.537 -108.537 19.138 62523.5 -3335.822)'
									>
										<stop offset='0' stopColor='#165096'></stop>
										<stop offset='1' stopColor='#0D82CA'></stop>
									</linearGradient>
									<path
										fill='url(#l)'
										d='M37.073 40.709l-.083.016-.146.021-.086.015-.154.027-.066.016-.333.058h-.038l-.162.032-.081.022-.157.031-.074.018-.549.142-.063.018-.166.049-.075.021-.163.049-.06.016-.381.134-.173.06-.072.03-.161.06-.054.026c-8.558 3.377-13.406 15.857-23.639 35.576-.909 3.552-1.645 7.316-2.158 11.264h.547l3.755-.016h1.7229999999999999l.375-.025h.024l.158-.016h.037l.186-.022c8-17.182 16.672-30.854 25.31-39.077.95-2.152 1.887-3.796 2.911-5.04-.6-1.013-1.256-1.861-1.988-2.476l-.021-.016-.122-.059-.121-.061-.117-.057-.139-.058-.108-.047-.227-.095-.097-.036-.169-.068-.091-.03-.235-.081h-.019l-.272-.077-.061-.019-.229-.064-.053-.015c-.185-.05-.376-.088-.569-.125l-.059-.016-.247-.04-.049-.015-.292-.039h-.051l-.226-.025-.358.033'
									></path>
									<linearGradient
										id='m'
										gradientUnits='userSpaceOnUse'
										x1='70.847'
										y1='566.882'
										x2='71.237'
										y2='566.882'
										gradientTransform='matrix(0 -56.721 -56.721 0 32252.127 4080.282)'
									>
										<stop offset='0' stopColor='#05A1E6'></stop>
										<stop offset='.874' stopColor='#0495D6'></stop>
										<stop offset='1' stopColor='#0495D6'></stop>
									</linearGradient>
									<path
										fill='url(#m)'
										d='M95.311 52.407c-1.97 6.307-3.563 11.51-4.952 15.791 5.403-7.435 10.725-16.787 15.792-27.579-5.913 1.857-9.065 6.107-10.84 11.788'
									></path>
									<linearGradient
										id='n'
										gradientUnits='userSpaceOnUse'
										x1='61.634'
										y1='562.213'
										x2='62.024'
										y2='562.213'
										gradientTransform='matrix(-23.063 130.795 130.795 23.063 -72004.344 -20989.861)'
									>
										<stop
											offset='0'
											stopColor='#38A7E4'
											stopOpacity='.329'
										></stop>
										<stop offset='.962' stopColor='#0E88D3'></stop>
										<stop offset='.962' stopColor='#0E88D3'></stop>
										<stop offset='1' stopColor='#0E88D3'></stop>
									</linearGradient>
									<path
										fill='url(#n)'
										d='M90.53 85.621c-.275.14-.552.273-.823.394 10.508-4.687 23.044-23.277 29.044-46.421h-1.216c-13.788 24.631-18.222 41.12-27.005 46.027'
									></path>
									<path
										fill='#079AE1'
										d='M83.668 83.552c2.287-2.791 4.148-7.535 6.691-15.354-2.933 4.029-5.885 7.492-8.84 10.316l-.015.025c.645 1.931 1.352 3.636 2.158 5.012'
									></path>
									<path
										fill='#1969BC'
										d='M83.668 83.552c-.778.95-1.603 1.673-2.519 2.209-.2.117-.404.227-.61.327.968.522 2.023.872 3.206 1.011l.524.046h.031l.252.016h.855l.097-.016.189-.016h.092l.205-.022h.017l.063-.015.219-.034h.064l.246-.041h.04l.491-.104c-1.357-.496-2.492-1.667-3.469-3.334'
									></path>
									<path
										fill='#1E5CB3'
										d='M64.295 87.161c.982 0 1.976-.096 2.973-.288.924-.167 1.848-.424 2.773-.747.771.376 1.579.656 2.435.831.664.135 1.354.205 2.077.205h-10.258z'
									></path>
									<path
										fill='#1E5CB3'
										d='M74.553 87.161c2.429 0 4.353-.288 5.986-1.073.968.523 2.023.872 3.206 1.012l.524.045h.031l.252.016h.302-10.301z'
									></path>
									<path
										fill='#1D60B5'
										d='M84.854 87.161h.5609999999999999l.097-.016.191-.016h.092l.204-.022h.017l.062-.016.219-.033.067-.015.247-.04h.039l.491-.104c.475.175.97.264 1.503.264l-3.788.016-.002-.018z'
									></path>
									<path
										fill='#175FAB'
										d='M81.511 78.54v-.016c-1.082 1.035-2.162 1.983-3.24 2.84-.563.447-1.125.871-1.693 1.271.476.568.959 1.1 1.468 1.585.772.749 1.597 1.38 2.498 1.867.205-.101.41-.211.609-.327.918-.536 1.741-1.26 2.52-2.209-.806-1.376-1.513-3.082-2.157-5.012'
									></path>
									<linearGradient
										id='o'
										gradientUnits='userSpaceOnUse'
										x1='61.149'
										y1='562.654'
										x2='61.539'
										y2='562.654'
										gradientTransform='matrix(0 123.742 123.742 0 -69523.625 -7527.189)'
									>
										<stop offset='0' stopColor='#168CD4'></stop>
										<stop offset='.5' stopColor='#1C87CC'></stop>
										<stop offset='1' stopColor='#154B8D'></stop>
									</linearGradient>
									<path
										fill='url(#o)'
										d='M113.685 39.594h-6.121l-.97.047-.451.966c-5.068 10.793-10.388 20.145-15.791 27.58-2.54 7.818-4.404 12.563-6.69 15.353.977 1.668 2.114 2.84 3.466 3.337l.106-.023h.022l.075-.016.17-.042.101-.029.151-.039.094-.027.226-.068.112-.038.126-.046.13-.041.106-.04.264-.093.073-.027.162-.063.068-.025.568-.243h.02c.271-.119.547-.254.821-.394 8.785-4.908 13.22-21.396 27.008-46.026h-3.851l.005-.003z'
									></path>
									<path
										fill='#7DCBEC'
										d='M37.433 40.677l.063.016.16.017h.054l.292.038.049.016.246.041.062.015.567.126.052.016.228.064.063.019.271.077.021.016.237.081.09.029.17.069.096.034.226.094.11.047.136.059.12.057.119.062c.979.48 1.879 1.121 2.713 1.898.308-.323.628-.613.962-.874-1.823-1.293-3.89-2.03-6.271-2.03-.276 0-.552.016-.832.037'
									></path>
									<path
										fill='#5EC5ED'
										d='M43.574 43.544c.511.475 1 1.005 1.462 1.577.448-.311.892-.611 1.337-.891-.583-.583-1.198-1.108-1.839-1.56-.333.26-.652.552-.96.874'
									></path>
									<g transform='matrix(5.048 0 0 -5.048 -9064.26 2270.61)'>
										<linearGradient
											id='p'
											gradientUnits='userSpaceOnUse'
											x1='1806.96'
											y1='336.158'
											x2='1807.35'
											y2='336.158'
											gradientTransform='matrix(28.503 -11.822 -11.822 -28.503 -45726.879 31386.199)'
										>
											<stop offset='0' stopColor='#97D6EE'></stop>
											<stop offset='.703' stopColor='#55C1EA'></stop>
											<stop offset='1' stopColor='#55C1EA'></stop>
										</linearGradient>
										<path
											fill='url(#p)'
											d='M1802.977 441.733l.165.007c.472 0 .881-.146 1.242-.402.381.301.842.406 1.482.406h-3.099l.21-.011'
										></path>
									</g>
									<g transform='matrix(5.048 0 0 -5.048 -9064.26 2270.61)'>
										<linearGradient
											id='q'
											gradientUnits='userSpaceOnUse'
											x1='1808.848'
											y1='335.171'
											x2='1809.238'
											y2='335.171'
											gradientTransform='matrix(22.512 10.205 10.205 -22.512 -42336.426 -10473.638)'
										>
											<stop offset='0' stopColor='#7ACCEC'></stop>
											<stop offset='1' stopColor='#3FB7ED'></stop>
										</linearGradient>
										<path
											fill='url(#q)'
											d='M1805.866 441.744c-.64 0-1.1-.105-1.482-.406.126-.089.248-.193.364-.309.531.337 1.056.561 1.574.658.198.037.395.056.589.056h-1.045v.001z'
										></path>
									</g>
									<linearGradient
										id='r'
										gradientUnits='userSpaceOnUse'
										x1='61.049'
										y1='562.706'
										x2='61.439'
										y2='562.706'
										gradientTransform='matrix(0 121.032 121.032 0 -68011.711 -7346.748)'
									>
										<stop offset='0' stopColor='#1DA7E7'></stop>
										<stop offset='1' stopColor='#37ABE7' stopOpacity='0'></stop>
									</linearGradient>
									<path
										fill='url(#r)'
										d='M90.359 68.202c1.391-4.284 2.98-9.485 4.954-15.794 1.777-5.684 4.925-9.934 10.835-11.788l.456-.966c-9.636.577-14.14 5.479-16.405 12.738-3.964 12.673-6.365 20.888-8.677 26.123 2.952-2.823 5.904-6.288 8.837-10.313'
									></path>
								</svg>
						
							</SingleSvg>
						</SvgsContainer>
					</SkillsContainer>
				</div>
			</div>
		</TechSection>
	);
}

export default Skills;
