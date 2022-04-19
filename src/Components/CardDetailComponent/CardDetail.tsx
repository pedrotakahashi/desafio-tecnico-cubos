import React from "react";
import {  StatusMovie } from "../../Constants/movie";
import { StatusInformation,
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
//budget  = orçamento, revenue = receita

export const CardDetail = (props:{
  title?:string,
  release_date?:string,
  overview?:string,
  information?:string,
  status?:string,
  original_language?:string,
  runtime:number,
  budget?:string,
  revenue?:string,
  lucro?:string,
  id?:string,
  vote_average?:number,
  poster_path:string,
  genres?:string,
}) => {
  
  return(
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
              <HR/>
              <Text>
                {props.overview}
              </Text>
              <HR/>
              <h2>{StatusMovie.information}</h2>
              <HR/>
          </Overview>
            <StatusInformation>
              <Thead>
                <TR>
                  <TH>Situação</TH>
                  <TH>Idioma</TH>
                  <TH>Duração</TH>
                  <TH>Orçamento</TH>
                  <TH>Receita</TH>
                  <TH>Lucro</TH>
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
                  {props.runtime}
                </TD>
                <TD>
                  ${props.budget }
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
              <Label>Ação</Label>
              <Label>Aventura</Label>
              <Label>Fantasia</Label>
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

