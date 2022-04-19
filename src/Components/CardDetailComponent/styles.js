import styled from 'styled-components';
import { Color, ColorBlue } from '../../Constants/colors';


export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
  margin:1.5rem;
  font-family: 'Open Sans', sans-serif;
  `;

  export const HR = styled.div`
    border-top: 2px solid ${ColorBlue.eletricBlue};
    margin: 1rem 0;
  `;

export const SectionBar = styled.div`
  background-color: ${ColorBlue.sapphireBlue};
  height:5rem;
  margin: 3rem 0;
`;

export const MovieCard = styled.div`
  display:flex;
  background-color: ${Color.cultured};
`;

export const SectionTitle = styled.div`
  height: 3.7rem;
  background-color: ${Color.platinum};
  padding: 0 2rem;
`;

export const Title = styled.div`
  color: ${ColorBlue.sapphireBlue};
  font-size: 1.7rem;
  font-weight: bold;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-top:1rem;
`;

export const ReleaseDate = styled.div`
  text-align:right;
  color: ${Color.gainsboro};
  font-weight: bold;
  font-size: 1rem;
`;

export const ColumnInfo = styled.div`
  padding: 0 2rem;
  position: relative;
`;

export const ColumnImage = styled.div`
right: 0;
`;
export const Header = styled.div`
  color: ${ColorBlue.fluorescenteBlue};
  text-align:center;
  font-size: 2rem;
  padding-top: 1.3rem;
`;

export const Overview = styled.div`
  color: ${ColorBlue.airSuperiorityBlue};
`;

export const StatusInformation = styled.table`
  color: ${ColorBlue.airSuperiorityBlue};
  width:100%;
`;

export const TH = styled.th`
`;
export const Thead = styled.thead`
`;

export const TR = styled.tr`
  text-align: justify;
`;

export const TD = styled.td`
  color: ${Color.grayWeb};
  font-weight: bold;
`;
export const TFoot = styled.tfoot`
`;

export const TBody = styled.tbody`
`;

export const Text = styled.span`
  color: ${Color.sonicSilver};
  font-weight: bold;
`;

export const BoxCircle = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

export const Circle = styled.div`
  background-color:${ColorBlue.sapphireBlue};
  height:100px;
  border-radius:50%;
  width:100px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  float:right;
`;

export const InternalCircle = styled.div`
  background-color: transparent;
  border-color: #00E8E4;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin: 0 auto;
  border: 6px solid ${ColorBlue.fluorescenteBlue};
  transition: 1s;
  display:flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    border: 6px solid ${ColorBlue.beauBlue};
    transition: 0.47s;
  }
`;

export const GenresLabels = styled.div`
  margin-top: 8rem;

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

export  const Average = styled.div`
  color: ${ColorBlue.fluorescenteBlue};
  font-size: 2rem;
  font-weight: bold;
  margin: 0 auto;
`;