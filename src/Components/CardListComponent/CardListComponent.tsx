import React from "react";
import GenresInterface from "../../Services/Interfaces/GenresInterface";
import { useNavigate } from 'react-router-dom';
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

export const handleGetMovieId  = (value:string) =>{
  return value;
}

export const CardListComponent = (props:{
  title?:string,
  release_date?:string,
  overview?:string,
  vote_average?:number,
  id:string,
  poster_path?:string,
  genres?:GenresInterface[],
}) => {
  
  const navigate = useNavigate();

  return(
    <Content>
      <MovieCard>
        <ColumnImage>
            <img src={props.poster_path}
            alt={props.title}
            height="100%"
            onClick={() =>navigate(`movie/${props.id}`)}/>
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
            {props.genres?.map((x) =>{
              return (
                <Label key={x.id}>
                {x.name}
                </Label>
              )
              })}
        </GenresLabels>
          </Overview>
        </MovieContent>
      </MovieCard>
    </Content>
  ) 
}

export default CardListComponent;

