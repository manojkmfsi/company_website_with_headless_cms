const Footer = ({ siteSetting = {} }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <p>
          {siteSetting.footer || ""}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
