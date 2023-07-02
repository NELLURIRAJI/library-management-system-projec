import React from "react";
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
} from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";
import BookCards from "../components/bookcards";

const Home = () => {
  return (
    <div>
      <NavbarHead />
      <PageContainer>
        <ContentContainer>
          <br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br>
          <HeadTitle style={{ marginTop: "130px"  }}>
            <h1>Library Management System</h1>
          </HeadTitle>
        </ContentContainer>
        <FooterBottom />
      </PageContainer>
    </div>
  );
};

export default Home;
