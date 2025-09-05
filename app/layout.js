import React from "react";
import "../styles/global.css";
import Header from "../components/common/Header.js";
import { fetchAPI } from "../lib/api";
import Footer from "@/components/common/Footer";
import PropTypes from "prop-types";

const RootLayout = async ({ children }) => {
  const res = await fetchAPI("/api/site-setting?populate=*", {});
  const siteSetting = res.data;

  return (
    <html lang="en">
      <body>
        <main className="h-screen flex flex-col justify-between">
          <Header siteSetting={siteSetting} />
          {children}
          <Footer siteSetting={siteSetting}></Footer>
        </main>
      </body>
    </html>
  );
};
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default RootLayout;
