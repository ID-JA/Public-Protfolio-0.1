import { createGlobalStyle } from 'styled-components';

export const colors = {
	primary: '#9c27b0',
	secandary: '#f06292',
	ligthSecandary: '#F9BED1',
	lowOpacitcy: '#9b27b056',
};

export const GlobalStyle = createGlobalStyle`
  a{
    color:#000 ;
    text-decoration:none !important;
    cursor: pointer !important;
  }
  ul{
    list-style:none;
  }
  svg{
    width:100%;
    height:100%;
    object-fit:cover;
  }
  body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  
`;
