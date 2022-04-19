import styled from 'styled-components';
import { Color, ColorBlue } from '../../Constants/colors';


export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
  margin:1.5rem;
  font-family: 'Open Sans', sans-serif;
  word-wrap: break-word;
  `;

export const MovieCard = styled.div`
  display:flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: ${Color.cultured};
  min-height: 40vh;
  max-height: 100vh;
  position: relative;
`;

export const ColumnImage = styled.div`
  /* height: 100%; */
`;
export const MovieContent = styled.div`
  height: 3.7rem;
  background-color: ${ColorBlue.sapphireBlue};
  padding: 0 2rem;
  width: 100%;
  position:relative;
`;

export const Title = styled.div`
  color: ${ColorBlue.fluorescenteBlue};
  font-size: 1.3rem;
  font-weight: bold;
  padding-top:1rem;
  margin-left: 5rem; 
`;

export const ReleaseDate = styled.div`
  color: ${Color.gainsboro};
  font-weight: bold;
  font-size: 1rem;
  padding-left: 5rem;
  margin-top: 1rem;
`;

export const Header = styled.div`
  color: ${ColorBlue.fluorescenteBlue};
  text-align:center;
  font-size: 2rem;
  padding-top: 1.3rem;
`;

export const Overview = styled.div`
  color: ${ColorBlue.airSuperiorityBlue};
  padding-top: 1.2rem;
  white-space: normal;
`;

export const Text = styled.span`
  color: ${Color.sonicSilver};
  font-weight: bold;
`;

export const BoxCircle = styled.div`
  position: absolute;
  top: 1rem;
`;

export const Circle = styled.div`
  background-color:${ColorBlue.sapphireBlue};
  height:69px;
  border-radius:50%;
  width:69px;
  display:flex;
  flex-direction: column;
  justify-content: center;
`;

export  const Average = styled.div`
  color: ${ColorBlue.fluorescenteBlue};
  font-size: 1.4rem;
  margin: 0 auto;
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

export const GenresLabels = styled.div`
  padding-top: 2rem;
  display:block;
`;

export const Label = styled.span`
  border: 2px solid ${ColorBlue.airSuperiorityBlue};
  background-color: ${Color.white};
  border-radius: 10px;
  padding: 1px 14px;
  font-weight: bold;
  color:${ColorBlue.airSuperiorityBlue};
  margin-right:0.5rem;
  transition: 1s;
  :hover {
    border: 2px solid ${ColorBlue.beauBlue};
    transition: 0.47s;
  }
`;

