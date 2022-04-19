import React from "react";
import { Anchor, Circle, ContainerItem, Content, InternalCircle, Item } from "./styles";

interface IProps {
  moviesPerPage: number;
  totalMovies: number;
  currentPage: number;
  changePage(number: number): void;
}

export const PaginationComponent = ({ moviesPerPage, totalMovies, currentPage, changePage }: IProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Content>
      <ContainerItem>
        {pageNumbers.map(number => (
          <Item key={`pagination-${number}`}>
            <Anchor href="#" onClick={() => changePage(number)} className={`${currentPage === number ? <InternalCircle> /</InternalCircle> : ''}`}>
              {number}
            </Anchor>
        </Item>
      ))}
      </ContainerItem>
    </Content>
  )
}

export default PaginationComponent;

