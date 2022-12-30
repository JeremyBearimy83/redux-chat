import PropTypes from "prop-types";
const Layout = ({ children }) => {
  return <>{children}</>;
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
