import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Projects from './components/pojects/Projects';
import Contact from './components/contact/Contact';
import { GlobalStyle } from './components/GlobalStyling';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<>
			<div className='App'>
				<ThemeProvider theme={{ textAlign: 'center' }}>
					<GlobalStyle />

					<Header />
					<Home />
					<About />
					<Projects />
					<Contact />
				</ThemeProvider>
			</div>
		</>
	);
}

export default App;
