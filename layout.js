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

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MR2D5RS"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    </>
  );
};

export default Layout;
