import React from "react";
import { Section } from "../../Constants/movie";
import { Content, Header, SectionBar } from "./styles";


export const HeaderComponent = () => {
  
  return(
    <Content>
      <SectionBar>
        <Header >
          {Section.movie}
        </Header>
      </SectionBar>
    </Content>
  ) 
}

export default HeaderComponent;
