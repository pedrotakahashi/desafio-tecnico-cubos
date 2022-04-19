import React from "react";
import { Section } from "../../Constants/movie";
import { Content, Header, SectionBar, Link } from "./styles";


export const HeaderComponent = () => {
  return(
    <Content>
      <SectionBar>
        <Header>
        <Link href="/" > {Section.movie}</Link>
        </Header>
      </SectionBar>
    </Content>
  ) 
}

export default HeaderComponent;
