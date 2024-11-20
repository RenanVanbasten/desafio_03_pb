import React from "react";
import Header from "../components/Header";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main> 
      <Features />
      <Footer />
    </div>
  );
};

export default Layout;
