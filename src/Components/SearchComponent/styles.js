import styled from 'styled-components';
import { Color, ColorBlue } from '../../Constants/colors';

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
  margin:1.5rem;
  font-family: 'Open Sans', sans-serif;
  `;

export const SearchBox = styled.input`
  background-color:${Color.platinum};
  
  width: 100%;
  border: none;
  border-radius: 50px;
  height: 5vh;
  padding-left: 2rem;
  ::placeholder {
    color: ${ColorBlue.airSuperiorityBlue};
  }
`;

 