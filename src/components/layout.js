import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

const StyledMain = styled.main``;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
