import React from "react";
import { 
  Title,
  Text,
  Overview,
  MovieCard,
  Content,
  ReleaseDate,
  ColumnImage,
  Average,
  Circle,
  InternalCircle,
  BoxCircle,
  GenresLabels,
  Label,
  MovieContent
} from "./styles";


export const CardListComponent = (props:{
  title?:string,
  release_date?:string,
  overview?:string,
  vote_average?:number,
  id?:string,
  poster_path?:string,
  genres?:string,
}) => {
  
  return(
    <>
      <Content>
        <MovieCard>
          <ColumnImage>
            <img src={props.poster_path} alt={props.title} height="100%"/>
          </ColumnImage>
          <MovieContent>
            <Title>
              {props.title}
            </Title>
            <ReleaseDate>
              {props.release_date}
            </ReleaseDate>
            <BoxCircle>
              <Circle>
                <InternalCircle>
                  <Average>
                    {props.vote_average}%
                  </Average>
                </InternalCircle>
              </Circle>
            </BoxCircle>
            <Overview>
              <Text>
                {props.overview}
              </Text>
              <GenresLabels>
                <Label>Ação</Label>
                <Label>Aventura</Label>
                <Label>Fantasia</Label>
            </GenresLabels>
            </Overview>
          </MovieContent>
        </MovieCard>
      </Content>
    </>
  ) 
}

export default CardListComponent;

