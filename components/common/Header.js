import React from "react";
import Navigation from "./Navigation.js";
import PropTypes from "prop-types";

const Header = ({ siteSetting }) => {
  return (
    <header className="bg-white">
      <Navigation siteSetting={siteSetting} />
    </header>
  );
};

Header.propTypes = {
  siteSetting: PropTypes.object,
};

export default Header;
