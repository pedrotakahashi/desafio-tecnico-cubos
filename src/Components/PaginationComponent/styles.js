import styled from 'styled-components';
import { Color, ColorBlue } from '../../Constants/colors';

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
  margin:1.5rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  `;

export const ContainerItem = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content:center;
  align-items: center;
  padding-top: 5rem;
`;


export const Anchor = styled.a`
  text-decoration:none;

`;

export const Circle = styled.div`
  background-color:${ColorBlue.sapphireBlue};
  height:69px;
  border-radius:50%;
  width:69px;
`;

export  const Item = styled.li`
  color: ${ColorBlue.fluorescenteBlue};
  font-size: 1.4rem;
`;

export const InternalCircle = styled.div`
  background-color: transparent;
  border-color: #00E8E4;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  margin: 0 auto;
  border: 4px solid ${ColorBlue.fluorescenteBlue};
  transition: 0.41s;
  display:flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    border: 4px solid ${ColorBlue.beauBlue};
    transition: 0.37s;
  }
`;