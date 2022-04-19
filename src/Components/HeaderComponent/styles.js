import styled from 'styled-components';
import { ColorBlue } from '../../Constants/colors';

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
  font-family: 'Open Sans', sans-serif;
`;

export const Header = styled.div`
  color: ${ColorBlue.fluorescenteBlue};
  text-align:center;
  font-size: 2rem;
  padding-top: 1.3rem;
`;

export const SectionBar = styled.div`
  background-color: ${ColorBlue.sapphireBlue};
  height:5rem;
  width: 100vw;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${ColorBlue.fluorescenteBlue};
  :visited {
    text-decoration:none;
  }
`;