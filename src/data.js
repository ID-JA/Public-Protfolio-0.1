import { LinkedIn, Twitter } from '@material-ui/icons';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
export const links = [
	{
		text: 'home',
		url: 'Home',
	},
	{
		text: 'about',
		url: 'About',
	},
	{
		text: 'projects',
		url: 'Projects',
	},
	{
		text: 'contact',
		url: 'Contact',
	},
];

export const socials = [
	{
		icon: <LinkedIn />,
		url: 'https://www.linkedin.com/in/jamal-id-aissa-94a19417b/',
	},
	{
		icon: <Twitter />,
		url: 'https://twitter.com/jidaissa',
	},
];

export const myInfo = [
	{
		text: 'Email',
		content: 'username@gmail.com',
		ico: <EmailIcon />,
	},
	{
		text: 'Phone',
		content: '06-55-22-33-44',
		ico: <PhoneIcon />,
	},
	{
		text: 'Location',
		content: 'City,Morocco',
		ico: <LocationOnIcon />,
	},
];


export const aboutMe = [
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo ullam facere! Sapiente",
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo ullam facere! Sapiente sunt dolor doloremque hic sequi! Natus magni nulla rem similique sed quaerat, at nobis laborum soluta maiores.',
];

export const techStack = [
	{
		name: 'Csharp',
		style: {
			background: '#68217A',
			border: '1px solid #68217A',
		},
	},
	{
		name: 'JavaScript',
		style: {
			background: '#F0DB4F',
			border: '1px solid #F0DB48',
		},
	},
	{
		name: 'React.Js',
		style: {
			background: '#2ACCFE',
			border: '1px solid #2ACCFE',
		},
	},
	{
		name: 'Next.Js',
		style: {
			background: '#000',
			border: '1px solid #000',
		},
	},
	{
		name: 'ASP.NET',
		style: {
			background: '#127BCA',
			border: '1px solid #127BCA',
		},
	},
	{
		name: 'HTML',
		style: {
			background: '#E44D26',
			border: '1px solid #E44D26',
		},
	},
	{
		name: 'CSS',
		style: {
			background: '#1572B6',
			border: '1px solid #1572B6',
		},
	},
	{
		name: 'SASS',
		style: {
			background: '#CB6699',
			border: '1px solid #CB6699',
		},
	},
	{
		name: 'SQL',
		style: {
			background: 'orange',
			border: '1px solid orange',
		},
	},
];

export const education = [
	{
		title: 'Bachelor Degree',
		year: '2020 - 2021',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo ullam facere! Sapiente sunt dolor doloremque hic sequi! Natus magni nulla rem similique sed quaerat, at nobis laborum soluta maiores.',
	},
	{
		title: 'Web Development',
		year: '2021 - ',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo ullam facere! Sapiente sunt dolor doloremque hic sequi! Natus magni nulla rem similique sed quaerat, at nobis laborum soluta maiores.',
	},
];

export const experience = [
	{
		title: 'Front-End Web Developer',
		year: '05/2020 - 06/2020',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo ullam facere! Sapiente sunt dolor doloremque hic sequi! Natus magni nulla rem similique sed quaerat, at nobis laborum soluta maiores.',
	},
	{
		title: 'Company Inc',
		year: '05/2020 - 06/2020',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo ullam facere! Sapiente sunt dolor doloremque hic sequi! Natus magni nulla rem similique sed quaerat, at nobis laborum soluta maiores.',
	},
];

export const myprojects = [
	{
		id: 1,
		image: 'https://creativetimblog.com/blog/wp-content/uploads/2017/05/opt_nuk_react_thumbnail.jpg',
		title: 'Project 1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo ullam facere! Sapiente sunt dolor doloremque hic sequi! Natus magni nulla rem similique sed quaerat, at nobis laborum soluta maiores.',
		tools: [
			'Csharp',
			'ASP.NET MVC',
			'Entity Framework',
			'Bootstarp 5',
			'Jquery',
			'SQl Server',
		],
		withCodeSource: false,
		published: false,
		done: false,
	},
	{
		id: 2,
		image: 'https://creativetimblog.com/blog/wp-content/uploads/2020/07/notus-react-1024x768.jpg',
		title: ' Project 2',
		url: 'https://teams-clone-id.netlify.app/',
		repoUrl: 'https://github.com/ID-JA/teams-clone',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo ullam facere! Sapiente sunt dolor doloremque hic sequi! Natus magni nulla rem similique sed quaerat, at nobis laborum soluta maiores.',
		tools: ['Tech One', 'Tech One', 'Tech Three'],
		withCodeSource: false,
		published: true,
		done: true,
	},
	{
		id: 3,
		image: 'https://madewithreact.com/content/images/2020/07/now-ui-dashboard-react.jpg',
		title: 'Project 3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo ullam facere! Sapiente sunt dolor doloremque hic sequi! Natus magni nulla rem similique sed quaerat, at nobis laborum soluta maiores.',
		tools: ['C#', 'ASP.NET Web Api', 'React.js'],
		withCodeSource: false,
		published: false,
		done: true,
	},
	{
		id: 4,
		image: 'https://creativetimblog.com/blog/wp-content/uploads/2021/01/blog-4-1.jpg',
		title: 'Project 4',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo ullam facere! Sapiente sunt dolor doloremque hic sequi! Natus magni nulla rem similique sed quaerat, at nobis laborum soluta maiores.',
		tools: [
			'JavaScript',
			'React',
			'Bootstarp',
			'Styled Components',
			'Material Ui',
		],
		withCodeSource: false,
		published: true,
		done: true,
	},
	{
		id: 5,
		image: 'https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Illustration.jpg',
		title: 'Project 5',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo ullam facere! Sapiente sunt dolor doloremque hic sequi! Natus magni nulla rem similique sed quaerat, at nobis laborum soluta maiores.',
		tools: [
			'JavaScript',
			'React',
			'Bootstarp',
			'Styled Components',
			'Tailwind Css',
		],
		withCodeSource: false,
		published: true,
		done: true,
	},
	{
		id: 6,
		image: 'https://athemes.com/wp-content/uploads/Now-UI-Dashboard-Laravel.jpg',
		title: 'Project 6',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo ullam facere! Sapiente sunt dolor doloremque hic sequi! Natus magni nulla rem similique sed quaerat, at nobis laborum soluta maiores.',
		tools: [
			'JavaScript',
			'React',
			'Bootstarp',
			'Styled Components',
			'Material Ui',
		],
		withCodeSource: false,
		published: true,
		done: true,
	},
];
