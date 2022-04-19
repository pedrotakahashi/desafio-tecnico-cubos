import React from "react";
import { Information, StatusMovie } from "../../Constants/movie";
import GenresInterface from "../../Services/Interfaces/GenresInterface";
import {
  StatusInformation,
  Title,
  SectionTitle,
  Text,
  Overview,
  ColumnInfo,
  MovieCard,
  Content,
  ReleaseDate,
  ColumnImage,
  HR,
  TR,
  TD,
  Thead,
  TH,
  TBody,
  Average,
  Circle,
  InternalCircle,
  BoxCircle,
  GenresLabels,
  Label
} from "./styles";

export const CardDetail = (props: {
  title?: string,
  release_date?: string,
  overview?: string,
  information?: string,
  status?: string,
  original_language?: string,
  runtime: number,
  budget?: string,
  revenue?: string,
  lucro?: string,
  id?: string,
  vote_average?: number,
  poster_path: string,
  genres?: GenresInterface[],
}) => {

  const getFormatedHour = (time: number) => {
    const hourArray = time.toFixed(2).toString().split('.');
    const hour = parseInt(hourArray[0]);
    const minutes = parseInt(hourArray[1]) * 60 / 100;
    return (`${hour}h${Math.ceil(minutes)}m`);
  }

  return (
    <Content>
      <SectionTitle>
        <Title>
          {props.title}
          <ReleaseDate>
            {props.release_date}
          </ReleaseDate>
        </Title>
      </SectionTitle>
      <MovieCard>
        <ColumnInfo>
          <Overview>
            <h2>{StatusMovie.overview}</h2>
            <HR />
            <Text>
              {props.overview}
            </Text>
            <HR />
            <h2>{StatusMovie.information}</h2>
            <HR />
          </Overview>
          <StatusInformation>
            <Thead>
              <TR>
                <TH>{Information.situation}</TH>
                <TH>{Information.language}</TH>
                <TH>{Information.runtime}</TH>
                <TH>{Information.budget}</TH>
                <TH>{Information.revenue}</TH>
                <TH>{Information.gross}</TH>
              </TR>
            </Thead>
            <TBody>
              <TR>
                <TD>
                  {props.status}
                </TD>
                <TD>
                  {props.original_language}
                </TD>
                <TD>
                  {getFormatedHour(props.runtime)}
                </TD>
                <TD>
                  ${props.budget}
                </TD>
                <TD>
                  ${props.revenue}
                </TD>
                <TD>
                  {props.lucro}
                </TD>
              </TR>
            </TBody>
          </StatusInformation>
          <GenresLabels>
              {props.genres?.map((x) =>{
                return (
                  <Label key={x.id}>
                  {x.name}
                  </Label>
                )
                })}
          </GenresLabels>
          <BoxCircle>
            <Circle>
              <InternalCircle>
                <Average>
                  {props.vote_average}%
                  </Average>
              </InternalCircle>
            </Circle>
          </BoxCircle>
        </ColumnInfo>
        <ColumnImage>
          <img src={props.poster_path} alt={props.title} />
        </ColumnImage>
      </MovieCard>
    </Content>
  )
}

export default CardDetail;

