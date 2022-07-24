import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children ,darkTheme }) {
  return (
    <>
      <Navbar darkTheme={darkTheme} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
