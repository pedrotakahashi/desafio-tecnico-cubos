import React from "react";
import { TypeSection } from "../../Constants/movie";
import { Content, Header, SectionBar } from "./styles";


export const HeaderComponent = () => {
  
  return(
    <Content>
      <SectionBar>
        <Header >
          {TypeSection.movie}
        </Header>
      </SectionBar>
    </Content>
  ) 
}

export default HeaderComponent;
