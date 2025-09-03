import Navigation from "./Navigation.js";

const Header = ({ siteSetting }) => {
  return (
    <header className="bg-white">
        <Navigation siteSetting={siteSetting} />
    </header>
  );
};

export default Header;

