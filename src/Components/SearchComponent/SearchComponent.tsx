import React,{ useState } from "react";
import { Content, SearchBox } from "./styles";


export const SearchComponent = () => {
  const [search, setSearch] = useState("");
  
  return(
    <Content action="">
      <SearchBox type="text"
      name="search"
      id="search"
      placeholder="Busque um filme por nome, ano ou gênero"
      onChange={(e: React.FormEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)}/>
    </Content>
  ) 
}

export default SearchComponent;

