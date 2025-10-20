import Footer from "./Footer";
import Header from "./Header";
import MemeMachine from "./MemeMachine";

const Layout = () => {
  return (
    <>
      <Header />
      <main id="main">
        <MemeMachine />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
