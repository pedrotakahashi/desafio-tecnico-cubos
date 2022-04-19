import React from "react";
import { Content, SearchBox } from "./styles";

interface IProps {
  search: string;
  setSearch(value: string): void;
}

export const SearchComponent = ({search, setSearch}: IProps) => {
  
  return(
    <Content action="">
      <SearchBox
        value={search}
        type="text"
        name="query"
        id="query"
        placeholder="Busque um filme por nome, ano ou gênero"
        onChange={(e: React.FormEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)}
      />
    </Content>
  ) 
}

export default SearchComponent;

