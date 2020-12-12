import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "@material-ui/core";
const Layout = ({ children }) => {
  return (
    <>
      <Container maxWidth="md">
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
};
export default Layout;
