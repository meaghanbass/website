import { globalStyles } from "./utils";
import { Global } from "@emotion/react";
import Header from "./components/header";
import Footer from "./components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />

      {/* <Header /> */}

      <main>
        <div className="container">{children}</div>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
